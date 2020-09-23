import React from "react";
import * as rq from "react-query";
import axios from "axios";
import imgSrc from "../../styles/캡처.png";

import TruckOwnerInfoDetail from "./TruckOwnerInfoDetail";
import TruckOwnerInfoTransferHistory from "./TruckOwnerInfoTransferHistory";
import TruckOwnerInfoPurchaseHistory from "./TruckOwnerInfoPurchaseHistory";
import TruckOwnerInfoCalculateHistory from "./TruckOwnerInfoCalculateHistory";
import TruckOwnerInfoAccountManagement from "./TruckOwnerInfoAccountManagement";

function TruckOwnerInfoCommon(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// 더미데이터 세팅
		setData(userSeq - 1);

		// 컴포넌트 언마운트
		return () => {};
	}, []);

	// inputs
	const [inputs, setInputs] = React.useState({
		// 차주이름
		truckOwnerName: null,
		// 차주코드
		truckOwnerCode: null,
		// 연락처
		phoneNumber: null,
		// 가입상태
		joinStatus: null,
		// 운송사Seq (예비-미사용)
		// carrierSeq: null,
	});

	const { truckOwnerName, truckOwnerCode, phoneNumber, joinStatus, carrierSeq } = inputs;

	const onInputsChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// files
	const [files, setFiles] = React.useState({
		// 사업자등록증
		buinessLicenseImg: null,
		// 화물운송종사 자격증
		truckLicenseImg: null,
		// 자동차등록증
		carLicenseImg: null,
		// 통장 사본
		bankAccountImg: null,
	});

	const { buinessLicenseImg, truckLicenseImg, carLicenseImg, bankAccountImg } = files;

	// files값 세팅
	const onFilesChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setFiles((prevFiles) => ({
			...prevFiles,
			[name]: value,
		}));
	}, []);

	const userSeq = props.userSeq;
	const url = "/v1/truckOwner/truckOwnerInfoDetail/";

	// 데이터 조회
	// const getData = async (url, userSeq) => {
	// 	const data = await axios.get(url + userSeq).then((res) => {
	// 		const result = res.data.data;
	// 		setInputs((prevInputs) => ({
	// 			...prevInputs,
	// 			truckOwnerName: result.truckOwnerName,
	// 			truckOwnerCode: result.truckOwnerCode,
	// 			phoneNumber: result.phoneNumber,
	// 			joinStatus: result.joinStatus,
	// 			// carrierSeq: result.carrierSeq,
	// 		}));
	// 	});
	// 	return data;
	// };

	// const { data, status, error } = rq.useQuery("basicInfo", getData(url, userSeq));

	// 데이터 업데이트
	// const updateData = (inputs) => {
	// 	const data = axios.post(url + userSeq, inputs);
	// 	return data;
	// }
	// const [mutate, {status, data, error}] = rq.useMutation(updateData, {
	// 	onSuccess: (res) => {
	// 		rq.queryCache.setQueryData("basicInfo", res.data.data);
	// 	}
	// })

	// 수정 버튼 누르면 동작하는 함수
	// const basicInfoUpdate = async () => {
	// 	try {
	// 		const data = await mutate(inputs);
	// 		console.log(data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// 더미 데이터 -------------------------------------------------------------
	const array = [
		{
			truckOwnerName: "갑",
			truckOwnerCode: "N0002643",
			phoneNumber: "010-1234-5678",
			joinStatus: "미제출",
		},
		{
			truckOwnerName: "을",
			truckOwnerCode: "N0002543",
			phoneNumber: "010-1541-1119",
			joinStatus: "승인완료",
		},
		{
			truckOwnerName: "병",
			truckOwnerCode: "N0001253",
			phoneNumber: "010-5525-5257",
			joinStatus: "미제출",
		},
	];

	// 더미 데이터 세팅 ---------------------------------------------------------
	const setData = React.useCallback((userSeq) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			truckOwnerName: array[userSeq].truckOwnerName,
			truckOwnerCode: array[userSeq].truckOwnerCode,
			phoneNumber: array[userSeq].phoneNumber,
			joinStatus: array[userSeq].joinStatus,
		}));
	}, []);
	// --------------------------------------------------------------------------

	return (
		<main>
			<div className="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
				<div className="container-fluid">
					<div className="page-header-content">
						<h1 className="page-header-title">
							<div className="page-header-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-edit-3"
								>
									<path d="M12 20h9"></path>
									<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
								</svg>
							</div>
							<span>차주 관리</span>
						</h1>
						<div className="page-header-subtitle">TruckOwnerInfoDetail 차주 정보 상세보기 페이지</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-n10">
				<div className="card mb-4">
					<div className="card-header row">
						<div className="col-3 d-flex justify-content-start"></div>
						<div className="col-6 d-flex justify-content-center"></div>
						<div className="col-3 d-flex justify-content-end"></div>
					</div>
					<div className="card-body">
						<div className="basicInfoArea" style={{ overflow: "hidden", marginBottom: "20px", height: "70px" }}>
							<div className="photoArea" style={{ float: "left", width: "90px", paddingLeft: "20px", marginRight: "20px" }}>
								<img src={imgSrc} style={{ width: "70px", height: "70px" }}></img>
							</div>
							<div className="basicInfoArea" style={{ float: "left" }}>
								<span
									id="truckOwnerName"
									style={{ fontSize: "25px", heigth: "70px", lineHeight: "70px", marginRight: "50px" }}
								>
									{truckOwnerName}
								</span>
								<span style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>연락처</b>&nbsp;&nbsp;
									{phoneNumber}
								</span>
								<span id="" style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>가입 상태</b>&nbsp;&nbsp;{joinStatus}
								</span>
								<span style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>차주코드</b>&nbsp;&nbsp;
									{truckOwnerCode}
								</span>
							</div>
						</div>
						<div className="card-header card-header-tabs card-header-primary pb-0">
							<div className="nav-tabs-navigation">
								<div className="nav-tabs-wrapper">
									<ul className="nav nav-tabs" data-tabs="tabs">
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center active" href="#personalInfo" data-toggle="tab">
												<span className="sm-display-none">개인정보</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center" href="#transferHistory" data-toggle="tab">
												<span className="sm-display-none">운송내역</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center" href="#purchaseHistory" data-toggle="tab">
												<span className="sm-display-none">구매내역</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center" href="#calculateHistory" data-toggle="tab">
												<span className="sm-display-none">정산내역</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center" href="#accountManagement" data-toggle="tab">
												<span className="sm-display-none">계정관리</span>
												<div className="ripple-container"></div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card-body">
							<div className="tab-content">
								<div className="tab-pane col-12 active" id="personalInfo">
									<TruckOwnerInfoDetail
										userSeq={userSeq}
										onInputsChange={onInputsChange}
										onFilesChange={onFilesChange}
										// onSave={basicInfoUpdate}
										files={files}
										data={inputs}
									/>
								</div>
								<div className="tab-pane col-12" id="transferHistory">
									<TruckOwnerInfoTransferHistory userSeq={userSeq} />
								</div>
								<div className="tab-pane col-12" id="purchaseHistory">
									<TruckOwnerInfoPurchaseHistory userSeq={userSeq} />
								</div>
								<div className="tab-pane col-12" id="calculateHistory">
									<TruckOwnerInfoCalculateHistory userSeq={userSeq} />
								</div>
								<div className="tab-pane col-12" id="accountManagement">
									<TruckOwnerInfoAccountManagement userSeq={userSeq} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default React.memo(TruckOwnerInfoCommon);
