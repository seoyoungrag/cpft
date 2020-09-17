import React from "react";

function TruckOwnerInfoDetail(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		setData(userSeq - 1);

		// 컴포넌트 언마운트
		return () => {};
	}, []);

	const userSeq = props.userSeq;

	// inputs
	const [inputs, setInputs] = React.useState({
		// 사업자등록번호
		registrationNumber: null,
		// 과세유형
		taxType: null,
		// 휴폐업유무
		corpState: null,
		// 간이과세자 주민번호
		personalNumber: null,
		// 상호
		companyName: null,
		// 성명
		companyOwnerName: null,
		// 업태
		businessCondition: null,
		// 종목
		businessOption: null,
		// 자격번호
		businessNumber: null,
		// 차량번호
		vehicleNumber: null,
		// 차량톤수
		tonType: null,
		// 차량종류
		carType: null,
		// 은행
		bankName: null,
		// 계좌번호
		bankAccount: null,
		// 세금계산서 유형
		taxBillType: null,
	});

	const {
		registrationNumber,
		taxType,
		corpState,
		personalNumber,
		companyName,
		companyOwnerName,
		businessCondition,
		businessOption,
		businessNumber,
		vehicleNumber,
		tonType,
		carType,
		bankName,
		bankAccount,
		taxBillType,
	} = inputs;

	// inputs값 세팅
	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// 저장, 완료 버튼
	const handleClick = React.useCallback((e) => {
		let infoType = e.target.name; // ~~~info
		let saveType = e.target.id; // state, commit
	}, []);

	// 더미 데이터
	const array = [
		{
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
			taxBillType: "1",
		},
		{
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
			taxBillType: "2",
		},
		{
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
			taxBillType: "2",
		},
	];

	// 더미 데이터 세팅 ----------------------------------------------------------
	const setData = React.useCallback((userSeq) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			registrationNumber: array[userSeq].registrationNumber,
			taxType: array[userSeq].taxType,
			corpState: array[userSeq].corpState,
			personalNumber: array[userSeq].personalNumber,
			companyName: array[userSeq].companyName,
			businessCondition: array[userSeq].businessCondition,
			businessOption: array[userSeq].businessOption,
			businessNumber: array[userSeq].businessNumber,
			vehicleNumber: array[userSeq].vehicleNumber,
			tonType: array[userSeq].tonType,
			carType: array[userSeq].carType,
			bankName: array[userSeq].bankName,
			bankAccount: array[userSeq].bankAccount,
			taxBillType: array[userSeq].taxBillType,
		}));
	}, []);
	// ------------------------------------------------------------------------

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="personalInfo" style={{ width: "50%" }}>
					<h4>
						<b>개인정보</b>
					</h4>
					<table>
						<tbody>
							<tr>
								<td style={{ width: "50%" }}>이름</td>
								<td>
									<input
										type="text"
										id="truckOwnerName"
										name="truckOwnerName"
										class="form-control"
										value={props.data.truckOwnerName || ""}
										onChange={props.onInputsChange}
									/>
								</td>
							</tr>
							<tr>
								<td style={{ width: "50%" }}>차주코드</td>
								<td>
									<input
										type="text"
										id="truckOwnerCode"
										name="truckOwnerCode"
										class="form-control"
										value={props.data.truckOwnerCode || ""}
										onChange={props.onInputsChange}
									/>
								</td>
							</tr>
							<tr>
								<td style={{ width: "50%" }}>연락처</td>
								<td>
									<input
										type="text"
										id="phoneNumber"
										name="phoneNumber"
										class="form-control"
										value={props.data.phoneNumber || ""}
										onChange={props.onInputsChange}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="attachFiles" style={{ width: "40%" }}>
					<h4>
						<b>제출 서류</b>
					</h4>
					<table>
						<tbody>
							<tr>
								<td>사업자등록증</td>
								<td style={{ width: "50%" }}>
									<a href="#">사업자등록증 사진.jpg</a>
								</td>
								{/* <td><input type="file" onChange={props.onFilesChange} name="businessLicenseImg" value={businessLicenseImg}/></td> */}
							</tr>
							<tr>
								<td>화물운송종사 자격증</td>
								<td style={{ width: "50%" }}>
									<input
										type="file"
										onChange={props.onFilesChange}
										name="truckLicenseImg"
										id="truckLicenseImg"
										value={props.files.truckLicenseImg || ""}
									/>
								</td>
							</tr>
							<tr>
								<td>자동차등록증</td>
								<td style={{ width: "50%" }}>
									<input
										type="file"
										onChange={props.onFilesChange}
										name="carLicenseImg"
										id="carLicenseImg"
										value={props.files.carLicenseImg || ""}
									/>
								</td>
							</tr>
							<tr>
								<td>통장 사본</td>
								<td style={{ width: "50%" }}>
									<input
										type="file"
										onChange={props.onFilesChange}
										name="bankAccountImg"
										id="bankAccountImg"
										value={props.files.bankAccountImg || ""}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="btnArea" style={{ width: "10%" }}>
					<button
						name="businessInfo"
						id="stage"
						class="btn btn-info ml-1"
						onClick={() => console.log(props.data)}
						style={{ float: "right" }}
					>
						수정
					</button>
				</div>
				<div id="buinessInfo" style={{ marginTop: "20px", width: "100%" }}>
					<hr />
					<h4>
						<b>사업자 정보</b>
					</h4>
					<div className="innerArea" style={{ overflow: "hidden" }}>
						<div className="inner-left" style={{ float: "left", width: "50%" }}>
							<table>
								<tbody>
									<tr>
										<td width="195px">사업자등록번호</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="registrationNumber"
												id="registrationNumber"
												class="form-control"
												value={registrationNumber || ""}
											/>
										</td>
										<td>
											<button class="btn btn-info ml-1">조회</button>
										</td>
									</tr>
									<tr>
										<td width="195px">과세유형</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="taxType"
												id="taxType"
												class="form-control"
												value={taxType || ""}
											/>
										</td>
									</tr>
									<tr>
										<td width="195px">휴폐업유무</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="corpState"
												id="corpState"
												class="form-control"
												value={corpState || ""}
											/>
										</td>
									</tr>
									<tr>
										<td width="195px">간이과세자 주민번호</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="personalNumber"
												id="personalNumber"
												class="form-control"
												value={personalNumber || ""}
											/>
										</td>
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
											<td>
												<input
													type="text"
													onChange={handleChange}
													name="companyName"
													id="companyName"
													class="form-control"
													value={companyName || ""}
												/>
											</td>
										</tr>
										<tr>
											<td width="195px">성명</td>
											<td>
												<input
													type="text"
													onChange={handleChange}
													name="companyOwnerName"
													id="companyOwnerName"
													class="form-control"
													value={companyOwnerName || ""}
												/>
											</td>
										</tr>
										<tr>
											<td width="195px">업태</td>
											<td>
												<input
													type="text"
													onChange={handleChange}
													name="businessCondition"
													id="businessCondition"
													class="form-control"
													value={businessCondition || ""}
												/>
											</td>
										</tr>
										<tr>
											<td width="195px">종목</td>
											<td>
												<input
													type="text"
													onChange={handleChange}
													name="businessOption"
													id="businessOption"
													class="form-control"
													value={businessOption || ""}
												/>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="btnArea" style={{ float: "right" }}>
								<button name="businessInfo" id="stage" class="btn btn-info ml-1" onClick={handleClick}>
									저장
								</button>
								<button name="businessInfo" id="commit" class="btn btn-info ml-1" onClick={handleClick}>
									완료
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="certificateInfo" style={{ marginTop: "20px", width: "100%" }}>
					<hr />
					<h4>
						<b>자격 정보</b>
					</h4>
					<div className="innerArea" style={{ overflow: "hidden" }}>
						<div className="inner-left" style={{ float: "left", width: "50%" }}>
							<table>
								<tbody>
									<tr>
										<td width="195px">자격번호</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="businessNumber"
												id="businessNumber"
												class="form-control"
												value={businessNumber || ""}
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="inner-right" style={{ float: "right", width: "50%" }}>
							<div className="btnArea" style={{ float: "right" }}>
								<button name="certificateInfo" id="state" class="btn btn-info ml-1" onClick={handleClick}>
									저장
								</button>
								<button name="certificateInfo" id="commit" class="btn btn-info ml-1" onClick={handleClick}>
									완료
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="vehicleInfo" style={{ marginTop: "20px", width: "100%" }}>
					<hr />
					<h4>
						<b>차량등록 정보</b>
					</h4>
					<div className="innerArea" style={{ overflow: "hidden" }}>
						<div className="inner-left" style={{ float: "left", width: "50%" }}>
							<table>
								<tbody>
									<tr>
										<td width="195px">차량번호</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="vehicleNumber"
												id="vehicleNumber"
												class="form-control"
												value={vehicleNumber || ""}
											/>
										</td>
									</tr>
									<tr>
										<td width="195px">차량톤수</td>
										<td>
											<select
												name="tonType"
												id="tonType"
												value={tonType || ""}
												class="form-control"
												onChange={handleChange}
												style={{ width: "100%" }}
											>
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
											<select
												name="carType"
												id="carType"
												class="form-control"
												value={carType || ""}
												onChange={handleChange}
												style={{ width: "100%" }}
											>
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
								<button name="vehicleInfo" id="state" class="btn btn-info ml-1" onClick={handleClick}>
									저장
								</button>
								<button name="vehicleInfo" id="commit" class="btn btn-info ml-1" onClick={handleClick}>
									완료
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="paymentInfo" style={{ marginTop: "20px", width: "100%" }}>
					<hr />
					<h4>
						<b>결제 정보</b>
					</h4>
					<div className="innerArea" style={{ overflow: "hidden" }}>
						<div className="inner-left" style={{ float: "left", width: "50%" }}>
							<table>
								<tbody>
									<tr>
										<td width="195px">은행</td>
										<td>
											<select
												name="bankName"
												id="bankName"
												class="form-control"
												value={bankName || ""}
												onChange={handleChange}
												style={{ width: "100%" }}
											>
												<option>은행선택</option>
												<option value="nh">농협</option>
												<option value="kb">국민</option>
												<option value="sh">신한</option>
											</select>
										</td>
										<td>
											<input
												type="text"
												onChange={handleChange}
												name="bankAccount"
												id="bankAccount"
												class="form-control"
												value={bankAccount || ""}
											/>
										</td>
										<td>
											<button class="btn btn-info ml-1">조회</button>
										</td>
									</tr>
									<tr>
										<td width="195px">세금계산서 유형</td>
										<td>
											<select
												name="taxBillType"
												id="taxBillType"
												class="form-control"
												value={taxBillType || ""}
												onChange={handleChange}
											>
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
								<button name="paymentInfo" id="state" class="btn btn-info ml-1" onClick={handleClick}>
									저장
								</button>
								<button name="paymentInfo" id="commit" class="btn btn-info ml-1" onClick={handleClick}>
									완료
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoDetail);
