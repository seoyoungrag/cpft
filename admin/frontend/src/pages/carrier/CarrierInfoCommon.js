import React, { useEffect, useState } from "react";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import axios from "axios";
import imgSrc from "../../styles/캡처.png";

import CarrierInfoBasic from "pages/carrier/CarrierInfoBasic";
import CarrierInfoContract from "pages/carrier/CarrierInfoContract";
import CarrierInfoPayment from "pages/carrier/CarrierInfoPayment";
import CarrierInfoAccountManagement from "pages/carrier/CarrierInfoAccountManagement";

function CarrierInfoCommon(props) {

    const userSeq = props.userSeq;
    // 수정해야함
    const url = "/v1/truckOwner/truckOwnerInfoDetail/";

    useEffect(() => {
        console.log("컴포넌트 마운트");

        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);

    const [ inputs, setInputs ] = useState({
        // 운송사 이름
        carrierName: "-",
        // 사업자등록번호
        registrationNumber: "-",
        // 가입 상태
        joinStatus: "-",
        // 서비스 운영여부
        serviceYn: "-",
        // 운송사 코드
        carrierCode: "-"
    });

    const { carrierName, registrationNumber, serviceYn, carrierCode } = inputs;

    // inputs 값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    // 데이터 조회
    const getDate = async () => { 
        await axios.get(url + userSeq)
        .then(res => {
            let data = res.data.data;
            setInputs((state) => ({
                
            }));
        })
        .catch(res => {
            alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
            console.log("에러: " + res);
        })
    };

    return (
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
                            CarrierInfoDetail 운송사 정보 상세보기 페이지
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-n10">
                <div className="card mb-4">
                    <div className="card-header row">
                        <div className="col-6">운송사 정보</div>
                        <div className="col-sm-12 col-md-6 row">
                            <div className="col-12 d-flex justify-content-end">
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="basicInfoArea" style={{ overflow: "hidden", marginBottom: "20px", height: "70px" }}>
                            <div className="photoArea" style={{ float: "left", width: "90px", paddingLeft: "20px", marginRight: "20px" }}>
                                {/* <img src={imgSrc} style={{ width: "70px", height: "70px" }}></img> */}
                            </div>
                            <div className="basicInfoArea" style={{ float: "left" }}>
                                <span id="userName" style={{ fontSize: "25px", heigth: "70px", lineHeight: "70px", marginRight: "50px" }}></span>
                                <span style={{ fontSize: "15px", marginRight: "50px" }}>
                                    <b>사업자등록번호</b>&nbsp;&nbsp;
                                            <input type="text" id="registrationNumber" name="registrationNumber" onChange={handleChange} style={{ width: "130px" }} />
                                </span>
                                <span id="" style={{ fontSize: "15px", marginRight: "50px" }}><b>가입 상태</b>&nbsp;&nbsp;-</span>
                                <span style={{ fontSize: "15px", marginRight: "50px" }}>
                                    <b>서비스 운영여부</b>&nbsp;&nbsp;
                                            <input type="text" id="serviceYn" name="serviceYn" onChange={handleChange} style={{ width: "130px" }} />
                                </span>
                                <span id="" style={{ fontSize: "15px", marginRight: "50px" }}>
                                    <b>운송사 코드</b>&nbsp;&nbsp;
                                            <input type="text" id="carrierCode" name="carrierCode" onChange={handleChange} style={{ width: "130px" }} />
                                </span>
                            </div>
                            <div className="modifyBtnArea" style={{ float: "right" }}>
                                {/* <button type="button" id="basicInfoModifyBtn">수정</button> */}
                            </div>
                        </div>
                        <div className="card-header card-header-tabs card-header-primary pb-0">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav nav-tabs" data-tabs="tabs">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link d-flex align-items-center active"
                                                href="#basicInfo"
                                                data-toggle="tab"
                                            >
                                                <span className="sm-display-none">기본정보</span>
                                                <div className="ripple-container"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link d-flex align-items-center"
                                                href="#contractInfo"
                                                data-toggle="tab"
                                            >
                                                <span className="sm-display-none">계약정보</span>
                                                <div className="ripple-container"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link d-flex align-items-center"
                                                href="#paymentInfo"
                                                data-toggle="tab"
                                            >
                                                <span className="sm-display-none">결제정보</span>
                                                <div className="ripple-container"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link d-flex align-items-center"
                                                href="#accountManagement"
                                                data-toggle="tab"
                                            >
                                                <span className="sm-display-none">계정관리</span>
                                                <div className="ripple-container"></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane col-12 active" id="basicInfo">
                                    <CarrierInfoBasic />
                                </div>
                                <div className="tab-pane col-12" id="contractInfo">
                                    <CarrierInfoContract />
                                </div>
                                <div className="tab-pane col-12" id="paymentInfo">
                                    <CarrierInfoPayment />
                                </div>
                                <div className="tab-pane col-12" id="accountManagement">
                                    <CarrierInfoAccountManagement />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CarrierInfoCommon;