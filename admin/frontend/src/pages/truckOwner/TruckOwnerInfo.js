import React, { Component, useEffect, useRef } from 'react';
import MainStructure from "components/structure/MainStructure";
import { Link } from "react-router-dom";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import TruckOwnerInfoDetail from './TruckOwnerInfoDetail';
import Loader from '../../util/Loader';

function TruckOwnerInfo(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");


        $("#truckOwnerInfoList").DataTable({
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
                url: "/v1/truckOwner/truckOwnerInfoList",
                type: "GET",
                data: { length: 100 },
                dataSrc: function (res) {
                    var data = res.data;
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
                    createdCell: function (td, cellData, rowData, row, col) {
                        $(td).text(row + 1);
                    }
                }
            ],
            columns: [
                { title: "no.", data: null },
                { title: "운송사", data: "carrierNm" },
                { title: "이름", data: "userNm" },
                { title: "코드", data: null },
                { title: "가입 상태", data: null },
                { title: "사업자 정보", data: "crqfcs.2" },
                { title: "자격 정보", data: "crqfcs.1" },
                { title: "차량등록 정보", data: "crqfcs.0" },
                { title: "결제 정보", data: null },
                { title: "근무 여부", data: null }
            ],
            createdRow: function (row, data) {
                $(row).attr("id", data.userSeq);
            }
        });
        return () => {
            console.log("컴포넌트 언마운트");
            $("#truckOwnerInfoList").DataTable().destroy(true);
        }
    }, []);

    $(document).on("click", "tbody tr", function () {
        var userSeq = $(this).attr("id");
        var url = "/truckOwner/truckOwnerInfoDetail";

        props.history.push(url, { userSeq: userSeq });
    });

    $(document).on("mouseenter", "tbody tr", function () {
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
                                <span>차주 정보</span>
                            </h1>
                            <div className="page-header-subtitle">
                                TruckOwnerInfo 차주 정보 페이지
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-n10">
                    <div className="card mb-4">
                        <div className="card-header row">
                            <div className="col-6">전체 차주 리스트</div>
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
                                    id="truckOwnerInfoList"
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

export default TruckOwnerInfo;
