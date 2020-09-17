import React from "react";

import CarrierInfoDetail from "pages/carrier/CarrierInfoDetail";
import CarrierInfoContract from "pages/carrier/CarrierInfoContract";
import CarrierInfoPayment from "pages/carrier/CarrierInfoPayment";
import CarrierInfoAccountManagement from "pages/carrier/CarrierInfoAccountManagement";

function CarrierInfoCommon(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		setData(userSeq - 1);

		// 컴포넌트 언마운트
		return () => {};
	}, []);

	// 수정해야함
	const url = "/v1/~~~~~/";

	// CarrierInfoContainer에서 가져옴
	const userSeq = props.userSeq;

	// inputs
	const [inputs, setInputs] = React.useState({
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
	});

	const { corporationName, ceoName, registrationNumber, carrierCode, customerCenterNumber, customerCenterTime, serviceYn } = inputs;

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
		businessLicenseImg: null,
		// 직인
		seal: null,
	});

	const { businessLicenseImg, seal } = files;

	const onFilesChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setFiles((prevFiles) => ({
			...prevFiles,
			[name]: value,
		}));
	}, []);

	// 데이터 조회
	// const getDate = React.useCallback(async () => {
	// 	await axios
	// 		.get(url + userSeq)
	// 		.then((res) => {
	// 			let data = res.data.data;
	// 			setInputs((prevInputs) => ({}));
	// 		})
	// 		.catch((res) => {
	// 			alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
	// 			console.log("에러: " + res);
	// 		});
	// }, []);

	// 더미 데이터 ------------------------------------------------------------------------------
	const array = [
		{
			corporationName: "팀프레시",
			ceoName: "이성일",
			registrationNumber: "561-88-31138",
			carrierCode: "W00001",
			customerCenterNumber: "02-888-8988",
			customerCenterTime: "09:00~18:00",
			serviceYn: "Y",
		},
		{
			corporationName: "마켓컬리",
			ceoName: "이성일",
			registrationNumber: "422-32-1138",
			carrierCode: "W00521",
			customerCenterNumber: "02-623-7788",
			customerCenterTime: "09:00~18:00",
			serviceYn: "Y",
		},
		{
			corporationName: "CJ홈쇼핑",
			ceoName: "이성일",
			registrationNumber: "852-18-323",
			carrierCode: "W00301",
			customerCenterNumber: "02-766-5252",
			customerCenterTime: "09:00~18:00",
			serviceYn: "Y",
		},
	];

	// 더미 데이터 세팅
	const setData = React.useCallback((userSeq) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			corporationName: array[userSeq].corporationName,
			ceoName: array[userSeq].ceoName,
			registrationNumber: array[userSeq].registrationNumber,
			carrierCode: array[userSeq].carrierCode,
			customerCenterNumber: array[userSeq].customerCenterNumber,
			customerCenterTime: array[userSeq].customerCenterTime,
			serviceYn: array[userSeq].serviceYn,
		}));
	}, []);
	// ---------------------------------------------------------------------------------

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
