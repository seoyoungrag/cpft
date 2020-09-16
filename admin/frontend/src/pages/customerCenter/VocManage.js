import React from "react";
import MainStructure from "components/structure/MainStructure";
import Modal from "react-bootstrap/Modal";
import * as Calc from "util/Calc";

function VocManage(props) {
	const DataTable_language = {
		decimal: ",",
		thousands: ".",
		paginate: {
			first: "",
			last: "",
			previous: "<",
			next: ">",
		},
		processing: "처리 중 입니다.",
		emptyTable: "처리할 내용이 없습니다.",
		info: "총 _PAGES_페이지/_TOTAL_개 중 (_START_ ~ _END_) ",
	};

	// 컴포넌트 마운트
	React.useEffect(() => {
		const dummyTable = $("#VocManageTbl").DataTable({
			//language: DataTable_language,
			dom:
				"<'row'<'col-sm-12 col-md-3 contentStart'><'col-sm-12 col-md-6' contentCenter><'col-sm-12 col-md-3 contentEnd'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			data: array,
			columns: [
				{ data: null, width: "5%" },
				{ data: "customerType", width: "8%" },
				{ data: "vocRegDate", width: "10%" },
				{ data: "vocStatus", width: "10%" },
				{ data: "vocChannel", width: "10%" },
				{ data: "vocReceiver", width: "10%" },
				{ data: "vocContactor", width: "10%" },
				{ data: "vocWriter", width: "10%" },
				{ data: "csNumber", width: "10%" },
				{
					data: "vocSeq",
					width: "10%",
					render: function (data, type, row) {
						return '<button id="' + data + '" name="vocManageDetail" class="btn btn-info ml-2">보기</button>';
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

				const column1 = this.api().column(1);
				const select1 = $("<select><option value=''>전체</option></select>")
					.appendTo("#searchTab1")
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

				const column2 = this.api().column(3);
				const select2 = $("<select><option value=''>전체</option></select>")
					.appendTo("#searchTab2")
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

		$("#fromDate, #toDate").datepicker();

		$("#fromDate, #toDate").on("change", function () {
			dummyTable.draw();
		});

		$("#searchVal").on("keyup", function () {
			const searchVal = $(this).val();
			dummyTable.columns(7).search(searchVal).draw();
		});

		// 컴포넌트 언마운트
		return () => {
			dummyTable.destroy(true);
			$.fn.dataTable.ext.search.pop();
			$("#fromDate, #toDate").off();
			$("button[name=vocManageDetail").off();
			$("#searchVal").off();
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
						<div className="card-body">
							<div className="col-12 row">
								<div className="col-3">
									<div className="d-flex justify-content-start">
										<label htmlFor="csRegDate" className="col-12 col-sm-3 col-form-label">
											작성일
										</label>
										<button type="button" className="btn btn-secondary ml-0 mr-1" onClick={Calc.getLastWeek}>
											<span>1주일</span>
										</button>
										<button type="button" className="btn btn-secondary mx-1" onClick={Calc.getLastMonth}>
											<span>1개월</span>
										</button>
										<button type="button" className="btn btn-secondary mx-1" onClick={Calc.getLast3Month}>
											<span>3개월</span>
										</button>
									</div>
								</div>
								<div className="col-4">
									<div className="d-flex justify-content-start">
										<input
											className="form-control datepicker col-4"
											id="fromDate"
											type="text"
											placeholder="2020-08-01"
										/>
										<label className="col-form-label ml-3 mr-3">~</label>
										<input className="form-control datepicker col-4" id="toDate" type="text" placeholder="2020-08-30" />
									</div>
								</div>
							</div>

							<br />

							<div className="col-12 row">
								<div className="col-2">
									<div className="d-flex justify-content-start" id="searchTab1">
										<label htmlFor="csCategory" className="col-12 col-sm-6 col-form-label">
											고객분류
										</label>
									</div>
								</div>
								<div className="col-2">
									<div className="d-flex justify-content-start" id="searchTab2">
										<label htmlFor="csCategory" className="col-12 col-sm-6 col-form-label">
											VOC 상태
										</label>
									</div>
								</div>
								<div className="col-6">
									<div className="d-flex justify-content-start" id="searchOption">
										<label htmlFor="csCategory" className="col-12 col-sm-2 col-form-label">
											작성자
										</label>
										<input
											className="form-control datepicker col-6 col-sm-4"
											id="searchVal"
											type="text"
											placeholder="검색"
										/>
									</div>
								</div>
								<div className="col-2">
									<div className="d-flex justify-content-end">
										<button className="btn btn-info ml-2" onClick={handleShow}>
											VOC추가
										</button>
									</div>
								</div>
							</div>

							<br />

							<div className="datatable table-responsive">
								<table
									id="VocManageTbl"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
									style={{ textAlign: "center" }}
								>
									<thead>
										<tr>
											<th>no.</th>
											<th>고객분류</th>
											<th>작성일</th>
											<th>VOC상태</th>
											<th>인입채널</th>
											<th>접수자</th>
											<th>처리자</th>
											<th>작성자</th>
											<th>문의번호</th>
											<th>상세보기</th>
										</tr>
									</thead>
								</table>
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
															value={modalData.csReply}
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
					<button className="btn btn-info ml-2" onClick={() => setModalShow(false)}>
						닫기
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
													<select className="form-control col-12 col-sm-8" id="vocChannel" name="vocChannel">
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
														<select className="form-control col-12 col-sm-8" id="vocStatus" name="vocStatus">
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
