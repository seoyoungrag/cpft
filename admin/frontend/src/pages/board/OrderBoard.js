import React from "react";
import MainStructure from "components/structure/MainStructure";
import Modal from "react-bootstrap/Modal";
import * as Calc from "util/Calc";
import * as dl from "util/DataTableLang";

function OrderBoard(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// 더미 테이블
		const dummyTable = $("#orderBoardList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start ODB_start'><'col-6 d-flex justify-content-center ODB_center'><'col-3 d-flex justify-content-end ODB_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "작성일", data: "createdDay" },
				{ title: "운송사", data: "carrierName" },
				{ title: "운송그룹", data: "carrierGroup" },
				{ title: "오너코드", data: "orderCode" },
				{ title: "업무형태", data: "workType" },
				{ title: "모집인원", data: "recruitment" },
				{ title: "운송료", data: "deliveryPrice" },
				{ title: "상태값", data: "orderStatus" },
				{
					title: "상세보기",
					data: "orderNum",
					render: function (data, type, row) {
						return '<button id="' + data + '" name="boardDetail" class="btn btn-info">상세보기</button>';
					},
				},
			],
			columnDefs: [
				{
					defaultContent: "-",
					targets: "_all",
				},
				{
					targets: 0,
					searchable: false,
					orderable: false,
				},
			],
			order: [[1, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				// 상세보기 버튼
				$("button[name=boardDetail").on("click", function () {
					const id = $(this).attr("id");
					for (let i = 0; i < modalArray.length; i++) {
						if (modalArray[i].orderNum === id) {
							setModalData((prevModalData) => ({
								...prevModalData,
								orderNum: modalArray[i].orderNum,
								carrierName: modalArray[i].carrierName,
								carrierGroup: modalArray[i].carrierGroup,
								orderCode: modalArray[i].orderCode,
								workType: modalArray[i].workType,
								tonType: modalArray[i].tonType,
								carType: modalArray[i].carType,
								deliveryProduct: modalArray[i].deliveryProduct,
								pickupPoint: modalArray[i].pickupPoint,
								workInfo: modalArray[i].workInfo,
								officeHours: modalArray[i].officeHours,
								comment: modalArray[i].comment,
							}));
						}
					}
					setModalShow(true);
				});

				// 범위 버튼
				$(".ODB_start").append(
					'<button id="7" class="btn btn-secondary mx-1 calBtns">1주일</button>' +
						'<button id="30" class="btn btn-secondary mx-1 calBtns">1개월</button>' +
						'<button id="60" class="btn btn-secondary mx-1 calBtns">3개월</button>' +
						'<button id="90" class="btn btn-secondary mx-1 calBtns">6개월</button>'
				);

				// 범위 버튼 동작
				$(".calBtns").on("click", function () {
					const dateFilter = parseInt($(this).attr("id"));
					switch (dateFilter) {
						case 7:
							Calc.getLastWeek();
							break;
						case 30:
							Calc.getLastMonth();
							break;
						case 60:
							Calc.getLast3Month();
							break;
						case 90:
							Calc.getLast6Month();
							break;
						default:
							break;
					}
				});

				// 달력 추가
				$(".ODB_end").append(
					'<input type="text" id="fromDate" class="form-control datepicker col-4" placeholder="2020-00-00" />' +
						'<label class="col-form-label ml-3 mr-3">~</label>' +
						'<input type="text" id="toDate" class="form-control datepicker col-4" placeholder="2020-12-31" />'
				);

				// 달력 초기화 버튼
				$(".ODB_end").append('<button class="btn btn-primary" id="resetCalendar">초기화</button>');

				// 달력 초기화
				$("#resetCalendar").on("click", function () {
					$("#fromDate").datepicker("setDate", "");
					$("#toDate").datepicker("setDate", "");
				});

				// datepicker
				$("#fromDate, #toDate").datepicker();

				// 달력 검색
				$("#fromDate, #toDate").on("change", function () {
					dummyTable.draw();
				});

				// 달력 검색 추가
				$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
					const from = $("#fromDate").datepicker("getDate");
					const to = $("#toDate").datepicker("getDate");
					const targetDate = new Date(data[1]);

					if (from === null && to === null) return true;
					if (from === null && targetDate <= to) return true;
					if (to === null && targetDate >= from) return true;
					if (targetDate <= to && targetDate >= from) return true;
					return false;
				});
			},
		});

		// rownum
		dummyTable
			.on("order.dt search.dt", function () {
				dummyTable
					.column(0, { search: "applied", order: "applied" })
					.nodes()
					.each(function (cell, i) {
						cell.innerHTML = i + 1;
					});
			})
			.draw();

		// 컴포넌트 언마운트
		return () => {
			$.fn.dataTable.ext.search.pop();
			dummyTable.destroy(true);
		};
	}, []);

	// 모달 show 값
	const [modalShow, setModalShow] = React.useState(false);

	// 더미 데이터 ------------------------------------------------------------------------
	const [modalData, setModalData] = React.useState({
		orderNum: null,
		carrierName: null,
		carrierGroup: null,
		orderCode: null,
		workType: null,
		tonType: null,
		carType: null,
		deliveryProduct: null,
		pickupPoint: null,
		workInfo: null,
		officeHours: null,
		comment: null,
	});

	const modalArray = [
		{
			orderNum: "001",
			carrierName: "팀프레시",
			carrierGroup: "TL",
			orderCode: "W000009",
			workType: "고정",
			tonType: "1t",
			carType: "윙바디",
			deliveryProduct: "가전기구 약 40건",
			pickupPoint: "경기 고양시 일산동구 문봉동 101-1",
			workInfo: "주 6일, 토X",
			officeHours: "00:00 ~ 07:00",
			comment: "까대기 포함",
		},
		{
			orderNum: "002",
			carrierName: "마켓컬리",
			carrierGroup: "MK",
			orderCode: "W021132",
			workType: "단기",
			tonType: "3t",
			carType: "마이티",
			deliveryProduct: "식자재 박스 약 200건",
			pickupPoint: "부산 해운대 가리봉동 11-1",
			workInfo: "주 5일, 주말 X",
			officeHours: "00:00 ~ 07:00",
			comment: "총알배송",
		},
		{
			orderNum: "003",
			carrierName: "CJ홈쇼핑",
			carrierGroup: "CJ",
			orderCode: "W020198",
			workType: "단기",
			tonType: "5t",
			carType: "봉고3",
			deliveryProduct: "가정집 박스 약 40건",
			pickupPoint: "서울시 강남구 잠실동 32-2",
			workInfo: "주 7일",
			officeHours: "00:00 ~ 07:00",
			comment: "파손시 책임 안짐",
		},
	];

	const array = [
		{
			orderNum: "001",
			createdDay: "2020/08/01",
			carrierName: "팀프레시",
			carrierGroup: "TL",
			orderCode: "W000009",
			workType: "고정",
			recruitment: "5",
			deliveryPrice: "3,000,000",
			orderStatus: "진행중",
		},
		{
			orderNum: "002",
			createdDay: "2020/08/15",
			carrierName: "마켓컬리",
			carrierGroup: "MK",
			orderCode: "W021132",
			workType: "단기",
			recruitment: "10",
			deliveryPrice: "23,000,000",
			orderStatus: "진행중",
		},
		{
			orderNum: "003",
			createdDay: "2020/09/04",
			carrierName: "CJ홈쇼핑",
			carrierGroup: "CJ",
			orderCode: "W020198",
			workType: "단기",
			recruitment: "1",
			deliveryPrice: "3,050,000",
			orderStatus: "진행중",
		},
	];
	// ------------------------------------------------------------------------------------------------

	return (
		<MainStructure>
			<Modal show={modalShow} onHide={() => setModalShow(false)}>
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
							<span style={{ fontSize: "20px" }}>{modalData.carrierName || ""}</span>
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
							<span style={{ fontSize: "20px" }}>{modalData.carrierGroup || ""}</span>
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
							<span style={{ fontSize: "20px" }}>{modalData.orderCode || ""}</span>
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
							<span style={{ fontSize: "20px" }}>{modalData.workType || ""}</span>
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
										{modalData.tonType || ""}
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
									<td style={{ border: "1px solid black" }}>{modalData.carType || ""}</td>
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
									<td style={{ border: "1px solid black" }}>{modalData.deliveryProduct || ""}</td>
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
									<td style={{ border: "1px solid black" }}>{modalData.pickupPoint || ""}</td>
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
									<td style={{ border: "1px solid black" }}>{modalData.workInfo || ""}</td>
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
									<td style={{ border: "1px solid black" }}>{modalData.officeHours || ""}</td>
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
									<td style={{ border: "1px solid black" }}>{modalData.comment || ""}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button onClick={() => setModalShow(false)} className="btn btn-info">
						닫기
					</button>
				</Modal.Footer>
			</Modal>
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
								<span>게시글 관리</span>
							</h1>
							<div className="page-header-subtitle">OrderBoard 게시글 관리 - 오더게시판 페이지</div>
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
							<div className="datatable table-responsive">
								<table
									id="orderBoardList"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
									style={{ textAlign: "center" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</MainStructure>
	);
}

export default React.memo(OrderBoard);
