import React, { Component, useEffect, useRef, useState, Fragment } from 'react';
import MainStructure from "components/structure/MainStructure";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import axios from "axios";
import imgSrc from "../../styles/캡처.png";
import Loader from "../../util/Loader";
function TruckOwnerInfoTransferHistory(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");
        
        $("#fixedTransferList").DataTable({
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

        $("#shortTermTransferList").DataTable({
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
            $("#fixedTransferList").DataTable().destroy(true);
            $("#shortTermTransferList").DataTable().destroy(true);
        }
    }, []);

    // 데이터 조회
    // const getData = async () => {
    //     setIsLoading(true);
    //     // var userSeq = props.location.state.userSeq;
    //     var userSeq = props.userSeq;
    //     var url = "/v1/truckOwner/truckOwnerInfoDetail/";
    //     var data = null;
    //     await axios.get(url + userSeq)
    //         .then(res => {
    //             data = res.data.data;
    //             setInputs((state) => ({
    //                 ...inputs,
    //                 userName: data.userNm,
    //                 phoneNumber: data.truckOwner.phone
    //             }));

                
                
    //         })
    //         .catch(res => {
    //             alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
    //         });
            
    //     setIsLoading(false);
    // };
  
    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="transferHistoryArea">
                    <h4><b>운송내역</b></h4>
                    <div className="card-header card-header-tabs card-header-primary pb-0">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav nav-tabs" data-tabs="tabs">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center active"
                                            href="#fixed"
                                            data-toggle="tab"
                                        >
                                            <span className="sm-display-none">고정</span>
                                            <div className="ripple-container"></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center"
                                            href="#shortTerm"
                                            data-toggle="tab"
                                        >
                                            <span className="sm-display-none">단기</span>
                                            <div className="ripple-container"></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="tab-pane col-12" id="fixed">
                                <div className="form-row my-2 mb-3">
                                    <div className="datatable table-responsive">
                                        <table
                                            id="fixedTransferList"
                                            className="table table-bordered table-hover"
                                            width="100%"
                                            cellSpacing="0"
                                            role="grid"
                                            aria-describedby="dataTable_info"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane col-12" id="shortTerm">
                                <div className="form-row my-2 mb-3">
                                    <div className="datatable table-responsive">
                                        <table
                                            id="shortTermTransferList"
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
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TruckOwnerInfoTransferHistory;
