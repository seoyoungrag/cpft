import React from "react";
import MainStructure from "components/structure/MainStructure";
import Modal from "react-bootstrap/Modal";
import * as Calc from "util/Calc";
import * as dl from "util/DataTableLang";

function VocManage(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		const dummyTable = $("#VocManageTbl").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			dom:
				"<'row mb-2'<'col-3 d-flex justify-content-start VCM1_start'><'col-6 d-flex justify-content-center VCM1_center'><'col-3 d-flex justify-content-end VCM1_end'>>" +
				"<'row'<'col-3 d-flex justify-content-start VCM2_start'><'col-7 d-flex justify-content-center VCM2_center'><'col-2 d-flex justify-content-end VCM2_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			data: array,
			columns: [
				{ title: "no.", data: null },
				{ title: "고객분류", data: "customerType" },
				{ title: "작성일", data: "vocRegDate" },
				{ title: "VOC상태", data: "vocStatus" },
				{ title: "인입채널", data: "vocChannel" },
				{ title: "접수자", data: "vocReceiver" },
				{ title: "처리자", data: "vocContactor" },
				{ title: "작성자", data: "vocWriter" },
				{ title: "문의번호", data: "csNumber" },
				{
					title: "상세보기",
					data: "vocSeq",
					width: "10%",
					render: function (data, type, row) {
						return '<button id="' + data + '" name="vocManageDetail" class="btn btn-info">상세보기</button>';
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
			order: [[2, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				// 상세보기
				$("button[name=vocManageDetail").on("click", function () {
					const id = $(this).attr("id");
					for (let i = 0; i < modalArray.length; i++) {
						if (modalArray[i].vocSeq === id) {
							setModalData((prevModalData) => ({
								...prevModalData,
								customerType: modalArray[i].customerType,
								vocRegDate: modalArray[i].vocRegDate,
								vocStatus: modalArray[i].vocStatus,
								vocChannel: modalArray[i].vocChannel,
								vocReceiver: modalArray[i].vocReceiver,
								vocContactor: modalArray[i].vocContactor,
								vocWriter: modalArray[i].vocWriter,
								csNumber: modalArray[i].csNumber,
								vocConfirmDate: modalArray[i].vocConfirmDate,
								csTitle: modalArray[i].csTitle,
								csContents: modalArray[i].csContents,
								csReply: modalArray[i].csReply,
							}));
						}
					}
					setModalShow(true);
				});

				// 범위 버튼 추가
				$(".VCM1_start").append(
					'<button id="7" class="btn btn-secondary mr-1 calBtns">1주일</button>' +
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
				$(".VCM1_center").append(
					'<input type="text" id="fromDate" class="form-control datepicker col-2" placeholder="2020-00-00" />' +
						'<label class="col-form-label ml-3 mr-3">~</label>' +
						'<input type="text" id="toDate" class="form-control datepicker col-2" placeholder="2020-12-31" />'
				);

				// 달력 초기화 버튼
				$(".VCM1_center").append('<button class="btn btn-primary" id="resetCalendar">초기화</button>');

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

				// 카테고리1 추가
				$(".VCM2_start").append('<label class="form-control col-3" style="border: 0">고객분류</label>');
				const column1 = this.api().column(1);
				const select1 = $("<select class='form-control col-3'><option value=''>전체</option></select>")
					.appendTo(".VCM2_start")
					.on("change", function () {
						const val = $(this).val();
						column1.search(val ? "^" + $(this).val() + "$" : val, true, false).draw();
					});
				column1
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select1.append("<option>" + data + "</option>");
					});

				// 카테고리2 추가
				$(".VCM2_start").append('<label class="form-control col-3" style="border: 0">VOC 상태</label>');
				const column2 = this.api().column(3);
				const select2 = $("<select class='form-control col-3'><option value=''>전체</option></select>")
					.appendTo(".VCM2_start")
					.on("change", function () {
						const val = $(this).val();
						column2.search(val ? "^" + $(this).val() + "$" : val, true, false).draw();
					});
				column2
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select2.append("<option>" + data + "</option>");
					});

				// 검색창 추가
				$(".VCM2_center").append('<label class="form-control col-1" style="border: 0">작성자</label>');
				$(".VCM2_center").append('<input type="text" id="searchVal" class="form-control col-10" placeholder="검색" />');

				// VOC인입 버튼
				$(".VCM2_end").append('<button id="vocInsert" class="btn btn-info">VOC추가</button>');
				$("#vocInsert").on("click", function () {
					handleShow();
				});

				// 검색 자동검색
				$("#searchVal").on("keyup", function () {
					const searchVal = $(this).val();
					dummyTable.columns(7).search(searchVal).draw();
				});

				// 달력 검색 추가
				$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
					const from = $("#fromDate").datepicker("getDate");
					const to = $("#toDate").datepicker("getDate");
					const targetDate = new Date(data[2]);

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

	// 더미 데이터 ---------------------------------------------------------------------
	const array = [
		{
			customerType: "차주",
			vocRegDate: "2020-09-12",
			vocStatus: "확인중",
			vocChannel: "게시판",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "양차주",
			csNumber: "M00004",
			vocSeq: "1",
		},
		{
			customerType: "차주",
			vocRegDate: "2020-09-12",
			vocStatus: "확인중",
			vocChannel: "전화",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "서차주",
			csNumber: "M00003",
			vocSeq: "2",
		},
		{
			customerType: "운송사",
			vocRegDate: "2020-09-13",
			vocStatus: "확인중",
			vocChannel: "기타",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "유차주",
			csNumber: "M00002",
			vocSeq: "3",
		},
		{
			customerType: "운송사",
			vocRegDate: "2020-09-14",
			vocStatus: "처리완료",
			vocChannel: "기타",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "김차주",
			csNumber: "M00001",
			vocSeq: "4",
		},
	];

	// 모달 show 값
	const [modalShow, setModalShow] = React.useState(false);

	// 더미 데이터 ------------------------------------------------------------------------
	const [modalData, setModalData] = React.useState({
		customerType: "-",
		vocRegDate: "-",
		vocStatus: "-",
		vocChannel: "-",
		vocReceiver: "-",
		vocContactor: "-",
		vocWriter: "-",
		csNumber: "-",
		vocConfirmDate: "-",
		csTitle: "-",
		csContents: "-",
		csReply: "-",
	});

	const modalArray = [
		{
			vocSeq: "1",
			customerType: "차주",
			vocRegDate: "2020-08-30",
			vocStatus: "확인중",
			vocChannel: "게시판",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "양차주",
			csNumber: "M00004",
			vocConfirmDate: "2020-08-30",
			csTitle: "이거 어떻게 쓰는 건가요?",
			csContents: "이거 어떻게 쓰는건가요?",
			csReply: "질문을 상세하게 말씀 부탁드립니다.",
		},
		{
			vocSeq: "2",
			customerType: "차주",
			vocRegDate: "2020-08-17",
			vocStatus: "확인중",
			vocChannel: "전화",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "서차주",
			csNumber: "M00003",
			vocConfirmDate: "2020-08-30",
			csTitle: "돈은 어디로 입금되나요?",
			csContents: "돈이 어디로 입금되는 지 모르겠어요.",
			csReply: "지정된 계좌번호로 입금 됩니다.",
		},
		{
			vocSeq: "3",
			customerType: "차주",
			vocRegDate: "2020-08-08",
			vocStatus: "확인중",
			vocChannel: "기타",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "유차주",
			csNumber: "M00002",
			vocConfirmDate: "2020-08-30",
			csTitle: "어플 사용법 좀 가르쳐 주세요.",
			csContents: "어플 사용법을 모르겠어요 알려주세요!",
			csReply: "해당 화주사에 유선 문의 부탁드립니다.",
		},
		{
			vocSeq: "4",
			customerType: "차주",
			vocRegDate: "2020-08-05",
			vocStatus: "처리완료",
			vocChannel: "기타",
			vocReceiver: "유아름",
			vocContactor: "김재하",
			vocWriter: "김차주",
			csNumber: "M00001",
			vocConfirmDate: "2020-08-30",
			csTitle: "서류제출 어떻게 하나요?",
			csContents: "서류 제출을 어디서 하는지 모르겠어요. 어디서 찾으면 되나요?",
			csReply: "마이페이지 > 내 정보 수정에 들어가면 있습니다. 4개 모두 올려주세요.",
		},
	];

	const [show, setShow] = React.useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleChagne = (e) => {
		const { name, value } = e.target;
		setModalData((prevModalData) => ({
			...prevModalData,
			[name]: value,
		}));
	};

	const updateReply = React.useRef();
	const btnView = React.useRef();

	const updateMode = () => {
		// 이 경우 굳이 ref를 사용한 이유 -> Modal내부의 dom은 Modal이 화면에 보이기 전까지는 생성되지 않음(언마운트 상태), 때문에 제이쿼리 선택자로 참조가 불가능함
		// ref는 참조가 되어서 사용함
		// 순수 자바스크립트 vs 제이쿼리 편한방식 골라 쓰면 됨
		// updateReply.current.readOnly = false;
		// btnView.current.innerHTML = "저장";
		$(updateReply.current).attr("readonly", false);
		$(btnView.current).html("저장");
	};

	//--------------------------------------------

	return (
		<MainStructure>
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
								<span>VOC관리</span>
							</h1>
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
									id="VocManageTbl"
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

			<Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>VOC 상세보기</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid">
					<div className="sbp-preview">
						<div className="sbp-preview-content">
							<div className="col-12 row">
								<div className="col-6">
									<h3>문의내역</h3>
									<table style={{ border: "1px solid #818380" }} className="table col-12">
										<tbody className="col-12">
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>작성일</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="vocRegDate">{modalData.vocRegDate}</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>문의번호</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="csNumber">{modalData.csNumber}</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>인입채널</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<select
														className="form-control col-12 col-sm-8"
														id="vocChannel"
														name="vocChannel"
														value={modalData.vocChannel}
														onChange={handleChagne}
													>
														<option value="전체">전체</option>
														<option value="전화">전화</option>
														<option value="기타">기타</option>
														<option value="게시판">게시판</option>
													</select>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>고객분류</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<span id="customerType">
														<select
															className="form-control col-12 col-sm-8"
															id="customerType"
															name="customerType"
															onChange={handleChagne}
														>
															<option value="전체">전체</option>
														</select>
													</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>작성자</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<span id="vocWriter">{modalData.vocWriter}</span>
												</td>
											</tr>
											<tr>
												<td
													colSpan="2"
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<b>최초 문의 내용</b>
													<table>
														<tbody>
															<tr>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	제목
																</td>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	<span id="csTitle">
																		<textarea
																			className="form-control col-12 col-sm-12"
																			id="csTitle"
																			name="csTitle"
																			value={modalData.csTitle}
																			required
																			readOnly
																		></textarea>
																	</span>
																</td>
															</tr>
															<tr>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	내용
																</td>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	<span id="csContents">
																		<textarea
																			className="form-control col-12 col-sm-12"
																			id="csContents"
																			name="csContents"
																			value={modalData.csContents}
																			required
																			readOnly
																		></textarea>
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-6">
									<h3>처리내역</h3>
									<table style={{ border: "1px solid #818380" }} className="table col-12">
										<tbody className="col-12">
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>최종처리일</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="vocConfirmDate">{modalData.vocConfirmDate}</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>VOC상태</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<span id="vocStatus">
														<select
															className="form-control col-12 col-sm-8"
															id="vocStatus"
															name="vocStatus"
															value={modalData.vocStatus}
															onChange={handleChagne}
														>
															<option value="전체">전체</option>
															<option value="처리완료">처리완료</option>
															<option value="확인중">확인중</option>
														</select>
													</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>처리자</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="vocContactor">{modalData.vocContactor}</span>
												</td>
											</tr>
											<tr>
												<td
													colSpan="2"
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<b>처리내용</b>
													<span id="csReply">
														<textarea
															className="form-control col-12 col-sm-12"
															id="csReply"
															name="csReply"
															ref={updateReply}
															value={modalData.csReply}
															required
															readOnly
															onChange={handleChagne}
														></textarea>
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-info" ref={btnView} onClick={updateMode}>
						수정
					</button>
				</Modal.Footer>
			</Modal>

			<Modal size="lg" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>VOC 신규 추가</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid">
					<div className="sbp-preview">
						<div className="sbp-preview-content">
							<div className="col-12 row">
								<div className="col-6">
									<h3>문의내역</h3>
									<table style={{ border: "1px solid #818380" }} className="table col-12">
										<tbody className="col-12">
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>작성일</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="vocRegDate">{Calc.getDateStr(new Date())}</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>문의번호</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="csNumber"></span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>인입채널</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<select
														className="form-control col-12 col-sm-8"
														id="vocChannel"
														name="vocChannel"
														onChange={handleChagne}
													>
														<option value="전체">전체</option>
														<option value="전화">전화</option>
														<option value="기타">기타</option>
														<option value="게시판">게시판</option>
													</select>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>고객분류</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<span id="customerType">
														<select
															className="form-control col-12 col-sm-8"
															id="customerType"
															name="customerType"
															onChange={handleChagne}
														>
															<option value="전체">전체</option>
														</select>
													</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>작성자</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<span id="vocWriter"></span>
												</td>
											</tr>
											<tr>
												<td
													colSpan="2"
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<b>최초 문의 내용</b>
													<table>
														<tbody className="col-12">
															<tr>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	제목
																</td>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	<span id="csTitle">
																		<textarea
																			className="form-control col-12 col-sm-12"
																			id="csTitle"
																			name="csTitle"
																			required
																		></textarea>
																	</span>
																</td>
															</tr>
															<tr>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	내용
																</td>
																<td
																	style={{
																		border: "1px solid #818380",
																		padding: "10px",
																		textAlign: "center",
																	}}
																>
																	<span id="csContents">
																		<textarea
																			className="form-control col-12 col-sm-12"
																			id="csContents"
																			name="csContents"
																			required
																		></textarea>
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-6">
									<h3>처리내역</h3>
									<table style={{ border: "1px solid #818380" }} className="table col-12">
										<tbody className="col-12">
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>최종처리일</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="vocConfirmDate">{modalData.vocConfirmDate}</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>VOC상태</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<span id="vocStatus">
														<select
															className="form-control col-12 col-sm-8"
															id="vocStatus"
															name="vocStatus"
															onChange={handleChagne}
														>
															<option value="전체">전체</option>
															<option value="처리완료">처리완료</option>
															<option value="확인중">확인중</option>
														</select>
													</span>
												</td>
											</tr>
											<tr>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
														textAlign: "center",
													}}
												>
													<b>처리자</b>
												</td>
												<td
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<span id="vocContactor"></span>
												</td>
											</tr>
											<tr>
												<td
													colSpan="2"
													style={{
														border: "1px solid #818380",
														padding: "10px",
													}}
												>
													<b>처리내용</b>
													<span id="csReply">
														<textarea
															className="form-control col-12 col-sm-12"
															id="csReply"
															name="csReply"
															onChange={handleChagne}
															required
														></textarea>
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button className="btn btn-info ml-2">등록</button>
					<button className="btn btn-info ml-2" onClick={() => setShow(false)}>
						닫기
					</button>
				</Modal.Footer>
			</Modal>
		</MainStructure>
	);
}
export default VocManage;
