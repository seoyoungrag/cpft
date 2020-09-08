import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as dateCalc from "util/dateCalc";
import Modal from "react-bootstrap/Modal";
import { useQuery, useMutation, queryCache } from "react-query";
import axios from "axios";
import Loader from "util/Loader";

function NoticeList(props) {
	const [inputs, setInputs] = React.useState({
		// await axios.get(url + userSeq)
		//         .then(res => {
		//             data = res.data.data;
		//             setInputs((state) => ({
		//                 ...inputs,
		//                 userName: data.userNm,
		//                 phoneNumber: data.truckOwner.phone
		//             }));
		//         })
		//         .catch(res => {
		//             alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
		//         });
		userName: "-",
		phone: "-",
		ownerCode: "-",
		carrierSeq: "-",
	});

	const { userName, phone, ownerCode, carrierSeq } = inputs;

	const getData = async () => {
		const url = "/v1/truckOwner/truckOwnerInfoDetail/2";
		let test = null;
		const result = await axios.get(url);
		test = result.data.data;
		setInputs((prevData) => ({
			...prevData,
			userName: test.userName,
			phone: test.phone,
			ownerCode: test.ownerCode,
			carrierSeq: test.carrierSeq,
		}));
		return result;
	};

	const updateData = () => {
		const url = "/v1/truckOwner/truckOwnerInfoUpdate";
		const obj = {
			userSeq: 2,
			userName: "김재하",
		};
		const result = axios.get(url);
		return result;
	};

	const [mutate, { mStatus, mData, mError }] = useMutation(updateData, {
		onSuccess: (data) => {
			// queryCache.invalidateQueries("test");
			queryCache.setQueryData(["test", { id: 5 }], data.data.data);
			console.log("값 업데이트");
			console.log(queryCache.getQueryData(["test", { id: 5 }]));
			setInputs((prevInputs) => ({
				...prevInputs,
				userName: data.userName,
				phone: data.phone,
				ownerCode: data.ownerCode,
				carrierSeq: data.carrierSeq,
			}));
			// console.log(data);
			// console.log("쿼리업데이트!!!!");
		},
	});

	const { data, status, error, isFetching, isError } = useQuery(["test", { id: 5 }], getData);
	console.log(data);
	console.log(status);
	console.log(error);
	console.log(isFetching);
	console.log(isError);
	console.log("초기값");
	console.log(queryCache.getQueryData(["test", { id: 5 }]));

	React.useEffect(() => {
		return () => {};
	}, []);

	return (
		<MainStructure>
			{/* <Modal show={modalShow} onHide={() => setModalShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>오더 상세보기</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div
						className="basicInfoArea"
						style={{
							marginTop: "1rem",
							backgroundColor: "#EEEEEE",
							overflow: "hidden",
						}}
					>
						<div
							className="carrierName"
							style={{
								float: "left",
								marginLeft: "2rem",
								width: "25%",
							}}
						>
							<span style={{ fontSize: "6px" }}>운송사</span>
							<br />
							<span style={{ fontSize: "20px" }}>{modalData.carrierName}</span>
						</div>
						<div
							className="carrierGroup"
							style={{
								float: "left",
								marginLeft: "1rem",
								width: "15%",
							}}
						>
							<span style={{ fontSize: "6px" }}>운송그룹</span>
							<br />
							<span style={{ fontSize: "20px" }}>{modalData.carrierGroup}</span>
						</div>
						<div
							className="orderCode"
							style={{
								float: "left",
								marginLeft: "1rem",
								width: "25%",
							}}
						>
							<span style={{ fontSize: "6px" }}>오더코드</span>
							<br />
							<span style={{ fontSize: "20px" }}>{modalData.orderCode}</span>
						</div>
						<div
							className="workType"
							style={{
								float: "left",
								marginLeft: "1rem",
								width: "15%",
							}}
						>
							<span style={{ fontSize: "6px" }}>업무형태</span>
							<br />
							<span style={{ fontSize: "20px" }}>{modalData.workType}</span>
						</div>
					</div>
					<div className="detailInfoArea" style={{ marginTop: "2rem" }}>
						<table style={{ width: "100%" }}>
							<tbody style={{ border: "1px solid black" }}>
								<tr>
									<td
										style={{
											border: "1px solid black",
											width: "25%",
											textAlign: "center",
										}}
									>
										<b>차량 톤수</b>
									</td>
									<td
										style={{
											border: "1px solid black",
											width: "75%",
										}}
									>
										{modalData.tonType}
									</td>
								</tr>
								<tr>
									<td
										style={{
											border: "1px solid black",
											textAlign: "center",
										}}
									>
										<b>차량 종류</b>
									</td>
									<td style={{ border: "1px solid black" }}>{modalData.carType}</td>
								</tr>
								<tr>
									<td
										style={{
											border: "1px solid black",
											textAlign: "center",
										}}
									>
										<b>배송 품목</b>
									</td>
									<td style={{ border: "1px solid black" }}>{modalData.deliveryProduct}</td>
								</tr>
								<tr>
									<td
										style={{
											border: "1px solid black",
											textAlign: "center",
										}}
									>
										<b>상차지</b>
									</td>
									<td style={{ border: "1px solid black" }}>{modalData.pickupPoint}</td>
								</tr>
								<tr>
									<td
										style={{
											border: "1px solid black",
											textAlign: "center",
										}}
									>
										<b>근무 일자</b>
									</td>
									<td style={{ border: "1px solid black" }}>{modalData.workInfo}</td>
								</tr>
								<tr>
									<td
										style={{
											border: "1px solid black",
											textAlign: "center",
										}}
									>
										<b>근무 시간</b>
									</td>
									<td style={{ border: "1px solid black" }}>{modalData.officeHours}</td>
								</tr>
								<tr>
									<td
										style={{
											border: "1px solid black",
											textAlign: "center",
										}}
									>
										<b>상세 사항</b>
									</td>
									<td style={{ border: "1px solid black" }}>{modalData.comment}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={() => setModalShow(false)}>닫기</button>
				</Modal.Footer>
			</Modal> */}
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
								<span>공지사항</span>
							</h1>
							<div className="page-header-subtitle">공지사항 페이지</div>
							<button
								onClick={() => {
									// updateData();
									mutate();
								}}
							>
								테스트!!!
							</button>
						</div>
					</div>
				</div>
				<div className="container-fluid mt-n10">
					<div className="card mb-4">
						<div className="card-header row">
							<div className="col-12 row mt-3">
								<div className="col-3">
									<div className="d-flex justify-content-start">
										<button onClick={dateCalc.getLastWeek}>1주일</button>
										<button onClick={dateCalc.getLastMonth}>1개월</button>
										<button onClick={dateCalc.getLast3Month}>3개월</button>
										<button onClick={dateCalc.getLast6Month}>6개월</button>
									</div>
								</div>
								<div className="col-5 d-flex justify-content-center"></div>
								<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto">
									<input
										className="form-control datepicker col-3"
										id="fromDate"
										name="fromDate"
										type="text"
										placeholder="2020-01-01"
									/>
									<label className="col-form-label ml-3 mr-3">~</label>
									<input
										className="form-control datepicker col-3"
										id="toDate"
										name="toDate"
										type="text"
										placeholder="2020-12-31"
									/>
								</div>
							</div>
						</div>
						<div className="card-body">
							<div className="datatable table-responsive">
								<table
									id="noticeList"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
									style={{ textAlign: "center" }}
								>
									<thead>
										<tr>
											{/* <th style={{ width: "1rem" }}>no.</th>
											<th style={{ width: "5rem" }}>작성일</th>
											<th style={{ width: "5rem" }}>운송사</th>
											<th style={{ width: "5rem" }}>운송그룹</th>
											<th style={{ width: "15rem" }}>오더코드</th>
											<th style={{ width: "5rem" }}>업무 형태</th>
											<th style={{ width: "5rem" }}>모집인원</th>
											<th style={{ width: "5rem" }}>운송료</th>
											<th style={{ width: "5rem" }}>상태값</th>
											<th style={{ width: "5rem" }}>상세보기</th> */}
											<th>이름</th>
											<th>전화번호</th>
											<th>오너코드</th>
											<th>운송사seq</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{userName}</td>
											<td>{phone}</td>
											<td>{ownerCode}</td>
											<td>{carrierSeq}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</MainStructure>
	);
}

export default NoticeList;
