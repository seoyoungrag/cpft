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
				<td>이름</td>
				<td>
					<input
						type="text"
						id={props.data.id}
						name="managerName"
						value={props.data.managerName || ""}
						onChange={props.onChange}
						style={{ width: "5rem" }}
					/>
				</td>
				<td>연락처</td>
				<td>
					<input
						type="text"
						id={props.data.id}
						name="managerPhoneNumber"
						value={props.data.managerPhoneNumber || ""}
						onChange={props.onChange}
						style={{ width: "9rem" }}
					/>
				</td>
				<td>이메일</td>
				<td>
					<input
						type="text"
						id={props.data.id}
						name="managerEmail"
						value={props.data.managerEmail || ""}
						onChange={props.onChange}
						style={{ width: "12rem" }}
					/>
				</td>
				<td>비고</td>
				<td>
					<input
						type="text"
						id={props.data.id}
						name="comment"
						value={props.data.comment || ""}
						onChange={props.onChange}
						style={{ width: "25rem" }}
					/>
				</td>
				<td style={{ float: "right" }}>
					<button type="button" onClick={() => props.onRemove(props.data.id)}>
						X
					</button>
				</td>
			</tr>
		</React.Fragment>
	);
}

export default React.memo(ManagerRow);
