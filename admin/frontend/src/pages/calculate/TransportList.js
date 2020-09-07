
import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";

function TransportList(props) {
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


        $("#TransportListTbl").DataTable({
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
                { title: "운송사", data: "carrierNm", width: "8%" },
                { title: "운송그룹", data: "workGroupNm", width: "8%" },
                { title: "업무형태", data: "workType", width: "8%" },
                { title: "운송사 정산 상태", data: "carrierCalcStatus", width: "15%" },
                { title: "운송사 정산 마감일", data: "carrierCalcEndDate", width: "15%" },
                { title: "플랫폼 정산 상태", data: "platformCalcStatus", width: "15%" },
                { title: "운송사 지출완료 금액", data: "carrierPayment", width: "15%" },
                { title: "플랫폼 지출완료 금액", data: "platformPayment", width: "15%" }
            ],

            createdRow: function(row, data, dataIndex, cells) {
                $(row).attr("id", dataIndex + 1);
            },

            initComplete: function(settings, json) {
                // 리스트 클릭 시 페이지 이동
                $("#TransportListTbl tbody tr").on("click", function() {
                    const userSeq = $(this).attr("id");
                    const url = "/calculate/transportDetail";
                    props.history.push(url, { userSeq: userSeq });
                });

                // 리스트 마우스 hover시 포인터 모양 변경
                $("#TransportListTbl tbody tr").on("mouseenter", function() {
                    $(this).css("cursor", "pointer");
                });
            },
        });
        return () => {
            console.log("component unmount");
            $("#TransportListTbl").DataTable().destroy(true);
        }
    }, []);

 // 더미 데이터 ---------------------------------------------------------------------
 	const array = [
        {
            "carrierNm": "(주)팀프레시",
            "workGroupNm": "TS1",
            "workType": "고정",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/03",
            "platformCalcStatus": "진행중",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "TS2",
            "workType": "단기",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/04",
            "platformCalcStatus": "진행중",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "TS3",
            "workType": "고정",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/09",
            "platformCalcStatus": "완료",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "LF1",
            "workType": "단기",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/22",
            "platformCalcStatus": "진행중",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
        },
        {
        	"carrierNm": "(주)팀프레시",
            "workGroupNm": "LF2",
            "workType": "단기",
            "carrierCalcStatus": "완료",
            "carrierCalcEndDate": "2020/08/28",
            "platformCalcStatus": "완료",
            "carrierPayment": "420,000,000",
            "platformPayment": "420,000,000"
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
         <span>운송료 관리</span>
        </h1>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-header row">
       	<div className="col-6">운송료 관리</div>
       </div>
       <div className="card-body">
	       <div className="col-12 d-flex justify-content-end">
		       <input
		        className="form-control datepicker col-1"
		        id="date"
		        type="text"
		        placeholder="2020-08"
		       />
		       <button className="btn btn-info ml-4">조회</button>
	      </div>
        <div className="datatable table-responsive">
         <table
          id="TransportListTbl"
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
export default TransportList;