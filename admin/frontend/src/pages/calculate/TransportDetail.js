import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as Calc from "util/Calc";
import * as dl from "util/DataTableLang";

function TransportDetail(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		setData(userSeq - 1);

		const dummyTable = $("#TransportDetailTbl").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start TPD_start'><'col-6 d-flex justify-content-center TPD_center'><'col-3 d-flex justify-content-end TPD_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: null },
				{ data: "truckOwnerNm" },
				{ data: "truckOwnerCode" },
				{ data: "transportCode" },
				{ data: "shippingCharge" },
				{ data: "shippingServiceCharge" },
				{ data: "totalPayment" },
				{ data: "shippingChargesMonth" },
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
				// 합계
				const sum1 = this.api().column(4).data().sum();
				const sum2 = this.api().column(5).data().sum();
				const sum3 = this.api().column(6).data().sum();
				$("#sum1").html(Calc.regexWON(sum1));
				$("#sum2").html(Calc.regexWON(sum2));
				$("#sum3").html(Calc.regexWON(sum3));

				// 달력 추가
				$(".TPD_start").append('<input type="text" id="month" class="form-control datepicker col-4" placeholder="2020-00"/>');
				$(".TPD_start").append('<button class="btn btn-primary" id="resetMonth">초기화</button>');

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
						dummyTable.columns(7).search(searchMonth).draw();
					} else {
						dummyTable.columns(7).search("").draw();
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

	// 더미 데이터 세팅 ----------------------------------------------------------
	const array = [
		{
			truckOwnerNm: "김차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "50,000",
			totalPayment: "2,950,000",
			shippingChargesMonth: "2020-08",
		},
		{
			truckOwnerNm: "김차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "50,000",
			totalPayment: "2,950,000",
			shippingChargesMonth: "2020-09",
		},
		{
			truckOwnerNm: "양차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "50,000",
			totalPayment: "2,950,000",
			shippingChargesMonth: "2020-09",
		},
		{
			truckOwnerNm: "서차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "50,000",
			totalPayment: "2,950,000",
			shippingChargesMonth: "2020-08",
		},
		{
			truckOwnerNm: "최차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "50,000",
			totalPayment: "2,950,000",
			shippingChargesMonth: "2020-08",
		},
		{
			truckOwnerNm: "유차주",
			truckOwnerCode: "N0002643",
			transportCode: "W00001",
			shippingCharge: "3,000,000",
			shippingServiceCharge: "50,000",
			totalPayment: "2,950,000",
			shippingChargesMonth: "2020-07",
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
						<div className="card-header row">
							<div className="col-3 d-flex justify-content-start"></div>
							<div className="col-6 d-flex justify-content-center"></div>
							<div className="col-3 d-flex justify-content-end"></div>
						</div>
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
						<div className="card-body">
							<div className="datatable table-responsive">
								<table
									id="TransportDetailTbl"
									className="table table-bordered table-hover"
									width="100%"
									cellSpacing="0"
									role="grid"
									aria-describedby="dataTable_info"
									style={{ textAlign: "center" }}
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
