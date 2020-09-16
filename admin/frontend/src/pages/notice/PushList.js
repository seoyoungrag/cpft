import React from "react";

function PushList(props) {
	React.useEffect(() => {
		// 더미 테이블
		const dummyTable = $("#pushList").DataTable({
			data: dummyData,
			columns: [
				{ data: null },
				{ data: "classification" },
				{ data: "target" },
				{ data: "content" },
				{ data: "writer" },
				{ data: "sendDate" },
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
			order: [[5, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				$("#pushList tbody tr").on("click", function () {
					const pushSeq = $(this).attr("id");
					props.pushDetail(pushSeq);
				});

				$("#pushList tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
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

		return () => {
			dummyTable.destroy(true);
			$("#pushList tbody tr").off();
		};
	}, []);

	// 더미데이터
	const dummyData = [
		{
			pushSeq: 1,
			classification: "개별",
			target: "갑",
			content: "명세서 확인하세요",
			writer: "김재하",
			sendDate: "2020.09.10",
		},
		{
			pushSeq: 2,
			classification: "전체",
			target: "을",
			content: "푸시테스트",
			writer: "김민석",
			sendDate: "2020.09.15",
		},
		{
			pushSeq: 3,
			classification: "개별",
			target: "병",
			content: "8월 명세서 발송",
			writer: "김민철",
			sendDate: "2020.09.16",
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
						<button onClick={props.onClick}>PUSH 등록</button>
					</div>
				</div>
			</div>
			<div className="form-row my-2 mb-3">
				<div className="datatable table-responsive">
					<table
						id="pushList"
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
								<th style={{ width: "3rem" }}>분류</th>
								<th style={{ width: "3rem" }}>대상</th>
								<th style={{ width: "15rem" }}>내용</th>
								<th style={{ width: "5rem" }}>작성자</th>
								<th style={{ width: "5rem" }}>발송일자</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(PushList);
