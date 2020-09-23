import React from "react";
import * as dl from "util/DataTableLang";

function PushList(props) {
	React.useEffect(() => {
		// 더미 테이블
		const dummyTable = $("#pushList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: dummyData,
			dom:
				"<'row'<'col-3 d-flex justify-content-start PSL_start'><'col-6 d-flex justify-content-center PSL_center'><'col-3 d-flex justify-content-end PSL_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "분류", data: "classification" },
				{ title: "대상", data: "target" },
				{ title: "내용", data: "content" },
				{ title: "작성자", data: "writer" },
				{ title: "발송일자", data: "sendDate" },
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
				// 테이블 클릭 상세보기
				$("#pushList tbody tr").on("click", function () {
					const pushSeq = $(this).attr("id");
					props.pushDetail(pushSeq);
				});

				// 테이블 마우스 hover
				$("#pushList tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				// push등록 버튼
				$(".PSL_end").append('<button id="insertPush" class="btn btn-info">PUSH 등록</button>');
				// push등록 버튼 동작
				$("#insertPush").on("click", function () {
					props.onClick();
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
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(PushList);
