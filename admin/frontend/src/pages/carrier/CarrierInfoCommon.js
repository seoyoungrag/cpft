import React from "react";
import axios from "axios";
import * as rq from "react-query";
import Loader from "util/Loader";

import CarrierInfoDetail from "pages/carrier/CarrierInfoDetail";
import CarrierInfoContract from "pages/carrier/CarrierInfoContract";
import CarrierInfoPayment from "pages/carrier/CarrierInfoPayment";
import CarrierInfoAccountManagement from "pages/carrier/CarrierInfoAccountManagement";

function CarrierInfoCommon(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// 컴포넌트 언마운트
		return () => {};
	}, []);

	// inputs
	const [inputs, setInputs] = React.useState({
		// 운송사 Seq
		carrierSeq: null,
		// 법인명
		corporationName: null,
		// 대표자
		ceoName: null,
		// 사업자등록번호
		registrationNumber: null,
		// 운송사코드
		carrierCode: null,
		// 고객센터 전화번호
		customerCenterNumber: null,
		// 고객센터 운영시간
		customerCenterTime: null,
		// 서비스 운영여부
		serviceYn: null,
		// 계약일? 생성일?
		createdAt: null,
		// 수정일
		modifiedAt: null,
	});

	const {
		carrierSeq,
		corporationName,
		ceoName,
		registrationNumber,
		carrierCode,
		customerCenterNumber,
		customerCenterTime,
		serviceYn,
		createdAt,
		modifiedAt,
	} = inputs;

	// files
	const [files, setFiles] = React.useState({
		// 사업자등록증
		businessLicense: null,
		// 직인
		seal: null,
	});

	const { businessLicense, seal } = files;

	const onInputsChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	const onFilesChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setFiles((prevFiles) => ({
			...prevFiles,
			[name]: value,
		}));
	}, []);

	// CarrierInfoContainer에서 가져옴
	const userSeq = props.userSeq;

	const info = rq.useQuery("carrierCommon", async () => {
		const url = "/test/carrier/getCarrierInfoCommon?ciSeq=" + userSeq;
		const { data } = await axios.get(url);
		setInputs((prevInputs) => ({
			...prevInputs,
			carrierSeq: data.carrierSeq,
			corporationName: data.corporationName,
			ceoName: data.ceoName,
			registrationNumber: data.registrationNumber,
			carrierCode: data.carrierCode,
			customerCenterNumber: data.customerCenterNumber,
			customerCenterTime: data.customerCenterTime,
			serviceYn: data.serviceYn,
			createdAt: data.createdAt,
			modifiedAt: data.modifiedAt,
		}));
		setFiles((prevFiles) => ({
			...prevFiles,
			businessLicense: data.businessLicense,
			seal: data.seal,
		}));
		return data;
	});

	if (info.status === "loading") {
		return <Loader type="spin" color="blue" message={"로딩중..."} />;
	}

	return (
		<React.Fragment>
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
							<span>운송사 관리</span>
						</h1>
						<div className="page-header-subtitle">CarrierInfoDetail 운송사 정보 상세보기 페이지</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mt-n10">
				<div className="card mb-4">
					{/* <div className="card-header row">
						<div className="col-6">운송사 정보</div>
						<div className="col-sm-12 col-md-6 row">
							<div className="col-12 d-flex justify-content-end"></div>
						</div>
					</div> */}
					<div className="card-body">
						<div className="basicInfoArea" style={{ overflow: "hidden", marginBottom: "20px", height: "70px" }}>
							{/* <div className="photo" style={{ float: "left", width: "90px", paddingLeft: "20px", marginRight: "20px" }}> */}
							{/* <img src={imgSrc} style={{ width: "70px", height: "70px" }}></img> */}
							{/* </div> */}
							<div className="basicInfo" style={{ float: "left", marginLeft: "5rem" }}>
								<span id="userName" style={{ fontSize: "25px", heigth: "70px", lineHeight: "70px", marginRight: "50px" }}>
									<b>{corporationName || ""}</b>
								</span>
								<span style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>사업자등록번호</b>&nbsp;&nbsp;
									{registrationNumber || ""}
								</span>
								{/* <span id="" style={{ fontSize: "15px", marginRight: "50px" }}><b>가입 상태</b>&nbsp;&nbsp;-</span> */}
								<span style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>서비스 운영여부</b>&nbsp;&nbsp;
									{serviceYn || ""}
								</span>
								<span id="" style={{ fontSize: "15px", marginRight: "50px" }}>
									<b>운송사 코드</b>&nbsp;&nbsp;
									{carrierCode || ""}
								</span>
							</div>
							<div className="modifyBtnArea" style={{ float: "right" }}>
								{/* <button type="button" id="basicInfoModifyBtn">수정</button> */}
							</div>
						</div>
						<div className="card-header card-header-tabs card-header-primary pb-0">
							<div className="nav-tabs-navigation">
								<div className="nav-tabs-wrapper">
									<ul className="nav nav-tabs" data-tabs="tabs">
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center active" href="#basicInfo" data-toggle="tab">
												<span className="sm-display-none">기본정보</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center" href="#contractInfo" data-toggle="tab">
												<span className="sm-display-none">계약정보</span>
												<div className="ripple-container"></div>
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link d-flex align-items-center" href="#paymentInfo" data-toggle="tab">
												<span className="sm-display-none">결제정보</span>
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
								<div className="tab-pane col-12 active" id="basicInfo">
									<CarrierInfoDetail
										userSeq={userSeq}
										onInputsChange={onInputsChange}
										onFilesChange={onFilesChange}
										// onSave={basicInfoUpdate}
										files={files}
										data={inputs}
									/>
								</div>
								<div className="tab-pane col-12" id="contractInfo">
									<CarrierInfoContract userSeq={userSeq} />
								</div>
								<div className="tab-pane col-12" id="paymentInfo">
									<CarrierInfoPayment userSeq={userSeq} />
								</div>
								<div className="tab-pane col-12" id="accountManagement">
									<CarrierInfoAccountManagement userSeq={userSeq} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(CarrierInfoCommon);
