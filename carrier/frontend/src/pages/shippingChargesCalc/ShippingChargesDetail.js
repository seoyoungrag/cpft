import React from "react";
import MainStructure from "components/structure/MainStructure";
import xlsx from "xlsx";
import * as dl from "util/DataTableLang";
import * as Calc from "util/Calc";

function ShippingChargesDetail(props) {
	React.useEffect(() => {
		const dummyTable = $("#shippingChargesExcelTbl").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: null,
			columns: [
				{ data: "운송 그룹" },
				{ data: "운송카드 코드" },
				{ data: "담당자" },
				{ data: "차주코드" },
				{ data: "차주명" },
				{ data: "정산상태값" },
				{ data: "일반/간이 여부" },
				{
					data: "계약운송료",
					render: function (data, type, row) {
						return Calc.regexWON(data);
					},
				},
				{
					data: "총 운송료",
					render: function (data, type, row) {
						return Calc.regexWON(data);
					},
				},
			],
			columnDefs: [
				{
					defaultContent: "-",
					targets: "_all",
				},
			],
			dom:
				"<'row'<'col-3 d-flex justify-content-start SCC_start'><'col-6 d-flex justify-content-center SCC_center'><'col-3 d-flex justify-content-end SCC_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
		});
		return () => {
			dummyTable.destroy(true);
		};
	}, []);

	const excelConvertArray = (e) => {
		let input = e.target;
		let reader = new FileReader();
		reader.onload = () => {
			let fileData = reader.result;
			let wb = xlsx.read(fileData, { type: "binary" });
			wb.SheetNames.forEach(function (sheetName) {
				let rowObj = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], {
					// header: [
					// 	"carrierGroup",
					// 	"carrierCardCode",
					// 	"manager",
					// 	"truckOwnerCode",
					// 	"truckOwnerName",
					// 	"calcStatus",
					// 	"userType",
					// 	"contractCharges",
					// 	"sumCharges",
					// ],
				});
				$("#shippingChargesExcelTbl").dataTable().fnClearTable();
				for (let i = 0; i < rowObj.length; i++) {
					$("#shippingChargesExcelTbl").dataTable().fnAddData(rowObj[i]);
				}
				const sum1 = $("#shippingChargesExcelTbl").DataTable().column(7).data().sum();
				const sum2 = $("#shippingChargesExcelTbl").DataTable().column(8).data().sum();
				$("#calcSum1").html(Calc.regexWON(sum1));
				$("#calcSum2").html(Calc.regexWON(sum2));
			});
		};
		reader.readAsBinaryString(input.files[0]);
	};

	console.log(props.location.state.carrierGroup);

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
								<div className="carrierInfoArea" style={{ overflow: "hidden" }}>
									<div style={{ width: "20%", float: "left" }}>
										<h1>
											<b>팀프레시</b>
										</h1>
									</div>
									<div style={{ width: "10%", float: "left" }}>
										<h6 style={{ textAlign: "center" }}>운송그룹</h6>
										<h4 style={{ textAlign: "center" }}>TS 고정</h4>
									</div>
									<div style={{ width: "10%", float: "left" }}>
										<h6 style={{ textAlign: "center" }}>업무형태</h6>
										<h4 style={{ textAlign: "center" }}>고정</h4>
									</div>
									<div style={{ width: "10%", float: "left" }}>
										<h6 style={{ textAlign: "center" }}>운송사 정산상태</h6>
										<h4 style={{ textAlign: "center" }}>진행중</h4>
									</div>
									<div style={{ width: "10%", float: "left" }}>
										<h6 style={{ textAlign: "center" }}>정산마감 일시</h6>
										<h4 style={{ textAlign: "center" }}>(공란)</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<div className="container-fluid mt-n10">
						<div className="card mb-4">
							<div className="card-header row">
								<div className="col-3 d-flex justify-content-start"></div>
								<div className="col-6 d-flex justify-content-center"></div>
								<div className="col-3 d-flex justify-content-end"></div>
							</div>
							<div className="card-body">
								<div className="d-flex justify-content-start">
									<label htmlFor="excel" className="col-form-label mr-3" style={{ fontWeight: "normal" }}>
										운송료 엑셀 파일
									</label>
									<div className="flex-grow-1">
										<input className="form-control" type="file" id="excel" name="excel" onChange={excelConvertArray} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
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
										id="shippingChargesExcelTbl"
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
												<th>운송카드 코드</th>
												<th>담당자</th>
												<th>차주코드</th>
												<th>차주명</th>
												<th>정산산태값</th>
												<th>일반/간이 여부</th>
												<th>계약운송료</th>
												<th>총 운송료</th>
											</tr>
											<tr>
												<th>합계</th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th></th>
												<th id="calcSum1"></th>
												<th id="calcSum2"></th>
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

export default ShippingChargesDetail;
