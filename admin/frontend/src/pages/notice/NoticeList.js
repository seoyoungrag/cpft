import React from "react";
import * as dl from "util/DataTableLang";

function NoticeList(props) {
	React.useEffect(() => {
		// 더미 테이블
		const dummyTable = $("#noticeList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: dummyData,
			dom:
				"<'row'<'col-3 d-flex justify-content-start NTL_start'><'col-6 d-flex justify-content-center NTL_center'><'col-3 d-flex justify-content-end NTL_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "대상", data: "target" },
				{ title: "제목", data: "title" },
				{ title: "작성자", data: "writer" },
				{ title: "작성일", data: "regDate" },
				{ title: "공지시작일", data: "noticeStartDay" },
				{ title: "공지종료일", data: "noticeEndDay" },
				{ title: "공지형식", data: "noticeType" },
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
			order: [[4, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				// 테이블 클릭 상세보기
				$("#noticeList tbody tr").on("click", function () {
					const noticeSeq = $(this).attr("id");
					props.noticeDetail(noticeSeq);
				});

				// 테이블 마우스 hover
				$("#noticeList tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				// 카테고리 추가
				const column = this.api().column(1);
				const select = $("<select class='form-control col-3'><option value=''>전체</option></select>")
					.appendTo(".NTL_start")
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

				// 공지사항 등록 버튼
				$(".NTL_end").append('<button id="insertNotice" class="btn btn-info">공지사항 등록</button>');
				// 공지사항 등록 버튼 동작
				$("#insertNotice").on("click", function () {
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
		};
	}, []);

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
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(NoticeList);
