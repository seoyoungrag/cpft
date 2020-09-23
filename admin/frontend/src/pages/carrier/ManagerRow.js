import React from "react";

function ManagerRow(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// 컴포넌트 언마운트
		return () => {};
	}, []);

	return (
		<React.Fragment>
			<tr id={props.data.id}>
				<td style={{ width: "3rem" }}>이름</td>
				<td style={{ width: "10rem" }}>
					<input
						type="text"
						id={props.data.id}
						name="managerName"
						value={props.data.managerName || ""}
						className="form-control col-10"
						onChange={props.onChange}
					/>
				</td>
				<td style={{ width: "4rem" }}>연락처</td>
				<td style={{ width: "13rem" }}>
					<input
						type="text"
						id={props.data.id}
						name="managerPhoneNumber"
						className="form-control col-10"
						value={props.data.managerPhoneNumber || ""}
						onChange={props.onChange}
					/>
				</td>
				<td style={{ width: "4rem" }}>이메일</td>
				<td style={{ width: "17rem" }}>
					<input
						type="text"
						id={props.data.id}
						name="managerEmail"
						className="form-control col-10"
						value={props.data.managerEmail || ""}
						onChange={props.onChange}
					/>
				</td>
				<td style={{ width: "3rem" }}>비고</td>
				<td>
					<input
						type="text"
						id={props.data.id}
						name="comment"
						className="form-control"
						value={props.data.comment || ""}
						onChange={props.onChange}
					/>
				</td>
				<td style={{ float: "right" }}>
					<button type="button" className="btn btn-info" onClick={() => props.onRemove(props.data.id)}>
						x
					</button>
				</td>
			</tr>
		</React.Fragment>
	);
}

export default React.memo(ManagerRow);
