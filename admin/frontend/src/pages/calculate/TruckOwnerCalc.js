import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as Calc from "util/Calc";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";

function TruckOwnerCalc(props) {
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
		const dummyTable = $("#TruckOwnerCalcTbl").DataTable({
			//language: DataTable_language,
			// dom:
			// 	"<'row'<'col-sm-12 col-md-3 contentStart'><'col-sm-12 col-md-6' contentCenter><'col-sm-12 col-md-3 contentEnd'f>>" +
			// 	"<'row'<'col-sm-12'rt>>" +
			// 	"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			data: array,
			columns: [
				{ data: null, width: "5%" },
				{ data: "truckOwnerNm", width: "15%" },
				{ data: "truckOwnerCode", width: "15%" },
				{ data: "taxBillYn", width: "15%" },
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
					targets: 5,
					visible: false,
				},
			],
			order: [[1, "asc"]],
			createdRow: function (row, data) {
				$(row).attr("id", data.userSeq);
			},

			initComplete: function (settings, json) {
				// 리스트 클릭 시 페이지 이동
				//	            $("#TruckOwnerCalcTbl tbody tr").on("click", function() {
				//	                const userSeq = $(this).attr("id");
				//	                const url = "/calculate/TruckOwnerCalcDetail";
				//	                props.history.push(url, { userSeq: userSeq });
				//	            });
				// 리스트 마우스 hover시 포인터 모양 변경
				//	            $("#TruckOwnerCalcTbl tbody tr").on("mouseenter", function() {
				//	                $(this).css("cursor", "pointer");
				//	            });

				$("#searchVal").on("keyup", function () {
					const searchVal = $(this).val();
					const searchOption = $("#searchOption").val();
					if (searchOption !== "") {
						dummyTable.columns(searchOption).search(searchVal).draw();
					} else {
						dummyTable.search(searchVal).draw();
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
			$("#searchOption").off();
		};
	}, []);

	// 더미 데이터 ---------------------------------------------------------------------
	const array = [
		{
			truckOwnerNm: "김차주",
			truckOwnerCode: "N0002643",
			taxBillYn: "100",
			totalPayment: "100",
			shippingChargeMonth: "2020-07",
		},
		{
			truckOwnerNm: "유아름",
			truckOwnerCode: "N0002644",
			taxBillYn: "900",
			totalPayment: "900",
			shippingChargeMonth: "2020-07",
		},
		{
			truckOwnerNm: "김재하",
			truckOwnerCode: "N0002645",
			taxBillYn: "800",
			totalPayment: "800",
			shippingChargeMonth: "2020-07",
		},
		{
			truckOwnerNm: "양민규",
			truckOwnerCode: "N0002646",
			taxBillYn: "700",
			totalPayment: "700",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "서영락",
			truckOwnerCode: "N0002647",
			taxBillYn: "1000",
			totalPayment: "1000",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "최수정",
			truckOwnerCode: "N0002648",
			taxBillYn: "500",
			totalPayment: "500",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "유차주",
			truckOwnerCode: "N0002649",
			taxBillYn: "400",
			totalPayment: "400",
			shippingChargeMonth: "2020-08",
		},
		{
			truckOwnerNm: "양차주",
			truckOwnerCode: "N0002650",
			taxBillYn: "200",
			totalPayment: "200",
			shippingChargeMonth: "2020-09",
		},
		{
			truckOwnerNm: "서차주",
			truckOwnerCode: "N0002651",
			taxBillYn: "1000",
			totalPayment: "1000",
			shippingChargeMonth: "2020-09",
		},
	];
	//--------------------------------------------

	// 달력 검색 로직
	registerLocale("ko", ko);
	const [searchMonth, setSearchMonth] = React.useState(null);
	React.useEffect(() => {
		const dummyTable = $("#TruckOwnerCalcTbl").DataTable();
		if (searchMonth !== null) {
			dummyTable.columns(5).search(Calc.getMonthStr(searchMonth)).draw();
		} else {
			dummyTable.columns(5).search("").draw();
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
								<span>차주 정산</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="container-fluid mt-n10">
					<div className="card mb-4">
						<div className="card-header row">
							<div className="col-3 d-flex justify-content-start">
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
							<div className="col-5 d-flex justify-content-center">
								<select id="searchOption" name="searchOption">
									<option value="">전체</option>
									<option value="1">차주명</option>
									<option value="2">차주코드</option>
								</select>
								<input type="text" id="searchVal" name="searchVal" />
							</div>
						</div>
						<div className="card-body">
							<div className="datatable table-responsive">
								<table
									id="TruckOwnerCalcTbl"
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
											<th>세금계산서 발행</th>
											<th>총판매금액</th>
											<th>정산월(히든)</th>
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
export default TruckOwnerCalc;
