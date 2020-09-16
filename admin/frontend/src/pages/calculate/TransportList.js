import React from "react";
import MainStructure from "components/structure/MainStructure";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import * as Calc from "util/Calc";

function TransportList(props) {
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
		const dummyTable = $("#TransportListTbl").DataTable({
			// language: DataTable_language,
			lengthChange: false,
			data: array,
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
				$("#TransportListTbl tbody tr").on("click", function () {
					const userSeq = $(this).attr("id");
					const url = "/calculate/transportDetail";
					props.history.push(url, { userSeq: userSeq });
				});

				$("#TransportListTbl tbody tr").on("mouseenter", function () {
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

		// 컴포넌트 언마운트
		return () => {
			$("#TransportListTbl tbody tr").off();
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

	// 달력 검색 로직
	registerLocale("ko", ko);
	const [searchMonth, setSearchMonth] = React.useState(null);
	React.useEffect(() => {
		const dummyTable = $("#TransportListTbl").DataTable();
		if (searchMonth !== null) {
			dummyTable.columns(9).search(Calc.getMonthStr(searchMonth)).draw();
		} else {
			dummyTable.columns(9).search("").draw();
		}
	}, [searchMonth]);

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
						<div className="card-body">
							<div className="col-12 d-flex justify-content-end">
								<DatePicker
									locale="ko"
									selected={searchMonth || ""}
									dateFormat="yyyy-MM"
									onChange={(date) => setSearchMonth(date)}
									className="searchMonth"
									placeholderText="2020-00"
									showMonthYearPicker
								/>
								<button onClick={() => setSearchMonth(null)}>초기화</button>
							</div>
							<div className="form-row my-2 mb-3">
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
												<th rowSpan="2" style={{ width: "1rem", verticalAlign: "middle" }}>
													no.
												</th>
												<th rowSpan="2" style={{ width: "6rem", verticalAlign: "middle" }}>
													운송사
												</th>
												<th rowSpan="2" style={{ width: "5rem", verticalAlign: "middle" }}>
													운송그룹
												</th>
												<th rowSpan="2" style={{ width: "5rem", verticalAlign: "middle" }}>
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
				</div>
			</main>
		</MainStructure>
	);
}
export default TransportList;
