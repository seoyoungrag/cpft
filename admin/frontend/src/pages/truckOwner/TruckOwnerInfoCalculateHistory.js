import React, { Component, useEffect, useRef, useState, Fragment } from 'react';
import MainStructure from "components/structure/MainStructure";
import $, { expr } from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import axios from "axios";
import imgSrc from "../../styles/캡처.png";
import Loader from "../../util/Loader";
import { Link } from "react-router-dom";
$.datepicker = require("bootstrap-datepicker");
import "styles/bootstrap-datepicker3.standalone.css";

function TruckOwnerInfoCalculateHistory(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");

        // 날짜 기능
        $(".datepicker").datepicker();

        // DataTables
        // $("#calculateHistoryList").DataTable({
        //     serverSide: false,
        //     processing: true,
        //     responsive: true,
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
        //         { title: "운송사", data: "carrierNm" },
        //         { title: "정산코드", data: "userNm" },
        //         { title: "업무형태", data: null },
        //         { title: "운송사 정산일", data: null },
        //         { title: "운송사정산 금액", data: "crqfcs.2" },
        //         { title: "플랫폼 지불금액", data: "crqfcs.1" },
        //         { title: "정산상태", data: "crqfcs.0" },
        //     ],
        //     createdRow: function (row, data) {
        //         $(row).attr("id", data.userSeq);
        //     }
        // });

        // 더미 테이블
        $("#calculateHistoryList").DataTable({
            data: array,
            columns: [
                { data: null },
                { data: "companyName" },
                { data: "calculateCode" },
                { data: "workKindOf" },
                { data: "carrierCalculateDate" },
                { data: "carrierCalculatePrice" },
                { data: "platformPay" },
                { data: "calculateStatus" }
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
            $("#calculateHistoryList").DataTable().destroy(true);
        }

    }, []);

    // inputs
    const [ inputs, setInputs ] = useState({
        // 시작 날짜
        startDate: "-",
        // 끝 날짜
        endDate: "-"
    });

    const { startDate, endDate } = inputs;

    // inputs값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // 조회 버튼 클릭
    const handleClick = () => {
        console.log("조회 버튼 클릭");
    };

    // 더미 데이터 --------------------------------------------------------------------------
    const array = [
        {
            companyName: "팀프레시",
            calculateCode: "JS0001",
            workKindOf: "고정",
            carrierCalculateDate: "2020/08/10",
            carrierCalculatePrice: "1,000,000원",
            platformPay: "1,000,000원",
            calculateStatus: "지불 완료"
        },
        {
            companyName: "팀프레시",
            calculateCode: "JS0521",
            workKindOf: "단기",
            carrierCalculateDate: "2020/08/21",
            carrierCalculatePrice: "2,000,000원",
            platformPay: "2,000,000원",
            calculateStatus: "지불 완료"
        },
        {
            companyName: "팀프레시",
            calculateCode: "JS0601",
            workKindOf: "고정",
            carrierCalculateDate: "2020/08/30",
            carrierCalculatePrice: "2,050,000원",
            platformPay: "2,050,000원",
            calculateStatus: "지불 완료"
        }
    ];
    // ----------------------------------------------------------------------------------

    return (
        <Fragment>
            <div className="card-header row">
                <div className="col-12 row mt-3">
                    <div className="col-3">
                        <div className="d-flex justify-content-start">
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-center">
                    </div>
                    <div className="form-group row col-4 d-flex justify-content-end m-auto p-auto">
                        <input
                            className="form-control datepicker col-3"
                            id="startDate"
                            name="startDate"
                            type="text"
                            placeholder="2020-01-01"
                            onChange={handleChange}
                        />
                        <label className="col-form-label ml-3 mr-3">~</label>
                        <input
                            className="form-control datepicker col-3"
                            id="endDate"
                            name="endDate"
                            type="text"
                            placeholder="2020-12-31"
                            onChange={handleChange}
                        />
                        <button className="btn btn-info ml-5" onClick={handleClick}>조회</button>
                    </div>
                </div>
            </div>
            <div className="form-row my-2 mb-3">
                <div className="datatable table-responsive">
                    <table
                        id="calculateHistoryList"
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
                                <th>운송사</th>
                                <th>정산코드</th>
                                <th>업무형태</th>
                                <th>운송사 정산일</th>
                                <th>운송사정산 금액</th>
                                <th>플랫폼 지불금액</th>
                                <th>정산상태</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default TruckOwnerInfoCalculateHistory;