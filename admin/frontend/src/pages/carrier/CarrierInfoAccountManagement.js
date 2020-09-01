import React, { useEffect, useState, Fragment } from "react";

function CarrierInfoAccountManagement(props) {

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
        userId: "-",
        userType: "-",
        userPw: "-",
        userPwChk: "-",
        userName: "-",
        userEmail: "-"
    });

    const { userId, userType, userPw, userPwChk, userName, userEmail } = inputs;

    // inputs 값 세팅
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // 더미 데이터 --------------------------------------------------------------------
    const array = [
        {
            "userId": "timf001",
            "userType": "master",
            "userPw": "timfDev1",
            "userName": "홍길동",
            "userEmail": "hoho@gmail.com"
        },
        {
            "userId": "timf002",
            "userType": "subMaster",
            "userPw": "timfDev2",
            "userName": "고길동",
            "userEmail": "gogo@gmail.com"
        },
        {
            "userId": "timf003",
            "userType": "subMaster",
            "userPw": "timfDev3",
            "userName": "대길동",
            "userEmail": "jojo@gmail.com"
        }
    ];

    // 더미 데이터 세팅
    const setData = (userSeq) => {
        switch(userSeq) {
            case 0:
                setInputs((state) => ({
                    ...inputs,
                    userId: array[userSeq].userId,
                    userType: array[userSeq].userType,
                    userPw: array[userSeq].userPw,
                    userName: array[userSeq].userName,
                    userEmail: array[userSeq].userEmail,
                }));
                break;
            case 1:
                setInputs((state) => ({
                    ...inputs,
                    userId: array[userSeq].userId,
                    userType: array[userSeq].userType,
                    userPw: array[userSeq].userPw,
                    userName: array[userSeq].userName,
                    userEmail: array[userSeq].userEmail,
                }));
                break;
            case 2:
                setInputs((state) => ({
                    ...inputs,
                    userId: array[userSeq].userId,
                    userType: array[userSeq].userType,
                    userPw: array[userSeq].userPw,
                    userName: array[userSeq].userName,
                    userEmail: array[userSeq].userEmail,
                }));
                break;
        };
    };
    // --------------------------------------------------------------------

    return (
        <Fragment>
            <div className="form-row my-2 mb-3">
                <div className="accountManagementArea">
                    <h4><b>계정관리</b></h4>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "4rem" }}>ID</td>
                                <td style={{ width: "13rem" }}><input type="text" id="userId" name="userId" value={userId} onChange={handleChange} /></td>
                                <td style={{ width: "7rem" }}>사용자유형</td>
                                <td>
                                    <select id="userType" name="userType" value={userType} onChange={handleChange}>
                                        <option value="master">마스터</option>
                                        <option value="subMaster">서브마스터</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: "4rem" }}>PW</td>
                                <td style={{ width: "13rem" }}><input type="text" id="userPw" name="userPw" value={userPw} onChange={handleChange} /></td>
                                <td style={{ width: "7rem" }}>PW 확인</td>
                                <td><input type="text" id="userPwChk" name="userPwChk" value={userPwChk} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td style={{ width: "4rem" }}>이름</td>
                                <td><input type="text" id="userName" name="userName" value={userName} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td><input type="text" id="userEmail" name="userEmail" value={userEmail} onChange={handleChange} /></td>
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