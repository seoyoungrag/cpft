import React from "react";
import Modal from "react-bootstrap/Modal";
import "vendor/datatables/dataTables.checkboxes.css";
import "vendor/datatables/dataTables.checkboxes.min.js";

function PushMutate(props) {
	React.useEffect(() => {
		if (props.pushSeq !== null) {
			setInputs((prevInputs) => ({
				...prevInputs,
				pushSeq: dummyData[props.pushSeq].pushSeq,
				classification: dummyData[props.pushSeq].classification,
				targets: dummyData[props.pushSeq].targets,
				sendMethod: dummyData[props.pushSeq].sendMethod,
				sendDate: dummyData[props.pushSeq].sendDate,
				sendTime: dummyData[props.pushSeq].sendTime,
				title: dummyData[props.pushSeq].title,
				content: dummyData[props.pushSeq].content,
			}));
		}
		$("#sendDate").datepicker();

		return () => {
			$("#targetList input[type=checkbox]").unbind();
		};
	}, []);

	const [inputs, setInputs] = React.useState({
		pushSeq: "",
		classification: "",
		targets: [],
		sendMethod: "",
		sendDate: "",
		sendTime: "",
		title: "",
		content: "",
	});

	const { title } = inputs;

	const { pushSeq, classification, targets, sendMethod, sendDate, sendTime, content } = inputs;

	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// 더미데이터
	const dummyData = [
		{
			pushSeq: 1,
			classification: "전체차주",
			targets: [{ truckOwnerName: "홍길동" }, { truckOwnerName: "고길동" }],
			sendMethod: "즉시발송",
			sendDate: "2020/09/10",
			sendTime: "12:00",
			title: "더미데이터1",
			content: "명세서 확인하세요",
		},
		{
			pushSeq: 2,
			classification: "개별",
			targets: [{ truckOwnerName: "둘리" }, { truckOwnerName: "또치" }],
			sendMethod: "예약발송",
			sendDate: "2020/09/30",
			sendTime: "18:00",
			title: "터미네이터",
			content: "푸시테스트",
		},
		{
			pushSeq: 3,
			classification: "전체차주",
			targets: [{ truckOwnerName: "희동이" }],
			sendMethod: "즉시발송",
			sendDate: "2020/09/15",
			sendTime: "17:00",
			title: "테스트데이터",
			content: "8월 명세서 발송",
		},
	];

	// 더미 차주리스트
	const truckOwnerList = [
		{
			truckOwnerSeq: 1,
			carrierGroup: "TS1",
			truckOwnerCode: "CZ00001",
			truckOwnerName: "홍길동",
		},
		{
			truckOwnerSeq: 2,
			carrierGroup: "TS2",
			truckOwnerCode: "CZ00022",
			truckOwnerName: "고길동",
		},
		{
			truckOwnerSeq: 3,
			carrierGroup: "TS3",
			truckOwnerCode: "CZ00333",
			truckOwnerName: "대길동",
		},
	];

	const [selectTargetList, setSelectTargetList] = React.useState([]);

	const saveTarget = () => {
		setInputs((prevInputs) => ({
			...prevInputs,
			targets: selectTargetList,
		}));
	};

	React.useEffect(() => {
		if (targets.length !== 0) {
			targets.map((data) => $("#targetTab").append(data.truckOwnerName + " "));
		}
	}, [targets]);

	// 모달 show 값
	const [modalShow, setModalShow] = React.useState(false);

	React.useEffect(() => {
		if (modalShow) {
			$("#targetList").DataTable({
				lengthChange: false,
				info: false,
				paging: false,
				dom: "lrtip",
				data: truckOwnerList,
				columns: [{ data: "truckOwnerSeq" }, { data: "carrierGroup" }, { data: "truckOwnerCode" }, { data: "truckOwnerName" }],
				columnDefs: [
					{
						defaultContent: "-",
						targets: "_all",
					},
					{
						targets: 0,
						createdCell: function (td, cellData, rowData, row, col) {
							$(td).html("<input type='checkbox' id=" + cellData + " />");
						},
					},
				],
				initComplete: function (settings, json) {
					const column = this.api().column(1);
					const select = $("<select width='20%'><option value=''>전체</option></select>")
						.appendTo(".searchOptionArea")
						.on("change", function () {
							const val = $(this).val();
							column.search(val ? "^" + $(this).val() + "$" : val, true, false).draw();
						});
					column
						.data()
						.unique()
						.sort()
						.each(function (data, j) {
							select.append("<option>" + data + "</option>");
						});

					$("#targetList input[type=checkbox]").on("change", function () {
						const seq = parseInt($(this).attr("id"));
						if ($(this).is(":checked")) {
							truckOwnerList.map(
								(data) =>
									data.truckOwnerSeq === seq &&
									setSelectTargetList((prevSelectTargetList) => prevSelectTargetList.concat(data))
							);
						} else {
							setSelectTargetList((prevSelectTargetList) =>
								prevSelectTargetList.filter((data) => data.truckOwnerSeq !== seq)
							);
						}
					});

					$("#searchTable").keyup(function () {
						targetList.search($(this).val()).draw();
					});
				},
			});

			$("#selectList").DataTable({
				lengthChange: false,
				info: false,
				paging: false,
				dom: "lrtip",
				data: selectTargetList,
				columns: [{ data: "null" }, { data: "carrierGroup" }, { data: "truckOwnerCode" }, { data: "truckOwnerName" }],
				columnDefs: [
					{
						defaultContent: "-",
						targets: "_all",
					},
					{
						targets: 0,
						createdCell: function (td, cellData, rowData, row, col) {
							$(td).html("<input type='checkbox' id=" + cellData + " checked=true />");
						},
					},
				],
			});
		} else {
			$("#targetList").DataTable().destroy(true);
			$("#selectList").DataTable().destroy(true);
		}
	}, [modalShow]);

	React.useEffect(() => {
		$("#selectList").dataTable().fnClearTable();
		$("#selectList").dataTable().fnAddData(selectTargetList);
		// $("#selectList input[type=checkbox]").on("change", function () {
		// 	const seq = parseInt($(this).attr("id"));
		// 	$(this).is(":checked") === false &&
		// 		setSelectTargetList((prevSelectTargetList) => prevSelectTargetList.filter((data) => data.truckOwnerSeq !== seq));
		// });
	}, [selectTargetList]);

	return (
		<React.Fragment>
			<Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>차주추가</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="searchInputArea" style={{ marginBottom: "1rem" }}>
						<input type="text" id="searchTable" name="searchTable" placeholder="차주명 검색" style={{ width: "100%" }} />
					</div>
					<div className="searchOptionArea" style={{ marginBottom: "1rem" }}>
						<select id="carrierName" name="carrierName" style={{ width: "20%", marginRight: "1rem" }}>
							<option>팀프레시</option>
							<option>마켓컬리</option>
						</select>
					</div>
					<div className="targetList" style={{ overflow: "hidden", height: "20rem" }}>
						<div
							className="leftSide"
							style={{ float: "left", width: "48%", height: "100%", marginRight: "1rem", overflow: "scroll" }}
						>
							<form id="myform" method="post">
								<div className="datatable table-responsive">
									<table
										id="targetList"
										className="table table-bordered table-hover"
										width="100%"
										cellSpacing="0"
										role="grid"
										aria-describedby="dataTable_info"
										style={{ textAlign: "center" }}
									>
										<thead>
											<tr>
												<th style={{ width: "1rem" }}></th>
												<th style={{ width: "3rem" }}>운송그룹</th>
												<th style={{ width: "3rem" }}>차주코드</th>
												<th style={{ width: "3rem" }}>차주명</th>
											</tr>
										</thead>
									</table>
								</div>
							</form>
						</div>
						<div className="rightSide" style={{ float: "left", width: "48%", height: "100%" }}>
							<div className="datatable table-responsive">
								<table
									id="selectList"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
									style={{ textAlign: "center" }}
								>
									<thead>
										<tr>
											<th style={{ width: "1rem" }}>
												<input type="checkbox" style={{ display: "none" }} />
											</th>
											<th style={{ width: "3rem" }}>운송그룹</th>
											<th style={{ width: "3rem" }}>차주코드</th>
											<th style={{ width: "3rem" }}>차주명</th>
										</tr>
									</thead>
								</table>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button
						onClick={() => {
							setModalShow(false);
							saveTarget();
						}}
					>
						저장
					</button>
				</Modal.Footer>
			</Modal>
			<div className="card-header-row">
				<div className="col-12 row mt-3">
					<div className="col-3">
						<div className="d-flex justify-content-start" id="searchTab"></div>
						<div className="col-5 d-flex justify-content-center"></div>
						<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto"></div>
					</div>
					<div className="col-5 d-flex justify-content-center"></div>
					<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto"></div>
				</div>
			</div>
			<div className="form-row my-2 mb-3">
				<div className="noticeArea" style={{ border: "1px solid black", width: "100%" }}>
					<div
						className="noticeHeader"
						style={{ paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem", paddingRight: "1rem", width: "100%" }}
					>
						<table style={{ width: "100%" }}>
							<tbody>
								<tr>
									<td style={{ width: "5%" }}>분류</td>
									<td style={{ width: "20%" }}>
										<select
											id="classification"
											name="classification"
											value={classification}
											onChange={handleChange}
											style={{ width: "50%" }}
										>
											<option>전체차주</option>
											<option>개별</option>
										</select>
									</td>
									<td style={{ width: "5%" }}>발송시점</td>
									<td style={{ width: "10%" }}>
										<select
											id="sendMethod"
											name="sendMethod"
											value={sendMethod}
											onChange={handleChange}
											style={{ width: "100%" }}
										>
											<option>즉시발송</option>
											<option>예약발송</option>
										</select>
									</td>
								</tr>
								<tr>
									<td style={{ width: "5%" }}>대상</td>
									<td style={{ width: "20%" }}>
										<button onClick={() => setModalShow(true)} style={{ width: "50%" }}>
											차주 추가
										</button>
									</td>
									<td style={{ width: "5%" }}>예약발송</td>
									<td style={{ width: "10%" }}>
										<input
											type="text"
											id="sendDate"
											name="sendDate"
											value={sendDate}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
									<td>
										<input type="time" id="sendTime" name="sendTime" value={sendTime} onChange={handleChange} />
									</td>
								</tr>
								<tr>
									<td></td>
									<td id="targetTab"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div
						className="noticeContent"
						style={{
							paddingTop: "2rem",
							paddingBottom: "2rem",
							paddingLeft: "1rem",
							paddingRight: "1rem",
							width: "100%",
							borderTop: "1px solid grey",
						}}
					>
						<table style={{ width: "100%" }}>
							<tbody>
								<tr style={{ marginBottom: "3rem" }}>
									<td style={{ width: "5%" }}>제목</td>
									<td>
										<input
											type="text"
											id="title"
											name="title"
											value={title}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
								</tr>
								<tr>
									<td style={{ width: "5%" }}>내용</td>
									<td>
										<textarea
											id="content"
											name="content"
											rows="20"
											value={content}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<div style={{ paddingTop: "2rem", paddingBottom: "2rem", width: "100%" }}>
							{props.pushSeq === null ? (
								<button style={{ float: "right" }}>저장</button>
							) : (
								<React.Fragment>
									<button style={{ float: "right" }}>수정</button>
									<button style={{ float: "right" }}>삭제</button>
								</React.Fragment>
							)}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(PushMutate);
