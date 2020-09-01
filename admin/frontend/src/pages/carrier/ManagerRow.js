import React, { useEffect, Fragment } from "react";

function ManagerRow(props) {

    useEffect(() => {
        console.log("컴포넌트 마운트");

        return () => {
            console.log("컴포넌트 언마운트");
        }
    });

    return (
        <Fragment>
            <tr id={props.data.key}>
                <td>이름</td>
                <td><input type="text" id="managerName" name="managerName" value={props.data.managerName}style={{ width: "5rem" }} /></td>
                <td>연락처</td>
                <td><input type="text" id="managerPhoneNumber" name="managerPhoneNumber" value={props.data.managerPhoneNumber}style={{ width: "9rem" }} /></td>
                <td>이메일</td>
                <td><input type="text" id="managerEmail" name="managerEmail" value={props.data.managerEmail} style={{ width: "12rem" }} /></td>
                <td>비고</td>
                <td><input type="text" id="comment" name="comment" value={props.data.comment} style={{ width: "25rem" }} /></td>
                <td style={{ float: "right" }}><button type="button" onClick={() => props.onRemove(props.data.key)}>X</button></td>
            </tr>
        </Fragment>
    )
}

export default ManagerRow;