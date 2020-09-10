import React from "react";
import { globalContext } from "util/GlobalContext";

function NoticeList(props) {
	React.useEffect(() => {
		// 더미 테이블
		const dummyTable = $("#noticeList").DataTable({
			data: dummyData,
			columns: [
				{ data: null },
				{ data: "target" },
				{ data: "title" },
				{ data: "writer" },
				{ data: "regDate" },
				{ data: "noticeStartDay" },
				{ data: "noticeEndDay" },
				{ data: "noticeType" },
			],
			columnDefs: [
				{
					defaultContent: "-",
					targets: "_all",
				},
				{
					targets: [0],
					createdCell: function (td, cellData, rowData, row, col) {
						$(td).text(row + 1);
					},
				},
			],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				const column = this.api().column(1);
				const select = $("<select><option value=''>전체</option></select>")
					.appendTo("#searchTab")
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

				$("#noticeList tbody tr").on("click", function () {
					const noticeSeq = $(this).attr("id");
					const action = {
						type: "SET_NOTICE_SEQ",
						noticeSeq: noticeSeq - 1,
					};
					dispatch(action);

					// const url = "/notice/noticeDetail";
					// props.history.push(url, { noticeSeq: noticeSeq });
				});

				$("#noticeList tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});
			},
		});

		return () => {
			dummyTable.destroy(true);
			$("#noticeList tbody tr").unbind();
		};
	}, []);

	const { globalState, dispatch } = React.useContext(globalContext);

	// 더미데이터
	const dummyData = [
		{
			noticeSeq: 1,
			target: "운송사",
			title: "[공지사항] 운송사에게 알립니다.",
			writer: "홍길동",
			regDate: "2020/09/01",
			noticeStartDay: "2020/09/01",
			noticeEndDay: "2020/09/15",
			noticeType: "팝업",
		},
		{
			noticeSeq: 2,
			target: "차주",
			title: "[공지사항] 차주에게 알립니다.",
			writer: "고길동",
			regDate: "2020/09/01",
			noticeStartDay: "-",
			noticeEndDay: "-",
			noticeType: "게시판",
		},
		{
			noticeSeq: 3,
			target: "운송사",
			title: "[공지사항] 운송사에게 알립니다.",
			writer: "홍길동",
			regDate: "2020/09/01",
			noticeStartDay: "2020/09/10",
			noticeEndDay: "2020/09/15",
			noticeType: "게시판",
		},
	];

	return (
		<React.Fragment>
			<div className="card-header-row">
				<div className="col-12 row mt-3">
					<div className="col-3">
						<div className="d-flex justify-content-start" id="searchTab"></div>
						<div className="col-5 d-flex justify-content-center"></div>
						<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto"></div>
					</div>
					<div className="col-5 d-flex justify-content-center"></div>
					<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto">
						<button onClick={() => dispatch({ type: "SET_NOTICE_MUTATE", isNoticeMutate: true })}>공지사항 등록</button>
					</div>
				</div>
			</div>
			<div className="form-row my-2 mb-3">
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
								<th style={{ width: "1rem" }}>no.</th>
								<th style={{ width: "3rem" }}>대상</th>
								<th style={{ width: "15rem" }}>제목</th>
								<th style={{ width: "5rem" }}>작성자</th>
								<th style={{ width: "5rem" }}>작성일</th>
								<th style={{ width: "5rem" }}>공지시작일</th>
								<th style={{ width: "5rem" }}>공지종료일</th>
								<th style={{ width: "5rem" }}>공지형식</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
}

export default NoticeList;
