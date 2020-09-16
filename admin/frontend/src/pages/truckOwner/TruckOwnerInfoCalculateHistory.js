import React from "react";

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
			data: array,
			columns: [
				{ data: null },
				{ data: "companyName" },
				{ data: "calculateCode" },
				{ data: "workKindOf" },
				{ data: "carrierCalculateDate" },
				{ data: "carrierCalculatePrice" },
				{ data: "platformPay" },
				{ data: "calculateStatus" },
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
				// 검색 옵션(filter)를 추가로 만들고 싶을때 아래와 같은 유형으로 설정 (아래는 달력 검색 기능 추가)
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

		// 날짜 기능
		$("#fromDateB, #toDateB").datepicker();

		// 날짜가 바뀌면 table을 다시 그린다
		$("#fromDateB, #toDateB").change(function () {
			dummyTable.draw();
		});

		// 컴포넌트 언마운트
		return () => {
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
			<div className="card-header row">
				<div className="col-12 row mt-3">
					<div className="col-3"></div>
					<div className="col-5 d-flex justify-content-center"></div>
					<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto">
						<input
							className="form-control datepicker col-3"
							id="fromDateB"
							name="fromDateB"
							type="text"
							placeholder="2020-01-01"
						/>
						<label className="col-form-label ml-3 mr-3">~</label>
						<input className="form-control datepicker col-3" id="toDateB" name="toDateB" type="text" placeholder="2020-12-31" />
					</div>
				</div>
			</div>
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
					>
						<thead>
							<tr>
								<th>no.</th>
								<th>운송사</th>
								<th>정산코드</th>
								<th>업무형태</th>
								<th>운송사 정산일</th>
								<th>운송사정산 금액</th>
								<th>플랫폼 지불금액</th>
								<th>정산상태</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoCalculateHistory);
