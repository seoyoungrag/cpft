import React, { useEffect, useState, useCallback } from "react";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";
import axios from "axios";
import imgSrc from "../../styles/캡처.png";
import TruckOwnerInfoDetail from "./TruckOwnerInfoDetail";
import TruckOwnerInfoTransferHistory from "./TruckOwnerInfoTransferHistory";
import TruckOwnerInfoPurchaseHistory from "./TruckOwnerInfoPurchaseHistory";
import TruckOwnerInfoCalculateHistory from "./TruckOwnerInfoCalculateHistory";
import TruckOwnerInfoAccountManagement from "./TruckOwnerInfoAccountManagement";
import Tabs from "react-bootstrap/Tabs";

function TruckOwnerInfoCommon(props) {
	useEffect(() => {
		console.log("컴포넌트 마운트");
		// getData();
		setData(userSeq - 1);

		return () => {
			console.log("컴포넌트 언마운트");
			$.fn.dataTable.ext.search.pop();
			$.fn.dataTable.ext.search.pop();
		};
	}, []);

	// TruckOwnerInfoContainer에서 받아옴
	const userSeq = props.userSeq;

	// const url = "/v1/truckOwner/truckOwnerInfoDetail/";

	// inputs
	const [inputs, setInputs] = useState({
		// 차주이름
		ownerName: "-",
		// 차주코드
		ownerCode: "-",
		// 연락처
		ownerPhoneNumber: "-",
		// 가입상태
		joinStatus: "-",
		// 운송사Seq (미정)
		carrierSeq: "-",
	});

	const { ownerName, ownerCode, ownerPhoneNumber, joinStatus, carrierSeq } = inputs;

	// 데이터 조회
	const getData = useCallback(async () => {
		await axios
			.get(url + userSeq)
			.then((res) => {
				let data = res.data.data;
				console.log(data);
				setInputs((prevInputs) => ({
					...prevInputs,
					userName: data.userName,
					phoneNumber: data.phone,
					ownerCode: data.ownerCode,
					carrierSeq: data.carrierSeq,
				}));
			})
			.catch((res) => {
				alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
				console.log("에러: " + res);
			});
	}, []);

	// inputs값 세팅
	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// 수정 버튼
	const handleClick = useCallback((e) => {
		let infoType = e.target.name; // ~~~info
		let saveType = e.target.id; // state, commit
	}, []);

	// 더미 데이터 -------------------------------------------------------------
	const array = [
		{
			ownerName: "갑",
			ownerCode: "N0002643",
			joinStatus: "미제출",
			businessInfo: "O",
			certificateInfo: "O",
			vehicleInfo: "X",
			paymentInfo: "X",
			workingYn: "X",
		},
		{
			ownerName: "을",
			ownerCode: "N0002543",
			joinStatus: "승인완료",
			businessInfo: "O",
			certificateInfo: "O",
			vehicleInfo: "O",
			paymentInfo: "O",
			workingYn: "O",
		},
		{
			ownerName: "병",
			ownerCode: "N0001253",
			joinStatus: "미제출",
			businessInfo: "O",
			certificateInfo: "X",
			vehicleInfo: "X",
			paymentInfo: "O",
			workingYn: "X",
		},
	];

	// 더미 데이터 세팅 ---------------------------------------------------------
	const setData = useCallback((userSeq) => {
		switch (userSeq) {
			case 0:
				setInputs((prevInputs) => ({
					...prevInputs,
					ownerName: array[userSeq].ownerName,
					ownerCode: array[userSeq].ownerCode,
					ownerPhoneNumber: "010-1234-5678",
					joinStatus: array[userSeq].joinStatus,
				}));
				break;
			case 1:
				setInputs((prevInputs) => ({
					...prevInputs,
					ownerName: array[userSeq].ownerName,
					ownerCode: array[userSeq].ownerCode,
					ownerPhoneNumber: "010-1541-1119",
					joinStatus: array[userSeq].joinStatus,
				}));
				break;
			case 2:
				setInputs((prevInputs) => ({
					...prevInputs,
					ownerName: array[userSeq].ownerName,
					ownerCode: array[userSeq].ownerCode,
					ownerPhoneNumber: "010-5525-5257",
					joinStatus: array[userSeq].joinStatus,
				}));
				break;
			case 3:
				setInputs((prevInputs) => ({
					...inputs,
					ownerName: array[userSeq].ownerName,
					ownerCode: array[userSeq].ownerCode,
					ownerPhoneNumber: "010-5252-5252",
					joinStatus: array[userSeq].joinStatus,
				}));
				break;
		}
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
						<div className="col-6">차주 정보</div>
						<div className="col-sm-12 col-md-6 row">
							<div className="col-12 d-flex justify-content-end"></div>
						</div>
					</div>
					<div className="card-body">
						<div className="basicInfoArea" style={{ overflow: "hidden", marginBottom: "20px", height: "70px" }}>
							<div className="photoArea" style={{ float: "left", width: "90px", paddingLeft: "20px", marginRight: "20px" }}>
								<img src={imgSrc} style={{ width: "70px", height: "70px" }}></img>
							</div>
							<div className="basicInfoArea" style={{ float: "left" }}>
								<span id="userName" style={{ fontSize: "25px", heigth: "70px", lineHeight: "70px", marginRight: "50px" }}>
									{ownerName}
								</span>
								<span style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>연락처</b>&nbsp;&nbsp;
									<input
										type="text"
										id="ownerPhoneNumber"
										name="ownerPhoneNumber"
										onChange={handleChange}
										value={ownerPhoneNumber}
										style={{ width: "130px" }}
									/>
								</span>
								<span id="" style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>가입 상태</b>&nbsp;&nbsp;{joinStatus}
								</span>
								<span style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>차주코드</b>&nbsp;&nbsp;
									<input
										type="text"
										id="ownerCode"
										name="ownerCode"
										onChange={handleChange}
										value={ownerCode}
										style={{ width: "130px" }}
									/>
								</span>
							</div>
							<div className="modifyBtnArea" style={{ float: "right" }}>
								<button type="button" onClick={handleClick} id="basicInfoModifyBtn">
									수정
								</button>
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
											<a
												className="nav-link d-flex align-items-center"
												href="#purchaseHistory"
												data-toggle="tab"
												// onClick={() => dispatch({ type: "SET_ACTIVE", activeTab: "purchaseHistory" })}
											>
												<span className="sm-display-none">구매내역</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link d-flex align-items-center"
												href="#calculateHistory"
												data-toggle="tab"
												// onClick={() => dispatch({ type: "SET_ACTIVE", activeTab: "calculateHistory" })}
											>
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
									<TruckOwnerInfoDetail userSeq={userSeq} />
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
