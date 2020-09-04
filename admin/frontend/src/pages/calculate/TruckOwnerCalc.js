import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";

function TruckOwnerCalc(props) {
    const TruckOwnerCalcTbl = useRef();

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


        $("#TruckOwnerCalcTbl").DataTable({
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
            data : array,
            columns : [
            	{ title: "no", data: null, width: "5%" },
                { title: "차주명", data:"truckOwnerNm", width: "15%" },
                { title: "차주코드", data:"truckOwnerCode", width: "15%" },
                { title: "세금계산서 발행", data:"taxBillYn", width: "15%" },
                { title: "총판매금액", data:"totalPayment", width: "15%" }
            ],

            
            
            createdRow: function(row, data) {
                $(row).attr("id", data.userSeq);
            },
	        
	        initComplete: function(settings, json) {
	        		// 리스트 클릭 시 페이지 이동
//	            $("#TruckOwnerCalcTbl tbody tr").on("click", function() {
//	                const userSeq = $(this).attr("id");
//	                const url = "/calculate/TruckOwnerCalcDetail";
//	                props.history.push(url, { userSeq: userSeq });
//	            });
	
		            // 리스트 마우스 hover시 포인터 모양 변경
//	            $("#TruckOwnerCalcTbl tbody tr").on("mouseenter", function() {
//	                $(this).css("cursor", "pointer");
//	            });
	        },
	    });
    
	    return () => {
	        console.log("component unmount");
	        $("#TruckOwnerCalcTbl").DataTable().destroy(true);
	    }
	}, []);

 // 더미 데이터 ---------------------------------------------------------------------
    const array = [
        {
            "truckOwnerNm": "김차주",
            "truckOwnerCode": "N0002643",
            "taxBillYn": "100",
            "totalPayment": "100"
        },
        {
            "truckOwnerNm": "유아름",
            "truckOwnerCode": "N0002644",
            "taxBillYn": "900",
            "totalPayment": "900"
        },
        {
            "truckOwnerNm": "김재하",
            "truckOwnerCode": "N0002645",
            "taxBillYn": "800",
            "totalPayment": "800"
        },
        {
            "truckOwnerNm": "양민규",
            "truckOwnerCode": "N0002646",
            "taxBillYn": "700",
            "totalPayment": "700"
        },
        {
            "truckOwnerNm": "서영락",
            "truckOwnerCode": "N0002647",
            "taxBillYn": "1000",
            "totalPayment": "1000"
        },
        {
            "truckOwnerNm": "최수정",
            "truckOwnerCode": "N0002648",
            "taxBillYn": "500",
            "totalPayment": "500"
        },
        {
            "truckOwnerNm": "유차주",
            "truckOwnerCode": "N0002649",
            "taxBillYn": "400",
            "totalPayment": "400"
        },
        {
            "truckOwnerNm": "양차주",
            "truckOwnerCode": "N0002650",
            "taxBillYn": "200",
            "totalPayment": "200"
        },
        {
            "truckOwnerNm": "서차주",
            "truckOwnerCode": "N0002651",
            "taxBillYn": "1000",
            "totalPayment": "1000"
        }
    ];
    //--------------------------------------------

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
         <span>차주 정산</span>
        </h1>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
	      <div className="card-header row">
	 		<div className="col-4 d-flex justify-content-start">
		     <input
		      className="form-control datepicker col-4"
		      id="date"
		      type="text"
		      placeholder="2020-08"
		     />
		     <button className="btn btn-info ml-5">조회</button>
		    </div>
		 </div>
       <div className="card-body">
        <div className="datatable table-responsive">
         <table
          id="TruckOwnerCalcTbl"
          ref={TruckOwnerCalcTbl}
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
export default TruckOwnerCalc;