import React from "react";

function CarrierInfoPayment(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		setData(userSeq - 1);

		// 컴포넌트 언마운트
		return () => {};
	}, []);

	// CarrierInfoCommon에서 가져옴
	const userSeq = props.userSeq;

	// inputs
	const [inputs, setInputs] = React.useState({
		bankName: null,
		bankAccountNumber: null,
		bankAccountOwner: null,
	});

	const { bankName, bankAccountNumber, bankAccountOwner } = inputs;

	// files
	const [files, setFiles] = React.useState({
		bankAccountCopy: null,
	});

	const { bankAccountCopy } = files;

	// inputs 값 세팅
	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// files 값 세팅
	const handleFileChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setFiles((prevFiles) => ({
			...prevFiles,
			[name]: value,
		}));
	}, []);

	// 더미 데이터 -----------------------------------------------------------------
	const array = [
		{
			bankName: "nh",
			bankAccountNumber: "123-456-789",
			bankAccountOwner: "홍길동",
		},
		{
			bankName: "sh",
			bankAccountNumber: "53-41112-900",
			bankAccountOwner: "고길동",
		},
		{
			bankName: "kb",
			bankAccountNumber: "110-4355-78981",
			bankAccountOwner: "대길동",
		},
	];

	// 더미 데이터 세팅
	const setData = React.useCallback((userSeq) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			bankName: array[userSeq].bankName,
			bankAccountNumber: array[userSeq].bankAccountNumber,
			bankAccountOwner: array[userSeq].bankAccountOwner,
		}));
	}, []);
	// ------------------------------------------------------------------------------------

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="paymentInfoArea" style={{ width: "100%", overflow: "hidden" }}>
					<div className="paymentInfo" style={{ width: "60%", float: "left" }}>
						<h4>
							<b>결제정보</b>
						</h4>
						<table style={{ width: "100%" }}>
							<tbody>
								<tr>
									<td style={{ width: "8rem" }}>계좌번호</td>
									<td style={{ width: "5rem" }}>
										<select id="bankName" name="bankName" value={bankName || ""} onChange={handleChange}>
											<option>은행선택</option>
											<option value="nh">농협</option>
											<option value="kb">국민</option>
											<option value="sh">신한</option>
										</select>
									</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="bankAccountNumber"
											name="bankAccountNumber"
											value={bankAccountNumber || ""}
											onChange={handleChange}
										/>
									</td>
									<td style={{ width: "4rem" }}>예금주</td>
									<td>
										<input
											type="text"
											id="bankAccountOwner"
											name="bankAccountOwner"
											value={bankAccountOwner || ""}
											onChange={handleChange}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="attachFiles" style={{ width: "40%", float: "left" }}>
						<h4>
							<b>첨부파일</b>
						</h4>
						<table style={{ width: "100%" }}>
							<tbody>
								<tr>
									<td>통장 사본</td>
									<td>
										<input
											type="file"
											id="bankAccountCopy"
											name="bankAccountCopy"
											value={bankAccountCopy || ""}
											onChange={handleFileChange}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="btnArea" style={{ width: "100%", marginTop: "10rem" }}>
						<button type="button" style={{ float: "right" }}>
							저장
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(CarrierInfoPayment);
