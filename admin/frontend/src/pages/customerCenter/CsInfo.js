import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as Calc from "util/Calc";
import * as dl from "util/DataTableLang";

function CsInfo(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		const dummyTable = $("#CsInfoTbl").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row mb-2'<'col-3 d-flex justify-content-start CSI1_start'><'col-6 d-flex justify-content-center CSI1_center'><'col-3 d-flex justify-content-end CSI1_end'>>" +
				"<'row'<'col-3 d-flex justify-content-start CSI2_start'><'col-6 d-flex justify-content-center CSI2_center'><'col-3 d-flex justify-content-end CSI2_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "문의번호", data: "csNumber" },
				{ title: "카테고리", data: "csCategory" },
				{ title: "고객분류", data: "customerType" },
				{ title: "제목", data: "csTitle" },
				{ title: "작성자", data: "csWriter" },
				{ title: "작성일", data: "regDate" },
				{ title: "처리상태", data: "csStatus" },
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
				// 리스트 클릭 시 페이지 이동
				$("#CsInfoTbl tbody tr").on("click", function () {
					const userSeq = $(this).attr("id");
					const url = "/customerCenter/csInfoDetail";
					props.history.push(url, { userSeq: userSeq });
				});

				// 리스트 마우스 hover시 포인터 모양 변경
				$("#CsInfoTbl tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				// 카테고리1 추가
				$(".CSI2_start").append('<label class="form-control col-3" style="border: 0">카테고리</label>');
				const column1 = this.api().column(2);
				const select1 = $("<select class='form-control col-4'><option value=''>전체</option></select>")
					.appendTo(".CSI2_start")
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

				// 검색 옵션 추가
				$(".CSI2_center").append(
					'<select id="searchOption" class="form-control col-2">' +
						'<option value="">전체</option>' +
						'<option value="4">제목</option>' +
						'<option value="5">작성자</option>' +
						"</select>"
				);

				// 검색창 추가
				$(".CSI2_center").append('<input type="text" id="searchVal" class="form-control" placeholder="검색" />');

				// 검색 자동검색
				$("#searchVal").on("keyup", function () {
					const searchVal = $(this).val();
					const searchOption = $("#searchOption").val();
					if (searchOption !== "") {
						dummyTable.columns(searchOption).search(searchVal).draw();
					} else {
						dummyTable.search(searchVal).draw();
					}
				});

				// 카테고리2 추가
				$(".CSI2_end").append('<label class="form-control col-3" style="border: 0">처리 상태</label>');
				const column2 = this.api().column(7);
				const select2 = $("<select class='form-control col-4'><option value=''>전체</option></select>")
					.appendTo(".CSI2_end")
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

				// 범위 버튼 추가
				$(".CSI1_start").append(
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
				$(".CSI1_center").append(
					'<input type="text" id="fromDate" class="form-control datepicker col-2" placeholder="2020-00-00" />' +
						'<label class="col-form-label ml-3 mr-3">~</label>' +
						'<input type="text" id="toDate" class="form-control datepicker col-2" placeholder="2020-12-31" />'
				);

				// 달력 초기화 버튼
				$(".CSI1_center").append('<button class="btn btn-primary" id="resetCalendar">초기화</button>');

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
					const targetDate = new Date(data[6]);

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
			csNumber: "M00001",
			csCategory: "문의사항",
			customerType: "차주",
			csTitle: "서류제출 어떻게 하나요?",
			csWriter: "김차주",
			regDate: "2020-09-10",
			csStatus: "처리완료",
		},
		{
			csNumber: "M00002",
			csCategory: "건의사항",
			customerType: "차주",
			csTitle: "어플 사용법 좀 가르쳐 주세요.",
			csWriter: "유차주",
			regDate: "2020-09-11",
			csStatus: "확인중",
		},
		{
			csNumber: "M00003",
			csCategory: "건의사항",
			customerType: "차주",
			csTitle: "돈은 어디로 입금되나요?",
			csWriter: "서차주",
			regDate: "2020-09-17",
			csStatus: "확인중",
		},
		{
			csNumber: "M00004",
			csCategory: "불만사항",
			customerType: "차주",
			csTitle: "이거 어떻게 쓰는 건가요?",
			csWriter: "양차주",
			regDate: "2020-09-15",
			csStatus: "확인중",
		},
	];
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
								<span>고객센터</span>
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
									id="CsInfoTbl"
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
export default CsInfo;
