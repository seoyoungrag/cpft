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

function TruckOwnerInfoPurchaseHistory(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");

        $("#purchaseHistoryList").DataTable({
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
            $("#purchaseHistoryList").DataTable().destroy(true);
        }
    }, []);

    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="datatable table-responsive">
                    <table
                        id="purchaseHistoryList"
                        className="table table-bordered table-hover"
                        width="100%"
                        cellSpacing="0"
                        role="grid"
                        aria-describedby="dataTable_info"
                    />
                </div>
            </div>
        </Fragment>
    );

}

export default TruckOwnerInfoPurchaseHistory;