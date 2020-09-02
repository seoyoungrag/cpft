import React, { useEffect, useState, useRef, Fragment } from 'react';
import $, { data } from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import axios from "axios";
import ManagerRow from "pages/carrier/ManagerRow";
import { setIn } from 'formik';

function CarrierInfoBasic(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");
        setData(userSeq-1);

        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);

    // CarrierInfoCommon에서 가져옴
    const userSeq = props.userSeq;

    // inputs
    const [ inputs, setInputs ] = useState({
        // 법인명
        corporationName: "-",
        // 대표자
        ceoName: "-",
        // 사업자등록번호
        registrationNumberData: "-",
        // 운송사코드
        carrierCodeData: "-",
        // 고객센터 전화번호
        customerCenterNumber: "-",
        // 고객센터 운영시간
        customerCenterTime: "-",
    })

    const { corporationName, ceoName, registrationNumberData,
            carrierCodeData, customerCenterNumber, customerCenterTime } = inputs;

    // files
    const [ files, setFiles ] = useState({
        // 사업자등록증
        businessLicenseImg: "-",
        // 직인
        seal: "-"
    })

    const { businessLicenseImg, seal } = files;

    // 저장버튼 
    const handleClick = () => {
         
    }

    // input값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // files값 세팅
    const handleFileChange = (e) => {
        setFiles({
            ...files,
            [e.target.name]: e.target.value
        });
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

    // 더미 데이터 ------------------------------------------------------------------------------
    const array = [
        {
            "corporationName": "팀프레시",
            "ceoName": "이성일",
            "registrationNumberData": "561-88-31138",
            "carrierCodeData": "W00001",
            "customerCenterNumber": "02-888-8988",
            "customerCenterTime": "09:00~18:00"
        },
        {
            "corporationName": "마켓컬리",
            "ceoName": "이성일",
            "registrationNumberData": "422-32-1138",
            "carrierCodeData": "W00521",
            "customerCenterNumber": "02-623-7788",
            "customerCenterTime": "09:00~18:00"
        },
        {
            "corporationName": "CJ홈쇼핑",
            "ceoName": "이성일",
            "registrationNumberData": "852-18-323",
            "carrierCodeData": "W00301",
            "customerCenterNumber": "02-766-5252",
            "customerCenterTime": "09:00~18:00"
        }
    ];

    // 더미 데이터 세팅
    const setData = (userSeq) => {
        switch (userSeq) {
            case 0:
                setInputs((state) => ({
                    ...inputs,
                    corporationName: array[userSeq].corporationName,
                    ceoName: array[userSeq].ceoName,
                    registrationNumberData: array[userSeq].registrationNumberData,
                    carrierCodeData: array[userSeq].carrierCodeData,
                    customerCenterNumber: array[userSeq].customerCenterNumber,
                    customerCenterTime: array[userSeq].customerCenterTime
                }));
                break;
            case 1:
                setInputs((state) => ({
                    ...inputs,
                    corporationName: array[userSeq].corporationName,
                    ceoName: array[userSeq].ceoName,
                    registrationNumberData: array[userSeq].registrationNumberData,
                    carrierCodeData: array[userSeq].carrierCodeData,
                    customerCenterNumber: array[userSeq].customerCenterNumber,
                    customerCenterTime: array[userSeq].customerCenterTime
                }));
                break;
            case 2:
                setInputs((state) => ({
                    ...inputs,
                    corporationName: array[userSeq].corporationName,
                    ceoName: array[userSeq].ceoName,
                    registrationNumberData: array[userSeq].registrationNumberData,
                    carrierCodeData: array[userSeq].carrierCodeData,
                    customerCenterNumber: array[userSeq].customerCenterNumber,
                    customerCenterTime: array[userSeq].customerCenterTime
                }));
                break;
            case 3:
                setInputs((state) => ({
                    ...inputs,
                    corporationName: array[userSeq].corporationName,
                    ceoName: array[userSeq].ceoName,
                    registrationNumberData: array[userSeq].registrationNumberData,
                    carrierCodeData: array[userSeq].carrierCodeData,
                    customerCenterNumber: array[userSeq].customerCenterNumber,
                    customerCenterTime: array[userSeq].customerCenterTime
                }));
                break;
        };
    };

    // 담당자 정보(배열) - 더미데이터
    const [ datas, setDatas ] = useState([
        { 
            key: 1,
            managerName: "갑",
            managerPhoneNumber: "010-0001-0001",
            managerEmail: "naver.com",
            comment: "동해물과"
        },
        { 
            key: 2,
            managerName: "을",
            managerPhoneNumber: "010-0002-0002",
            managerEmail: "google.com",
            comment: "백두산이"
        },
        { 
            key: 3,
            managerName: "병",
            managerPhoneNumber: "010-0003-0003",
            managerEmail: "daum.com",
            comment: "마르고"
        }
    ]);

    // 버튼 추가시 사용할 key값 (굳이 ref 안해도 됨)
    const nextKey = useRef(data.length);

    // 담당자 정보 + 버튼
    const addRow = () => {
        // 새로운 객체를 만든다
        const data = {
            key: nextKey.current += 1,
            name
        };
        // 생성된 객체를 배열에 추가한다 (2가지 방법 모두 가능)
        // setDatas([...datas, data]);
        setDatas(datas.concat(data));
    }

    // ManagerRow에 전달할 onRemove 함수 - X버튼
    // 굳이 ManagerRow에서 handleRemove를 만들지 않고 함수를 전달하는 이유 
    // => 컴포넌트 최적화? 그냥 보여주기만 할 컴포넌트는 굳이 안에서 함수를 새로 정의할 필요 없을듯
    const onRemove = (key) => {
        // 삭제하려는 key 값이 아닌 것들만 새로 배열 생성 = 삭제하려는 key값에 해당하는 배열요소만 제외하고 새로 생성
        setDatas(datas.filter(data => data.key !== key));
    }
    // ------------------------------------------------------------------------------------------------------------------------
  
    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="companyInfoArea" style={{ width: "100%", overflow: "hidden"}}>
                    <div className="companyInfo" style={{ width: "60%", float: "left"}}>
                    <h4><b>기본정보</b></h4>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "10rem" }}>법인명</td>
                                <td style={{ width: "15rem" }}><input type="text" id="corporationName" name="corporationName" value={corporationName} onChange={handleChange} /></td>
                                <td style={{ width: "10rem" }}>대표자</td>
                                <td><input type="text" id="ceoName" name="ceoName" value={ceoName} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td style={{ width: "10rem" }}>사업자등록번호</td>
                                <td style={{ width: "15rem" }}><input type ="text" id="registrationNumberData" name="registrationNumberData" value={registrationNumberData} onChange={handleChange} /></td>
                                <td style={{ width: "10rem" }}>운송사코드</td>
                                <td><input type="text" id="carrierCodeData" name="carrierCodeData" value={carrierCodeData} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td style={{ width: "10rem" }}>고객센터 전화번호</td>
                                <td style={{ width: "15rem" }}><input type="text" id="customerCenterNumber" name="customerCenterNumber" value={customerCenterNumber} onChange={handleChange} /></td>
                                <td style={{ width: "10rem" }}>고객센터 운영시간</td>
                                <td><input type="text" id="customerCenterTime" name="customerCenterTime" value={customerCenterTime} onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="attachFiles" style={{ width: "40%", float: "left" }}>
                        <h4><b>첨부파일</b></h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>사업자등록증</td>
                                    <td style={{ width: "50%" }}><input tyle="file" id="businessLicenseImg" name="businessLicenseImg" onChange={handleFileChange} /></td>
                                </tr>
                                <tr>
                                    <td>직인</td>
                                    <td style={{ width: "50%" }}><input type="file" id="seal" name="seal" onChange={handleFileChange} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="managerInfo" style={{ marginTop: "20px", width: "100%", overflow: "hidden" }}>
                    <hr />
                    <div className="labelArea" style={{ float: "left" }}>
                        <h4><b>담당자 정보</b></h4>
                    </div>
                    <div className="btnArea" style={{ float: "right" }}>
                        <button type="button" id="addRow" onClick={addRow}>+</button>
                    </div>
                    <div className="tableArea">
                        <table style={{ width: "100%" }}>
                            <tbody id="targetBody">
                                { datas.map(data => <ManagerRow data={data} onRemove={onRemove}  />) }
                            </tbody>
                        </table>
                    </div>
                    <div className="btnArea" style={{ width: "100%", marginTop: "10rem" }}>
                        <button type="button" onClick={handleClick} style={{ float: "right" }}>저장</button>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default CarrierInfoBasic;
