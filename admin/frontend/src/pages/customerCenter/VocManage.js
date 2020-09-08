
import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";

function VocManage(props) {
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


        $("#VocManageTbl").DataTable({
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
                { title: "고객분류", data: "customerType", width: "8%" },
                { title: "작성일", data: "vocRegDate", width: "10%" },
                { title: "VOC상태", data: "vocStatus", width: "10%" },
                { title: "인입채널", data: "vocChannel", width: "10%" },
                { title: "접수자", data: "vocReceiver", width: "10%" },
                { title: "처리자", data: "vocContactor", width: "10%" },
                { title: "작성자", data: "vocWriter", width: "10%" },
                { title: "문의번호", data: "csNumber", width: "10%" },
                { title: "상세보기", data: "vocDetailBtn", width: "10%", render: function ( data, type, row ) {
                    return '<button className="btn btn-info ml-2">보기</button>';
                },
                }
              ],

            createdRow: function(row, data, dataIndex, cells) {
                $(row).attr("id", dataIndex + 1);
            },

            initComplete: function(settings, json) {
                // 리스트 클릭 시 페이지 이동
                $("#VocManageTbl tbody tr").on("click", function() {
                    const userSeq = $(this).attr("id");
                    const url = "/customerCenter/vocManageDetail";
                    props.history.push(url, { userSeq: userSeq });
                });

                // 리스트 마우스 hover시 포인터 모양 변경
                $("#VocManageTbl tbody tr").on("mouseenter", function() {
                    $(this).css("cursor", "pointer");
                });
            },
        });
        return () => {
            console.log("component unmount");
            $("#VocManageTbl").DataTable().destroy(true);
        }
    }, []);

 // 더미 데이터 ---------------------------------------------------------------------
 	const array = [
 		{
            "customerType": "차주",
            "vocRegDate": "2020-08-30",
            "vocStatus": "확인중",
            "vocChannel": "게시판",
            "vocReceiver": "유아름",
            "vocContactor": "김재하",
            "vocWriter": "양차주",
            "csNumber": "M00004",
            "vocDetailBtn": "보기"
        },
        {
            "customerType": "차주",
            "vocRegDate": "2020-08-17",
            "vocStatus": "확인중",
            "vocChannel": "전화",
            "vocReceiver": "유아름",
            "vocContactor": "김재하",
            "vocWriter": "서차주",
            "csNumber": "M00003",
            "vocDetailBtn": "보기"
        },
        {
            "customerType": "차주",
            "vocRegDate": "2020-08-08",
            "vocStatus": "확인중",
            "vocChannel": "기타",
            "vocReceiver": "유아름",
            "vocContactor": "김재하",
            "vocWriter": "유차주",
            "csNumber": "M00002",
            "vocDetailBtn": "보기"
        },
        {
            "customerType": "차주",
            "vocRegDate": "2020-08-05",
            "vocStatus": "처리완료",
            "vocChannel": "기타",
            "vocReceiver": "유아름",
            "vocContactor": "김재하",
            "vocWriter": "김차주",
            "csNumber": "M00001",
            "vocDetailBtn": "보기"
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
         <span>VOC관리</span>
        </h1>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-body">
       <div className="col-12 row">
       <div className="col-3">
       	<div className="d-flex justify-content-start">
	       <label
	        htmlFor="csRegDate"
	        className="col-12 col-sm-3 col-form-label"
	       >
	        작성일 
	       </label>
	        <button type="button" className="btn btn-secondary ml-0 mr-1">
	        <span>1주일</span>
	       </button>
	       <button type="button" className="btn btn-secondary mx-1">
	        <span>1개월</span>
	       </button>
	       <button type="button" className="btn btn-secondary  mx-1">
	        <span>3개월</span>
	       </button>
	     </div>
	    </div>
	    <div className="col-4">
         <div className="d-flex justify-content-start">
	       <input
	        className="form-control datepicker col-4"
	        id="date"
	        type="text"
	        placeholder="2020-08-01"
	       />
	        	<label className="col-form-label ml-3 mr-3">~</label>
	        <input
	        className="form-control datepicker col-4"
	        id="date"
	        type="text"
	        placeholder="2020-08-30"
	       />
	       <button className="btn btn-info ml-2">조회</button>
	      </div>
	     </div>
	    </div>
	    
	    <br/>
	    
       <div className="col-12 row">
        <div className="col-3">
       	 <div className="d-flex justify-content-start">
	       	<label
	        htmlFor="csCategory"
	        className="col-12 col-sm-3 col-form-label"
	        >
	        카테고리
	        </label>
		       <select
	            className="form-control col-12 col-sm-8"
	            id="orderRegisWorkGroup"
	            name="workGroupNm"
	           >
	           	<option>문의사항</option>
	           	<option>불편사항</option>
	           	<option>기타사항</option>
	           </select>
           </div>
	     </div>
	     
	     <div className="col-7">
           <div className="d-flex justify-content-start">
         	<label
	        htmlFor="csCategory"
	        className="col-12 col-sm-2 col-form-label"
	         >
	          조건별 검색
	        </label>
		    <select
	         className="form-control col-12 col-sm-2"
	         id="orderRegisWorkGroup"
	         name="workGroupNm"
	        >
	          <option>제목</option>
	          <option>문의번호</option>
	        </select>
           <input
	        className="form-control datepicker col-6 col-sm-4"
	        id="date"
	        type="text"
	        placeholder="검색"
	       />
           	 <button className="btn btn-info ml-2">조회</button>
	       </div>
	      </div>
	      <div className="col-2">
	        <div className="d-flex justify-content-end">
	        <button className="btn btn-info ml-2">VOC추가</button>
	        </div>
	      </div>
	     </div>

	    
	     <br/>
	    
	    
        <div className="datatable table-responsive">
         <table
          id="VocManageTbl"
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
export default VocManage;