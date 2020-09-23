import React from "react";
import * as dl from "util/DataTableLang";

function TruckOwnerInfoCalculateHistory(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// DataTables
		// $("#calculateHistoryList").DataTable({
		//     serverSide: false,
		//     processing: true,
		//     responsive: true,
		//     autoWidth: false,
		//     width: "100%",
		//     ordering: false,
		//     select: false,
		//     dom:
		//         "<'row'<'col-sm-12'rt>>" +
		//         "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
		//     ajax: {
		//         url: "/v1/truckOwner/truckOwnerInfoList",
		//         type: "GET",
		//         data: { length: 100 },
		//         dataSrc: function (res) {
		//             var data = res.data;
		//             return data;
		//         }
		//     },
		//     columnDefs: [
		//         {
		//             defaultContent: "-",
		//             targets: "_all",
		//         },
		//         {
		//             targets: [0],
		//             createdCell: function (td, cellData, rowData, row, col) {
		//                 $(td).text(row + 1);
		//             }
		//         }
		//     ],
		//     columns: [
		//         { title: "no.", data: null },
		//         { title: "운송사", data: "carrierNm" },
		//         { title: "정산코드", data: "userNm" },
		//         { title: "업무형태", data: null },
		//         { title: "운송사 정산일", data: null },
		//         { title: "운송사정산 금액", data: "crqfcs.2" },
		//         { title: "플랫폼 지불금액", data: "crqfcs.1" },
		//         { title: "정산상태", data: "crqfcs.0" },
		//     ],
		//     createdRow: function (row, data) {
		//         $(row).attr("id", data.userSeq);
		//     }
		// });

		// 더미 테이블
		const dummyTable = $("#calculateHistoryList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start TOCH_start'><'col-6 d-flex justify-content-center TOCH_center'><'col-3 d-flex justify-content-end TOCH_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "운송사", data: "companyName" },
				{ title: "정산코드", data: "calculateCode" },
				{ title: "업무형태", data: "workKindOf" },
				{ title: "운송사 정산일", data: "carrierCalculateDate" },
				{ title: "운송사정산 금액", data: "carrierCalculatePrice" },
				{ title: "플랫폼 지불금액", data: "platformPay" },
				{ title: "정산상태", data: "calculateStatus" },
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
			initComplete: function () {
				// 달력 추가
				$(".TOCH_end").append(
					'<input class="form-control datepicker col-4" id="fromDateB" type="text" placeholder="2020-00-00" />' +
						'<label class="col-form-label ml-3 mr-3">~</label>' +
						'<input class="form-control datepicker col-4" id="toDateB" type="text" placeholder="2020-12-31" />'
				);

				// 달력 초기화
				$(".TOCH_end").append('<button class="btn btn-primary" id="resetCalendarB">초기화</button>');

				// 초기화 동작
				$("#resetCalendarB").on("click", function () {
					$("#fromDateB").datepicker("setDate", "");
					$("#toDateB").datepicker("setDate", "");
				});

				// datepicker
				$("#fromDateB, #toDateB").datepicker();

				// 달력 검색
				$("#fromDateB, #toDateB").on("change", function () {
					dummyTable.draw();
				});

				// 달력 검색 추가
				$.fn.dataTable.ext.search.push(function (settings, data, dataInex) {
					if (settings.nTable.id !== "calculateHistoryList") return true;

					const from = $("#fromDateB").datepicker("getDate");
					const to = $("#toDateB").datepicker("getDate");
					const carrierCalculateDate = new Date(data[4]);

					if (from === null && to === null) return true;
					if (from === null && carrierCalculateDate <= to) return true;
					if (to === null && carrierCalculateDate >= from) return true;
					if (carrierCalculateDate <= to && carrierCalculateDate >= from) return true;
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

	// 더미 데이터 --------------------------------------------------------------------------
	const array = [
		{
			companyName: "팀프레시",
			calculateCode: "JS0001",
			workKindOf: "고정",
			carrierCalculateDate: "2020/08/31",
			carrierCalculatePrice: "1,000,000원",
			platformPay: "1,000,000원",
			calculateStatus: "지불 완료",
		},
		{
			companyName: "팀프레시",
			calculateCode: "JS0521",
			workKindOf: "단기",
			carrierCalculateDate: "2020/09/01",
			carrierCalculatePrice: "2,000,000원",
			platformPay: "2,000,000원",
			calculateStatus: "지불 완료",
		},
		{
			companyName: "팀프레시",
			calculateCode: "JS0601",
			workKindOf: "고정",
			carrierCalculateDate: "2020/09/12",
			carrierCalculatePrice: "2,050,000원",
			platformPay: "2,050,000원",
			calculateStatus: "지불 완료",
		},
	];
	// ----------------------------------------------------------------------------------

	return (
		<React.Fragment>
			{/* <div className="card-header row">
				<div className="col-3 d-flex justify-content-start"></div>
				<div className="col-6 d-flex justify-content-center"></div>
				<div className="col-3 d-flex justify-content-end"></div>
			</div> */}
			<div className="form-row my-2 mb-3">
				<div className="datatable table-responsive">
					<table
						id="calculateHistoryList"
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

export default React.memo(TruckOwnerInfoCalculateHistory);
