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
import { last } from 'rxjs/operators';


function TruckOwnerInfoAccountManagement(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");

        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);

    // inputs
    const [ inputs, setInputs ] = useState({
        registDate: "2020/08/21",
        registPath: "mobile",
        lastLoginDate: "2020/08/25"
    });

    const { registDate, registPath, lastLoginDate } = inputs;

    // inputs값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // 차주 계정 관리 탭에서는 더미데이터 사용 X - 보여줄 컬럼이 얼마 없으므로...

    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="basicInfoArea" style={{ width: "100%" }}>
                    <h4><b>가입 정보</b></h4>
                    <span style={{ marginRight: "100px" }}>가입일자</span>
                    <input type="text" id="registDate" name="registDate" onChange={handleChange} value={registDate} />
                    <span style={{ marginRight: "50px", marginLeft: "50px" }}>가입경로</span>
                    <input type="text" id="registPath" name="registPath" onChange={handleChange} value={registPath} />
                    <span style={{ marginRight: "50px", marginLeft: "50px" }}>마지막 로그인 일자</span>
                    <input type="text" id="lastLoginDate" name="lastLoginDate" onChange={handleChange} value={lastLoginDate} />
                </div>
                <div className="agreeHistory" style={{ marginTop: "50px", width: "100%" }}>
                    <h4><b>약관 동의 내역</b></h4>
                    <span style={{ marginRight: "50px" }}>약관1</span><br />
                    <span style={{ marginRight: "50px" }}>약관2</span><br />
                    <span style={{ marginRight: "50px" }}>약관3</span><br />
                </div>
                <div className="accountStatus" style={{ marginTop: "50px", width: "100%" }}>
                    <h4><b>계정 현황</b></h4>
                        ~~~~
                </div>
            </div>
        </Fragment>
    );
};

export default TruckOwnerInfoAccountManagement;