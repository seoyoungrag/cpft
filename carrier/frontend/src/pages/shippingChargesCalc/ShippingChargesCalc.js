import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as dl from "util/DataTableLang";
import * as Calc from "util/Calc";
import { authContext } from "context/AuthContext";

function ShippingChargesCalc(props) {
	const ac = React.useContext(authContext);
	console.log(ac.authState);
	React.useEffect(() => {
		const dummyTable = $("#shippingChargesCalcListTbl").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: dummyArray,
			dom:
				"<'row'<'col-3 d-flex justify-content-start SCC_start'><'col-6 d-flex justify-content-center SCC_center'><'col-3 d-flex justify-content-end SCC_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: "carrierGroup" },
				{ data: "workType" },
				{ data: "calcStatus" },
				{ data: "calcCompleteDate" },
				{ data: "calcSum" },
				{ data: "shippingChargesMonth" },
			],
			columnDefs: [
				{
					defaultContent: "-",
					targets: "_all",
				},
				{
					targets: 5,
					visible: false,
				},
			],
			order: [[0, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				$("#shippingChargesCalcListTbl tbody tr").on("click", function () {
					const carrierGroup = $(this).attr("id");
					const url = "/shippingChargesCalc/detail";
					props.history.push(url, { carrierGroup: carrierGroup });
				});

				$("#shippingChargesCalcListTbl tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				$(".SCC_start").append('<input type="text" id="month" class="form-control datepicker col-4" placeholder="2020-00"/>');
				$(".SCC_start").append('<button class="btn btn-primary" id="resetMonth">초기화</button>');

				$("#month").monthpicker({
					pattern: "yyyy-mm",
					monthNames: ["01월", "02월", "03월", "04월", "05월", "06월", "07월", "08월", "09월", "10월", "11월", "12월"],
				});

				$("#resetMonth").on("click", function () {
					$("#month").datepicker("setDate", "");
				});

				$("#month").on("change", function () {
					const searchMonth = $(this).val();
					if (searchMonth !== "") {
						dummyTable.columns(5).search(searchMonth).draw();
					} else {
						dummyTable.columns(5).search("").draw();
					}
				});

				const calcSum = this.api().column(4).data().sum();
				$("#calcSum").html(Calc.regexWON(calcSum));
			},
		});
		return () => {
			dummyTable.destroy(true);
		};
	}, []);

	const dummyArray = [
		{
			carrierGroup: "TS고정",
			workType: "고정",
			calcStatus: "완료",
			calcCompleteDate: "2020/09/10",
			calcSum: "420,000,000",
			shippingChargesMonth: "2020-08",
		},
		{
			carrierGroup: "LF고정",
			workType: "고정",
			calcStatus: "진행중",
			calcCompleteDate: "",
			calcSum: "",
			shippingChargesMonth: "2020-09",
		},
		{
			carrierGroup: "TS고정",
			workType: "고정",
			calcStatus: "완료",
			calcCompleteDate: "2020/09/15",
			calcSum: "120,000,000",
			shippingChargesMonth: "2020-09",
		},
	];

	return (
		<React.Fragment>
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
									<span>운송료 정산</span>
								</h1>
								<div className="page-header-subtitle"></div>
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
										id="shippingChargesCalcListTbl"
										className="table table-bordered table-hover"
										width="100%"
										cellSpacing="0"
										role="grid"
										aria-describedby="dataTable_info"
										style={{ textAlign: "center" }}
									>
										<thead>
											<tr>
												<th>운송 그룹</th>
												<th>업무 형태</th>
												<th>정산 상태</th>
												<th>정산 완료일</th>
												<th>총 정산액</th>
												<th>정산월(히든)</th>
											</tr>
											<tr>
												<th>합계</th>
												<th></th>
												<th></th>
												<th></th>
												<th id="calcSum"></th>
												<th></th>
											</tr>
										</thead>
									</table>
								</div>
							</div>
						</div>
					</div>
				</main>
			</MainStructure>
		</React.Fragment>
	);
}

export default ShippingChargesCalc;
