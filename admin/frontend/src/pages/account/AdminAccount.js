import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import AdminAccountDetail from './AdminAccountDetail';

function AdminAccount({history, location, match}) {
    const AdminAccountTbl = useRef();

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


        $("#AdminAccountTbl").DataTable({
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
            ajax: {
                url: "/v1/user/accountList/ROLE_USER",
                type: "GET",
                data: { length: 100 }, 
                dataSrc: function(res) {
                    var data  = res.data;
                    console.log(data);
                    return data;
                }
            },
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
                { title: "no.", data: null, width: "20%" },
                { title: "ID", data: "userLoginId", width: "20%" },
                { title: "이름", data: "userNm", width: "20%" }
            ],

            createdRow: function(row, data) {
                $(row).attr("id", data.userSeq);
            }
        });
        return () => {
            console.log("component unmount");
            $("#AdminAccountTbl").DataTable().destroy(true);
        }
    }, []);

    $(document).on("click", "tbody tr", function() {
        var userSeq = $(this).attr("id");
        var url = "/account/adminAccountDetail";
        
        history.push(url, {userSeq: userSeq});
    });

    $(document).on("mouseenter", "tbody tr", function() {
        $(this).css("cursor", "pointer");
    })

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
         <span>관리자 계정</span>
        </h1>
        <div className="page-header-subtitle">
         관리자 계정를 조회합니다.
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-header row">
        <div className="col-6">관리자 계정</div>
        <div className="col-sm-12 col-md-6 row">
         <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-info">
           <span>관리</span>
          </button>
         </div>
        </div>
       </div>
       <div className="card-body">
        <div className="datatable table-responsive">
         <table
          id="AdminAccountTbl"
          ref={AdminAccountTbl}
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

export default AdminAccount;
