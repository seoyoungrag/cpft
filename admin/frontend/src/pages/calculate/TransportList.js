import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as dl from "util/DataTableLang";

function TransportList(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		const dummyTable = $("#TransportListTbl").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start TPL_start'><'col-6 d-flex justify-content-center TPL_center'><'col-3 d-flex justify-content-end TPL_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: null },
				{ data: "carrierNm" },
				{ data: "workGroupNm" },
				{ data: "workType" },
				{ data: "carrierCalcStatus" },
				{ data: "carrierCalcEndDate" },
				{ data: "platformCalcStatus" },
				{ data: "carrierPayment" },
				{ data: "platformPayment" },
				{ data: "shippingChargeMonth" },
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
				{
					targets: 9,
					visible: false,
				},
			],
			order: [[1, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				// 테이블 클릭 상세보기
				$("#TransportListTbl tbody tr").on("click", function () {
					const userSeq = $(this).attr("id");
					const url = "/calculate/transportDetail";
					props.history.push(url, { userSeq: userSeq });
				});

				// 테이블 마우스 hover
				$("#TransportListTbl tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				// 테이블 상단 달력 추가
				$(".TPL_start").append('<input type="text" id="month" class="form-control monthpicker col-4" placeholder="2020-00"/>');
				$(".TPL_start").append('<button class="btn btn-primary" id="resetMonth">초기화</button>');

				// monthpicker
				$("#month").monthpicker({
					pattern: "yyyy-mm",
					monthNames: ["01월", "02월", "03월", "04월", "05월", "06월", "07월", "08월", "09월", "10월", "11월", "12월"],
				});

				// 달력 초기화
				$("#resetMonth").on("click", function () {
					$("#month").datepicker("setDate", "");
				});

				// 달력 자동검색
				$("#month").on("change", function () {
					const searchMonth = $(this).val();
					if (searchMonth !== "") {
						dummyTable.columns(9).search(searchMonth).draw();
					} else {
						dummyTable.columns(9).search("").draw();
					}
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
			dummyTable.destroy(true);
		};
	}, []);

	// 더미 데이터 ---------------------------------------------------------------------
	const array = [
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "TS1 고정",
			workType: "고정",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/09/10",
			platformCalcStatus: "진행중",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
			shippingChargeMonth: "2020-07",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "TS2",
			workType: "단기",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/09/10",
			platformCalcStatus: "진행중",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
			shippingChargeMonth: "2020-08",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "TS3 고정",
			workType: "고정",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/09/15",
			platformCalcStatus: "완료",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
			shippingChargeMonth: "2020-08",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "LF1",
			workType: "단기",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/09/15",
			platformCalcStatus: "진행중",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
			shippingChargeMonth: "2020-09",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "LF2",
			workType: "단기",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/09/16",
			platformCalcStatus: "완료",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
			shippingChargeMonth: "2020-09",
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
								<span>운송료 관리</span>
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
									id="TransportListTbl"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
									style={{ textAlign: "center" }}
								>
									<thead>
										<tr>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												no.
											</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												운송사
											</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												운송그룹
											</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												업무형태
											</th>
											<th colSpan="3">운송사 정산</th>
											<th colSpan="2">플랫폼 정산</th>
											<th rowSpan="2">운송사이름(히든)</th>
										</tr>
										<tr>
											<th>운송사 정산 상태</th>
											<th>운송사 정산 완료일</th>
											<th>운송사 입금 금액</th>
											<th>플랫폼 정산 상태</th>
											<th>플랫폼 지출 금액</th>
										</tr>
									</thead>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</MainStructure>
	);
}
export default TransportList;
