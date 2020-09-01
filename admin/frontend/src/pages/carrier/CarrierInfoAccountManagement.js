import React, { useEffect, useState, Fragment } from "react";

function CarrierInfoAccountManagement(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");


        return () => {
            console.log("컴포넌트 언마운트");
        }
    }, []);

    // inputs
    const [ inputs, setInputs ] = useState({
        userId: "-",
        userType: "-",
        userPw: "-",
        userPwChk: "-",
        userName: "-",
        userEamil: "-"
    });

    const { userId, userType, userPw, userPwChk, userName, userEamil } = inputs;

    // inputs 값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="accountManagementArea">
                    <h4><b>계정관리</b></h4>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "4rem" }}>ID</td>
                                <td style={{ width: "13rem" }}><input type="text" id="userId" name="userId" onChange={handleChange} /></td>
                                <td style={{ width: "7rem" }}>사용자유형</td>
                                <td>
                                    <select id="userType" name="userType" onChange={handleChange}>
                                        <option>마스터</option>
                                        <option>서브마스터</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: "4rem" }}>PW</td>
                                <td style={{ width: "13rem" }}><input type="text" id="userPw" name="userPw" onChange={handleChange} /></td>
                                <td style={{ width: "7rem" }}>PW 확인</td>
                                <td><input type="text" id="userPwChk" name="userPwChk" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td style={{ width: "4rem" }}>이름</td>
                                <td><input type="text" id="userName" name="userName" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td><input type="text" id="userEmail" name="userEmail" onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btnArea" style={{ width: "100%", marginTop: "10rem" }}>
                    <button type="button" style={{ float: "right" }}>저장</button>
                </div>
            </div>
        </Fragment>
    );
}

export default CarrierInfoAccountManagement;