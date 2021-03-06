import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";

function CarrierCalc({history, location, match}) {
    const CarrierCalcTbl = useRef();

    console.log("component did mount");
       
    const DataTable_language = {
        decimal: ",",
        thousands: ".",
        paginate: {
         first: "",
         last: "",
         previous: "<",
         next: ">",
        },
        processing: "처리 중 입니다.",
        emptyTable: "처리할 내용이 없습니다.",
        info: "총 _PAGES_페이지/_TOTAL_개 중 (_START_ ~ _END_) ",
    };
    
    useEffect(() => {
        attachJiraIssueColletor();
            // Activate Bootstrap scrollspy for the sticky nav component
        $("body").scrollspy({
            target: "#stickyNav",
            offset: 0,
        });
        // Scrolls to an offset anchor when a sticky nav link is clicked
        $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
            $("html, body").animate(
            {
            scrollTop: target.offset().top - 81,
            },
            200
            );
            return false;
            }
        }
        });


        $("#CarrierCalcTbl").DataTable({
            //language: DataTable_language,
            serverSide: false,
            processing: true,
            responsice: true,
            autoWidth: false,
            width: "100%",
            ordering: false,
            select: false,
            dom:
             "<'row'<'col-sm-12'rt>>" +
             "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
//            ajax: {
//                url: "/v1/user/accountList/ROLE_TRUCKOWNER",
//                type: "GET",
//                data: { length: 100 }, 
//                dataSrc: function(res) {
//                    var data  = res.data;
//                    console.log(data);
//                    return data;
//                }
//            },
            columnDefs: [
                {
                 defaultContent: "-",
                 targets: "_all",
                },
                {
                    targets: [0],
                    createdCell: function(td, cellData, rowData, row, col) {
                        $(td).text(row+1);
                    }
                }
            ],
            
            columns : [
                { title: "no", data: null, width: "10%" },
                { title: "운송사", data: "ordersComplete", width: "10%" },
                { title: "운송그룹", data: "ordersComplete", width: "10%" },
                { title: "업무형태", data: "ordersComplete", width: "10%" },
                { title: "정산마감일시", data: "ordersComplete", width: "15%" },
                { title: "플랫폼 정산상태값", data: "ordersComplete", width: "15%" },
                { title: "운송사 지출완료 금액", data: "ordersComplete", width: "15%" },
                { title: "플랫폼 지출완료 금액", data: "ordersComplete", width: "15%" },
            ],

            createdRow: function(row, data) {
                $(row).attr("id", data.userSeq);
            },

            initComplete: function(settings, json) {
                // 리스트 클릭 시 페이지 이동
                $("#CarrierCalcTbl tbody tr").on("click", function() {
                    const userSeq = $(this).attr("id");
                    const url = "/calculate/CarrierCalcDetail";
                    props.history.push(url, { userSeq: userSeq });
                });

                // 리스트 마우스 hover시 포인터 모양 변경
                $("#CarrierCalcTbl tbody tr").on("mouseenter", function() {
                    $(this).css("cursor", "pointer");
                })
            },
        });
        return () => {
            console.log("component unmount");
            $("#CarrierCalcTbl").DataTable().destroy(true);
        }
    }, []);

  return (
   <MainStructure>
    <main>
     <div className="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
      <div className="container-fluid">
       <div className="page-header-content">
        <h1 className="page-header-title">
         <div className="page-header-icon">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="feather feather-edit-3"
          >
           <path d="M12 20h9"></path>
           <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
         </div>
         <span>운송사 정산</span>
        </h1>
        <div className="page-header-subtitle">
          운송사 정산 내역을 조회합니다.
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-header row">
	       <div className="nav-tabs-navigation">
		       <div className="nav-tabs-wrapper">
		           <ul className="nav nav-tabs" data-tabs="tabs">
		               <li className="nav-item">
		                   <a
		                       className="nav-link d-flex align-items-center active"
		                   >
			                   <Link to="/calculate/CarrierCalc">
		                  			<span className="sm-display-none">운송사 정산</span>
		                       </Link>
		                       <div className="ripple-container"></div>
		                   </a>
		               </li>
		               <li className="nav-item">
		                   <a
		                       className="nav-link d-flex align-items-center"
		                    >
			                   <Link to="/calculate/TransportList">
			                   		<span className="sm-display-none">운송그룹 리스트</span>
								</Link>
		                       <div className="ripple-container"></div>
		                   </a>
		               </li>
		           </ul>
		       </div>
		   </div>
       </div>
       <div className="card-body">
        <div className="datatable table-responsive">
         <table
          id="CarrierCalcTbl"
          ref={CarrierCalcTbl}
          className="table table-bordered table-hover"
          width="100%"
          cellSpacing="0"
          role="grid"
          aria-describedby="dataTable_info"
         />
        </div>
       </div>
      </div>
     </div>
    </main>
   </MainStructure>
  )
 }
export default CarrierCalc;