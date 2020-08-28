import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import axios from "axios";

function TruckOwnerAccountDetail({location}) {
    
    useEffect(() => {
        const userSeq = location.state.userSeq;
        // axios.get("/v1/account/truckOwnerAccountDetail/"+userSeq)
        //     .then(response => {
        //         const data = response.data.data;
        //         $("#userNm").html(data.userNm !== null? data.userNm: "-");
        //         $("#userLoginId").html(data.userLoginId !== null? data.userLoginId: "-");
        //     })
        //     .catch(response => {

        //     });
        
        return () => {

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
         <span>차주 계정 정보</span>
        </h1>
        <div className="page-header-subtitle">
        차주 계정 정보를 조회합니다.
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid mt-n10">
      <div className="card mb-4">
       <div className="card-header row">
        <div className="col-6">기본 정보</div>
        <div className="col-sm-12 col-md-6 row">
         <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-info">
           <span>관리</span>
          </button>
         </div>
        </div>
       </div>
       <div className="card-body">
           <div>이름: <span id="userNm"></span></div>
           <div>ID: <span id="userLoginId"></span></div>
       </div>
      </div>

      <div className="card mb-4">
       <div className="card-header row">
        <div className="col-6">기타 정보</div>
        <div className="col-sm-12 col-md-6 row">
         <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-info">
           <span>관리</span>
          </button>
         </div>
        </div>
       </div>
       <div className="card-body">
           <div>이름: <span id="userNm"></span></div>
           <div>ID: <span id="userLoginId"></span></div>
       </div>
      </div>
      </div>
      </main>
        </MainStructure>
    )
}

export default TruckOwnerAccountDetail;
