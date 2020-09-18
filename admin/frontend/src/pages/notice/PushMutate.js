import React from "react";
import Modal from "react-bootstrap/Modal";
import * as dl from "util/DataTableLang";

function PushMutate(props) {
	React.useEffect(() => {
		if (props.pushSeq !== null) {
			const index = props.pushSeq - 1;
			setInputs((prevInputs) => ({
				...prevInputs,
				pushSeq: dummyData[index].pushSeq,
				classification: dummyData[index].classification,
				targets: dummyData[index].targets,
				sendMethod: dummyData[index].sendMethod,
				sendDate: dummyData[index].sendDate,
				sendTime: dummyData[index].sendTime,
				title: dummyData[index].title,
				content: dummyData[index].content,
			}));
		}
		$("#sendDate").datepicker();

		return () => {
			$("#targetList input[type=checkbox]").off();
		};
	}, []);

	const selectList = React.useRef();
	const targetList = React.useRef();

	const [inputs, setInputs] = React.useState({
		pushSeq: null,
		classification: null,
		targets: [],
		sendMethod: null,
		sendDate: null,
		sendTime: null,
		title: null,
		content: null,
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
			carrierName: "팀프레시",
		},
		{
			truckOwnerSeq: 2,
			carrierGroup: "TS2",
			truckOwnerCode: "CZ00022",
			truckOwnerName: "고길동",
			carrierName: "마켓컬리",
		},
		{
			truckOwnerSeq: 3,
			carrierGroup: "TS3",
			truckOwnerCode: "CZ00333",
			truckOwnerName: "대길동",
			carrierName: "CJ홈쇼핑",
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

	// 모달 open 동작
	React.useEffect(() => {
		if (modalShow) {
			const targetListTbl = $("#targetList").DataTable({
				language: dl.DataTable_language,
				responsive: true,
				data: truckOwnerList,
				dom:
					"<'row'<'col-3 d-flex justify-content-start TGL_start'><'col-6 d-flex justify-content-center TGL_center'><'col-3 d-flex justify-content-end TGL_end'>>" +
					"<'row'<'col-sm-12'rt>>" +
					"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
				columns: [
					{
						title: "",
						data: "truckOwnerSeq",
						render: function (data, type, row) {
							return '<input type="checkbox" id=' + data + " />";
						},
					},
					{ title: "운송그룹", data: "carrierGroup" },
					{ title: "차주코드", data: "truckOwnerCode" },
					{ title: "차주명", data: "truckOwnerName" },
					{ title: "운송사명(히든)", data: "carrierName" },
				],
				columnDefs: [
					{
						defaultContent: "-",
						targets: "_all",
					},
					{
						targets: 4,
						visible: false,
					},
				],
				initComplete: function (settings, json) {
					// 카테고리1 추가
					const column1 = this.api().column(4);
					const select1 = $(
						"<select class='form-control mr-2' style='width: 15%; float: left'><option value=''>전체</option></select>"
					)
						.appendTo(".searchOptionArea")
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
					const column2 = this.api().column(1);
					const select2 = $(
						"<select class='form-control' style='width: 15%; float: left'><option value=''>전체</option></select>"
					)
						.appendTo(".searchOptionArea")
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

					// 체크박스 동작 추가
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

					// 검색 자동검색
					$("#searchTable").on("keyup", function () {
						const searchTable = $(this).val();
						targetListTbl.columns(3).search(searchTable).draw();
					});
				},
			});

			const selectListTbl = $("#selectList").DataTable({
				language: dl.DataTable_language,
				responsive: true,
				data: selectTargetList,
				dom:
					"<'row'<'col-3 d-flex justify-content-start STL_start'><'col-6 d-flex justify-content-center STL_center'><'col-3 d-flex justify-content-end STL_end'>>" +
					"<'row'<'col-sm-12'rt>>" +
					"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
				columns: [
					{
						title: "",
						data: "truckOwnerSeq",
						render: function (data, type, row) {
							return '<input type="checkbox" id=' + data + " checked=true />";
						},
					},
					{ title: "운송그룹", data: "carrierGroup" },
					{ title: "차주코드", data: "truckOwnerCode" },
					{ title: "차주명", data: "truckOwnerName" },
				],
			});
		} else {
			setSelectTargetList([]);
			$("#targetList").DataTable().destroy(true);
			$("#selectList").DataTable().destroy(true);
			$("#searchTable").off();
		}
	}, [modalShow]);

	// 체크박스 체크시 오른쪽 테이블 자동 추가
	React.useEffect(() => {
		$("#selectList").dataTable().fnClearTable();
		if (selectTargetList.length !== 0) {
			$("#selectList").dataTable().fnAddData(selectTargetList);
			$("#selectList input[type=checkbox]").on("change", function () {
				const seq = parseInt($(this).attr("id"));
				if (!$(this).is(":checked")) {
					setSelectTargetList((prevSelectTargetList) => prevSelectTargetList.filter((data) => data.truckOwnerSeq !== seq));
				}
			});
		}
	}, [selectTargetList]);

	return (
		<React.Fragment>
			<Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>차주추가</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="searchInputArea" style={{ marginBottom: "1rem" }}>
						<input type="text" id="searchTable" name="searchTable" className="form-control" placeholder="차주명 검색" />
					</div>
					<div className="searchOptionArea" style={{ marginBottom: "1rem", overflow: "hidden" }}></div>
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
										ref={targetList}
										style={{ textAlign: "center" }}
									/>
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
									ref={selectList}
									style={{ textAlign: "center" }}
								/>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button
						className="btn btn-info"
						onClick={() => {
							setModalShow(false);
							saveTarget();
						}}
					>
						저장
					</button>
				</Modal.Footer>
			</Modal>
			<div className="form-row my-2 mb-3">
				<div className="pushArea" style={{ border: "1px solid black", width: "100%" }}>
					<div
						className="pushHeader"
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
											value={classification || ""}
											className="form-control"
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
											value={sendMethod || ""}
											className="form-control"
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
										<button onClick={() => setModalShow(true)} className="btn btn-primary" style={{ width: "50%" }}>
											차주 추가
										</button>
									</td>
									<td style={{ width: "5%" }}>예약발송</td>
									<td style={{ width: "10%" }}>
										<input
											type="text"
											id="sendDate"
											name="sendDate"
											value={sendDate || ""}
											className="form-control"
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
									<td>
										<input
											type="time"
											id="sendTime"
											name="sendTime"
											value={sendTime || ""}
											className="form-control"
											onChange={handleChange}
											style={{ width: "15%" }}
										/>
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
						className="pushContent"
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
											value={title || ""}
											className="form-control"
											onChange={handleChange}
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
											value={content || ""}
											className="form-control"
											onChange={handleChange}
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<div style={{ paddingTop: "2rem", paddingBottom: "2rem", width: "100%" }}>
							{props.pushSeq === null ? (
								<button style={{ float: "right" }} className="btn btn-info">
									저장
								</button>
							) : (
								<React.Fragment>
									<button style={{ float: "right" }} className="btn btn-info">
										수정
									</button>
									<button style={{ float: "right" }} className="btn btn-info mr-1">
										삭제
									</button>
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
