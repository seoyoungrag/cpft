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
import { Link } from "react-router-dom"; 

function TruckOwnerInfoDetail(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");
        setData(userSeq-1);
         
        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);

    // TruckOwnerCommon에서 받아옴
    const userSeq = props.userSeq;

    // inputs
    const [inputs, setInputs] = useState({
        // 사업자등록번호
        registrationNumber: "-",
        // 과세유형
        taxType: "-",
        // 휴폐업유무
        corpState: "-",
        // 간이과세자 주민번호
        personalNumber: "-",
        // 상호
        companyName: "-",
        // 성명
        companyOwnerName: "-",
        // 업태
        businessCondition: "-",
        // 종목
        businessOption: "-",
        // 자격번호
        businessNumber: "-",
        // 차량번호
        vehicleNumber: "-",
        // 차량톤수
        tonType: "-",
        // 차량종류
        carType: "-",
        // 은행
        bankName: "-",
        // 계좌번호
        bankAccount: "-",
        // 세금계산서 유형
        taxBillType: "-"
    });

    const { registrationNumber, taxType, corpState, personalNumber, 
            companyName, companyOwnerName, businessCondition, businessOption,
            businessNumber, vehicleNumber, tonType, carType, bankName,
            bankAccount, taxBillType } = inputs;

    // inputs값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

    };

    // files
    const [files, setFiles] = useState({
        buinessLicenseImg: "",
        truckLicenseImg: "",
        carLicenseImg: "",
        bankAccountImg: ""
    });

    const { buinessLicenseImg, truckLicenseImg, carLicenseImg, bankAccountImg } = files;

    // files값 세팅
    const handleFileChange = (e) => {
        setFiles({
            ...files,
            [e.target.name]: e.target.value
        });
    };

    // 저장, 완료 버튼
    const handleClick = (e) => {
        var infoType = e.target.name;   // ~~~info
        var saveType = e.target.id;     // state, commit
        
    };

    // // 데이터 조회
    // const getData = async () => {
    //     setIsLoading(true);
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

    // 더미 데이터 세팅 ----------------------------------------------------------
    const setData = (userSeq) => {
        switch(userSeq) {
            case 0:
                setInputs((state) => ({
                    ...inputs,
                    registrationNumber: "561-88-01138",
                    taxType: "일반과세자",
                    corpState: "사업중",
                    personalNumber: "20200901",
                    companyName: "팀프레시",
                    companyOwnerName: "이성일",
                    businessCondition: "운송업",
                    businessOption: "화물",
                    businessNumber: "1-14-146139",
                    vehicleNumber: "서울 10배 1234",
                    tonType: "5t",
                    carType: "cold",
                    bankName: "nh",
                    bankAccount: "40625-21-454891",
                    taxBillType: "1"
                }));
                break;
            case 1:
                setInputs((state) => ({
                    ...inputs,
                    registrationNumber: "812-13-51128",
                    taxType: "특급과세자",
                    corpState: "사업정지",
                    personalNumber: "20200304",
                    companyName: "활빈당",
                    companyOwnerName: "홍길동",
                    businessCondition: "해운업",
                    businessOption: "크루즈선",
                    businessNumber: "101-0-239",
                    vehicleNumber: "조선 1배 0001",
                    tonType: "2t",
                    carType: "hot",
                    bankName: "kb",
                    bankAccount: "20213-51-171814",
                    taxBillType: "2"
                }));
                break;
            case 2:
                setInputs((state) => ({
                    ...inputs,
                    registrationNumber: "210-14-55128",
                    taxType: "일반과세자",
                    corpState: "사업중",
                    personalNumber: "20200505",
                    companyName: "OO운수",
                    companyOwnerName: "링컨",
                    businessCondition: "철도업",
                    businessOption: "무궁화호",
                    businessNumber: "200-57-255",
                    vehicleNumber: "미국 1철 5252",
                    tonType: "4t",
                    carType: "hot",
                    bankName: "sh",
                    bankAccount: "45213-339-1814",
                    taxBillType: "2"
                }));
                break;
        };
    };
    // ------------------------------------------------------------------------
  
    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="attachFiles" style={{ width: "100%" }}>
                    <h4><b>제출 서류</b></h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>사업자등록증</td>
                                <td style={{ width: "50%" }}><a href="#">사업자등록증 사진.jpg</a></td>
                                {/* <td><input type="file" onChange={handleFileChange} name="businessLicenseImg" value={businessLicenseImg}/></td> */}
                            </tr>
                            <tr>
                                <td>화물운송종사 자격증</td>
                                <td style={{ width: "50%" }}><input type="file" onChange={handleFileChange} name="truckLicenseImg" id="truckLicenseImg" value={truckLicenseImg} /></td>
                            </tr>
                            <tr>
                                <td>자동차등록증</td>
                                <td style={{ width: "50%" }}><input type="file" onChange={handleFileChange} name="carLicenseImg" id="carLicenseImg" value={carLicenseImg} /></td>
                            </tr>
                            <tr>
                                <td>통장 사본</td>
                                <td style={{ width: "50%" }}><input type="file" onChange={handleFileChange} name="bankAccountImg" id="bankAccountImg" value={bankAccountImg} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="buinessInfo" style={{ marginTop: "20px", width: "100%" }}>
                    <hr /><h4><b>사업자 정보</b></h4>
                    <div className="innerArea" style={{ overflow: "hidden" }}>
                        <div className="inner-left" style={{ float: "left", width: "50%" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="195px">사업자등록번호</td>
                                        <td><input type="text" onChange={handleChange} name="registrationNumber" id="registrationNumber" value={registrationNumber} /></td>
                                        <td><button>조회</button></td>
                                    </tr>
                                    <tr>
                                        <td width="195px">과세유형</td>
                                        <td><input type="text" onChange={handleChange} name="taxType" id="taxType" value={taxType} /></td>
                                    </tr>
                                    <tr>
                                        <td width="195px">휴폐업유무</td>
                                        <td><input type="text" onChange={handleChange} name="corpState" id="corpState" value={corpState}/></td>
                                    </tr>
                                    <tr>
                                        <td width="195px">간이과세자 주민번호</td>
                                        <td><input type="text" onChange={handleChange} name="personalNumber" id="personalNumber" value={personalNumber}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="inner-right" style={{ float: "right", width: "50%" }}>
                            <div className="subInfoArea" style={{ float: "left", width: "75%" }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td width="195px">상호</td>
                                            <td><input type="text" onChange={handleChange} name="companyName" id="companyName" value={companyName}/></td>
                                        </tr>
                                        <tr>
                                            <td width="195px">성명</td>
                                            <td><input type="text" onChange={handleChange} name="ownerName" id="ownerName" value={companyOwnerName} /></td>
                                        </tr>
                                        <tr>
                                            <td width="195px">업태</td>
                                            <td><input type="text" onChange={handleChange} name="businessCondition" id="businessCondition" value={businessCondition} /></td>
                                        </tr>
                                        <tr>
                                            <td width="195px">종목</td>
                                            <td><input type="text" onChange={handleChange} name="businessOption" id="businessOption" value={businessOption} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btnArea" style={{ float: "right" }}>
                                <button name="businessInfo" id="stage" onClick={handleClick}>저장</button>
                                <button name="businessInfo" id="commit" onClick={handleClick}>완료</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="certificateInfo" style={{ marginTop: "20px", width: "100%" }}>
                    <hr /><h4><b>자격 정보</b></h4>
                    <div className="innerArea" style={{ overflow: "hidden" }}>
                        <div className="inner-left" style={{ float: "left", width: "50%" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="195px">자격번호</td>
                                        <td><input type="text" onChange={handleChange} name="businessNumber" id="businessNumber" value={businessNumber}/></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="inner-right" style={{ float: "right", width: "50%" }}>
                            <div className="btnArea" style={{ float: "right" }}>
                                <button name="certificateInfo" id="state" onClick={handleClick}>저장</button>
                                <button name="certificateInfo" id="commit" onClick={handleClick}>완료</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="vehicleInfo" style={{ marginTop: "20px", width: "100%" }}>
                    <hr /><h4><b>차량등록 정보</b></h4>
                    <div className="innerArea" style={{ overflow: "hidden" }}>
                        <div className="inner-left" style={{ float: "left", width: "50%" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="195px">차량번호</td>
                                        <td><input type="text" onChange={handleChange} name="vehicleNumber" id="vehicleNumber" value={vehicleNumber} /></td>
                                    </tr>
                                    <tr>
                                        <td width="195px">차량톤수</td>
                                        <td>
                                            <select name="tonType" id="tonType" value={tonType} onChange={handleChange} style={{ width: "100%" }}>
                                                <option value="1t">1t</option>
                                                <option value="2t">2t</option>
                                                <option value="3t">3t</option>
                                                <option value="4t">4t</option>
                                                <option value="5t">5t</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="195px">차량종류</td>
                                        <td>
                                            <select name="carType" id="carType" value={carType} onChange={handleChange} style={{ width: "100%" }}>
                                                <option value="cold">냉동탑</option>
                                                <option value="hot">상온탑</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="inner-right" style={{ float: "right", width: "50%" }}>
                            <div className="btnArea" style={{ float: "right" }}>
                                <button name="vehicleInfo" id="state" onClick={handleClick}>저장</button>
                                <button name="vehicleInfo" id="commit" onClick={handleClick}>완료</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="paymentInfo" style={{ marginTop: "20px", width: "100%" }}>
                    <hr /><h4><b>결제 정보</b></h4>
                    <div className="innerArea" style={{ overflow: "hidden" }}>
                        <div className="inner-left" style={{ float: "left", width: "50%" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="195px">은행</td>
                                        <td>
                                            <select name="bankName" id="bankName" value={bankName} onChange={handleChange} style={{ width: "100%" }}>
                                                <option>은행선택</option>
                                                <option value="nh">농협</option>
                                                <option value="kb">국민</option>
                                                <option value="sh">신한</option>
                                            </select>
                                        </td>
                                        <td><input type="text" onChange={handleChange} name="bankAccount" id="bankAccount" value={bankAccount} /></td>
                                        <td><button>조회</button></td>
                                    </tr>
                                    <tr>
                                        <td width="195px">세금계산서 유형</td>
                                        <td>
                                            <select name="taxBillType" id="taxBillType" value={taxBillType} onChange={handleChange}>
                                                <option value="1">전자세금계산서(위수탁 발행)</option>
                                                <option value="2">수기세금계산서(역발행)</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="inner-right" style={{ float: "right", width: "50%" }}>
                            <div className="btnArea" style={{ float: "right" }}>
                                <button name="paymentInfo" id="state" onClick={handleClick}>저장</button>
                                <button name="paymentInfo" id="commit" onClick={handleClick}>완료</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default TruckOwnerInfoDetail;
