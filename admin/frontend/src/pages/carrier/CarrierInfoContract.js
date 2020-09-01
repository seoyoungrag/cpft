import React, { useEffect, useState, Fragment } from "react";

function CarrierInfoContract(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");
        
        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);

    // inputs
    const [ inputs, setInputs ] = useState({
        // 서비스 운영 여부
        serviceYn: "-",
        // 계약일
        contractStartDate: "-",
        // 계약종료일
        contractEndDate: "-"
    });

    const { serviceYn, contractStartDate, contractEndDate } = inputs;

    // files
    const [ files, setFiles ] = useState({
        // 서비스 이용 계약서
        serviceUseAgreement: "-"
    });

    const { serviceUseAgreement } = files;
    
    // inputs 값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // files 값 세팅
    const handleFildChange = (e) => {
        setFiles({
            ...files,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="contractInfoArea" style={{ width: "100%", overflow:"hidden" }}>
                    <div className="contractInfo" style={{ width: "60%", float: "left" }}>
                        <h4><b>계약정보</b></h4>
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: "10rem" }}>서비스 운영 여부</td>
                                    <td><input type="text" id="serviceYn" name="serviceYn" onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td style={{ width: "10rem" }}>계약일</td>
                                    <td><input type="text" id="contractStartDate" name="contractStartDate" onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td style={{ width: "10rem" }}>계약종료일</td>
                                    <td><input type="text" id="contractEndDate" name="contractEndDate" onChange={handleChange} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="attachFiles" style={{ width: "40%", float: "left" }}>
                        <h4><b>첨부파일</b></h4>
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <td>서비스 이용 계약서</td>
                                    <td><input type="file" id="serviceUseAgreement" name="serviceUseAgreement" onChange={handleFildChange} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btnArea" style={{ width: "100%", marginTop: "10rem" }}>
                        <button type="button" style={{ float: "right" }}>저장</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CarrierInfoContract;