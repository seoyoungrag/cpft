import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import Loader from '../../util/Loader';

function CarrierInfoList(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");

        // DataTables
        // $("#carrierInfoList").DataTable({
        //     serverSide: false,
        //     processing: true,
        //     responsice: true,
        //     autoWidth: false,
        //     width: "100%",
        //     ordering: false,
        //     select: false,
        //     dom:
        //         "<'row'<'col-sm-12'rt>>" +
        //         "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        //     ajax: {
        //         url: "/v1/truckOwner/truckOwnerInfoList",
        //         type: "GET",
        //         data: { length: 100 },
        //         dataSrc: function (res) {
        //             var data = res.data;
        //             return data;
        //         }
        //     },
        //     columnDefs: [
        //         {
        //             defaultContent: "-",
        //             targets: "_all",
        //         },
        //         {
        //             targets: [0],
        //             createdCell: function (td, cellData, rowData, row, col) {
        //                 $(td).text(row + 1);
        //             }
        //         }
        //     ],
        //     columns: [
        //         { title: "no.", data: null },
        //         { title: "법인명", data: "carrierNm" },
        //         { title: "운송사 코드", data: "userNm" },
        //         { title: "대표자", data: null },
        //         { title: "담당자명", data: null },
        //         { title: "담당자연락처", data: "crqfcs.2" },
        //         { title: "담당자이메일", data: "crqfcs.1" },
        //         { title: "서비스 운영 여부", data: "crqfcs.0" },
        //         { title: "계약일", data: null }
        //     ],
        //     createdRow: function (row, data) {
        //         $(row).attr("id", data.userSeq);
        //     }
        // });

        // 더미 테이블
        $("#carrierInfoList").DataTable({
            data: array,
            columns: [
                { data: null },
                { data: "corporationName" },
                { data: "carrierCode" },
                { data: "ceoName" },
                { data: "managerName" },
                { data: "managerPhoneNumber" },
                { data: "managerEmail" },
                { data: "serviceYn" },
                { data: "contractDate" }
            ],
            columnDefs: [
                {
                    defaultContent: "-",
                    targets: "_all"
                },
                {
                    targets: [0],
                    createdCell: function(td, cellData, rowData, row, col) {
                        $(td).text(row + 1);
                    }
                }
            ],
            createdRow: function(row, data, dataIndex, cells) {
                $(row).attr("id", dataIndex + 1);
            }
        });


        return () => {
            console.log("컴포넌트 언마운트");
            $("#carrierInfoList").DataTable().destroy(true);
        }
    }, []);

    // 리스트 행 클릭 시 상세보기 이동
    $(document).on("click", "tbody tr", function () {
        var userSeq = $(this).attr("id");
        var url = "/carrier/CarrierInfoDetail";

        props.history.push(url, { userSeq: userSeq });
    });

    // 리스트 마우스 hover시 포인터 변경
    $(document).on("mouseenter", "tbody tr", function () {
        $(this).css("cursor", "pointer");
    })

    // 더미 데이터 ---------------------------------------------------------------------
    const array = [
        {
            "corporationName": "(주)팀프레시",
            "carrierCode": "W000001",
            "ceoName": "이성일",
            "managerName": "홍길동",
            "managerPhoneNumber": "010-1234-5678",
            "managerEmail": "hoho@gmail.com",
            "serviceYn": "Y",
            "contractDate": "2020/08/15"
        },
        {
            "corporationName": "(주)마켓컬리",
            "carrierCode": "W000001",
            "ceoName": "이성일",
            "managerName": "고길동",
            "managerPhoneNumber": "010-1234-5678",
            "managerEmail": "gogo@gmail.com",
            "serviceYn": "Y",
            "contractDate": "2020/08/15"
        },
        {
            "corporationName": "(주)CJ홈쇼핑",
            "carrierCode": "W000001",
            "ceoName": "이성일",
            "managerName": "장보고",
            "managerPhoneNumber": "010-1234-5678",
            "managerEmail": "jojo@gmail.com",
            "serviceYn": "Y",
            "contractDate": "2020/08/15"
        }
    ];

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
                                <span>운송사 관리</span>
                            </h1>
                            <div className="page-header-subtitle">
                                CarrierInfo 운송사 정보 페이지
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-n10">
                    <div className="card mb-4">
                        <div className="card-header row">
                            <div className="col-6">전체 운송사 리스트</div>
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
                                    id="carrierInfoList"
                                    className="table table-bordered table-hover"
                                    width="100%"
                                    cellSpacing="0"
                                    role="grid"
                                    aria-describedby="dataTable_info"
                                    style={{ textAlign: "center" }}
                                >
                                    <thead>
                                        <tr>
                                            <th>no.</th>
                                            <th>법인명</th>
                                            <th>운송사 코드</th>
                                            <th>대표자</th>
                                            <th>담당자명</th>
                                            <th>담당자연락처</th>
                                            <th>담당자이메일</th>
                                            <th>서비스 운영 여부</th>
                                            <th>계약일</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainStructure>
    )

}

export default CarrierInfoList;
