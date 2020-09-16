import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as Calc from "util/Calc";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "vendor/datatables/dataTables.sum()";

import "vendor/jquery/jquery.mtz.monthpicker";

function TransportDetail(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		setData(userSeq - 1);

		const dummyTable = $("#TransportDetailTbl").DataTable({
			//language: DataTable_language,
			dom:
				"<'row'<'col-sm-12 col-md-3 contentStart'><'col-sm-12 col-md-6' contentCenter><'col-sm-12 col-md-3 contentEnd'f>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			data: array,
			columns: [
				{ data: null, width: "5%" },
				{ data: "truckOwnerNm", width: "8%" },
				{ data: "truckOwnerCode", width: "10%" },
				{ data: "transportCode", width: "15%" },
				{ data: "shippingCharge", width: "15%" },
				{ data: "shippingServiceCharge", width: "15%" },
				{ data: "totalPayment", width: "15%" },
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
					targets: 7,
					visible: false,
				},
			],
			order: [[1, "asc"]],

			createdRow: function (row, data) {
				$(row).attr("id", data.userSeq);
			},

			initComplete: function (settings, json) {
				const sum1 = this.api().column(4).data().sum();
				const sum2 = this.api().column(5).data().sum();
				const sum3 = this.api().column(6).data().sum();

				$("#sum1").html(Calc.regexWON(sum1));
				$("#sum2").html(Calc.regexWON(sum2));
				$("#sum3").html(Calc.regexWON(sum3));
				$(".contentStart").append('<input type="text" id="monthPicker" name="monthPicker" />');
				$("#monthPicker").monthpicker({
					pattern: "yyyy-mm",
					monthNames: ["01월", "02월", "03월", "04월", "05월", "06월", "07월", "08월", "09월", "10월", "11월", "12월"],
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

	const userSeq = props.location.state.userSeq;

	const [inputs, setInputs] = React.useState({
		carrierNm: "-",
		workGroupNm: "-",
		workType: "-",
		carrierCalcStatus: "-",
		carrierCalcEndDate: "-",
		platformCalcStatus: "-",
		carrierPayment: "-",
		platformPayment: "-",
	});

	const {
		carrierNm,
		workGroupNm,
		workType,
		carrierCalcStatus,
		carrierCalcEndDate,
		platformCalcStatus,
		carrierPayment,
		platformPayment,
	} = inputs;

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

	// 더미 데이터 세팅 ----------------------------------------------------------
	const array = [
		{
			truckOwnerNm: "김차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "100,000",
			totalPayment: "7,000,000",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "김차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "100,000",
			totalPayment: "7,000,000",
			shippingChargeMonth: "2020-09",
		},
		{
			truckOwnerNm: "양차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "100,000",
			totalPayment: "7,000,000",
			shippingChargeMonth: "2020-09",
		},
		{
			truckOwnerNm: "서차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "100,000",
			totalPayment: "7,000,000",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "최차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "100,000",
			totalPayment: "7,000,000",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "유차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "100,000",
			totalPayment: "7,000,000",
			shippingChargeMonth: "2020-07",
		},
	];
	//--------------------------------------------

	const listArrayData = [
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "TS1",
			workType: "고정",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/08/03",
			platformCalcStatus: "진행중",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "TS2",
			workType: "단기",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/08/04",
			platformCalcStatus: "진행중",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "TS3",
			workType: "고정",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/08/09",
			platformCalcStatus: "완료",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "LF1",
			workType: "단기",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/08/22",
			platformCalcStatus: "진행중",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
		},
		{
			carrierNm: "(주)팀프레시",
			workGroupNm: "LF2",
			workType: "단기",
			carrierCalcStatus: "완료",
			carrierCalcEndDate: "2020/08/28",
			platformCalcStatus: "완료",
			carrierPayment: "420,000,000",
			platformPayment: "420,000,000",
		},
	];

	// 더미 데이터 세팅
	const setData = React.useCallback((userSeq) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			carrierNm: listArrayData[userSeq].carrierNm,
			workGroupNm: listArrayData[userSeq].workGroupNm,
			workType: listArrayData[userSeq].workType,
			carrierCalcStatus: listArrayData[userSeq].carrierCalcStatus,
			carrierCalcEndDate: listArrayData[userSeq].carrierCalcEndDate,
			platformCalcStatus: listArrayData[userSeq].platformCalcStatus,
			carrierPayment: listArrayData[userSeq].carrierPayment,
			platformPayment: listArrayData[userSeq].platformPayment,
		}));
	}, []);

	// 달력 검색 로직
	registerLocale("ko", ko);
	const [searchMonth, setSearchMonth] = React.useState(null);
	React.useEffect(() => {
		const dummyTable = $("#TransportDetailTbl").DataTable();
		if (searchMonth !== null) {
			dummyTable.columns(7).search(Calc.getMonthStr(searchMonth)).draw();
		} else {
			dummyTable.columns(7).search("").draw();
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
								<span>팀프레시 운송료 내역</span>
							</h1>
						</div>
					</div>
				</div>

				<div className="container-fluid mt-n10">
					<div className="card mb-4">
						<div className="card-body">
							<table className="table col-12">
								<tbody className="col-12">
									<tr>
										<td>운송그룹</td>
										<td>업무형태</td>
										<td>정산마감 일시</td>
										<td>운송사 정산상태</td>
										<td>플랫폼 정산상태</td>
									</tr>
									<tr>
										<td>
											{" "}
											<span id="workGroupNm">
												<b>{workGroupNm}</b>
											</span>
										</td>
										<td>
											{" "}
											<span id="workType">
												<b>{workType}</b>
											</span>
										</td>
										<td>
											{" "}
											<span id="carrierCalcEndDate">
												<b>{carrierCalcEndDate}</b>
											</span>
										</td>
										<td>
											{" "}
											<span id="carrierCalcStatus">
												<b>{carrierCalcStatus}</b>
											</span>
										</td>
										<td>
											{" "}
											<span id="platformCalcStatus">
												<b>{platformCalcStatus}</b>
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="card-header row">
							<div className="col-4 d-flex justify-content-start">
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
						</div>
						<div className="card-body">
							<div className="datatable table-responsive">
								<table
									id="TransportDetailTbl"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
								>
									<thead>
										<tr>
											<th>no.</th>
											<th>차주명</th>
											<th>차주코드</th>
											<th>운송카드코드</th>
											<th>지급 운송료</th>
											<th>운송 상품 사용 내역</th>
											<th>최종 지출 금액</th>
											<th>정산월(히든)</th>
										</tr>
										<tr>
											<td>합계</td>
											<td></td>
											<td></td>
											<td></td>
											<td id="sum1"></td>
											<td id="sum2"></td>
											<td id="sum3"></td>
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
export default TransportDetail;
