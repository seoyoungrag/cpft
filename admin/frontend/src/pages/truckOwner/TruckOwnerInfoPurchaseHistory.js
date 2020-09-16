import React from "react";

function TruckOwnerInfoPurchaseHistory(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// DataTables
		// $("#purchaseHistoryList").DataTable({
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
		//         { title: "구매상품 종류", data: "carrierNm" },
		//         { title: "구매일", data: "userNm" },
		//         { title: "판매코드", data: null },
		//         { title: "구매금액", data: null },
		//         { title: "지불금액", data: "crqfcs.2" },
		//         { title: "미수금액", data: "crqfcs.1" },
		//     ],
		//     createdRow: function (row, data) {
		//         $(row).attr("id", data.userSeq);
		//     }
		// });

		// 더미 테이블
		const dummyTable = $("#purchaseHistoryList").DataTable({
			data: array,
			columns: [
				{ data: null },
				{ data: "purchaseKindOf" },
				{ data: "purchaseDate" },
				{ data: "sellCode" },
				{ data: "price" },
				{ data: "pay" },
				{ data: "notReceived" },
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
			order: [[2, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function () {
				const column = this.api().column(1);
				const select = $("<select><option value=''>전체</option></select>")
					.appendTo("#searchTab")
					.on("change", function () {
						const val = $(this).val();
						column.search(val ? "^" + $(this).val() + "$" : val, true, false).draw();
					});
				column
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select.append("<option>" + data + "</option>");
					});

				$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
					if (settings.nTable.id !== "purchaseHistoryList") return true;

					const from = $("#fromDateA").datepicker("getDate");
					const to = $("#toDateA").datepicker("getDate");
					const carrierCalculateDate = new Date(data[2]);

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

		$("#fromDateA, #toDateA").datepicker();

		$("#fromDateA, #toDateA").change(function () {
			dummyTable.draw();
		});

		// 컴포넌트 언마운트
		return () => {
			dummyTable.destroy(true);
		};
	}, []);

	// inputs값 세팅
	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// 더미 데이터 -----------------------------------------------------------------
	const array = [
		{
			purchaseKindOf: "세금계산서 발급",
			purchaseDate: "2020/08/31",
			sellCode: "XR000001",
			price: "90,000원",
			pay: "90,000원",
			notReceived: "0원",
		},
		{
			purchaseKindOf: "세금계산서 발급",
			purchaseDate: "2020/09/05",
			sellCode: "XR000001",
			price: "90,000원",
			pay: "90,000원",
			notReceived: "0원",
		},
		{
			purchaseKindOf: "세금계산서 발급",
			purchaseDate: "2020/09/07",
			sellCode: "XR000001",
			price: "90,000원",
			pay: "90,000원",
			notReceived: "0원",
		},
		{
			purchaseKindOf: "매칭수수료",
			purchaseDate: "2020/09/12",
			sellCode: "XR000001",
			price: "90,000원",
			pay: "90,000원",
			notReceived: "0원",
		},
		{
			purchaseKindOf: "매칭수수료",
			purchaseDate: "2020/09/17",
			sellCode: "XR000001",
			price: "90,000원",
			pay: "90,000원",
			notReceived: "0원",
		},
	];
	// -------------------------------------------------------------------------------

	return (
		<React.Fragment>
			<div className="card-header row">
				<div className="col-12 row mt-3">
					<div className="col-3">
						<div className="d-flex justify-content-start" id="searchTab"></div>
					</div>
					<div className="col-5 d-flex justify-content-center"></div>
					<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto">
						<input
							className="form-control datepicker col-3"
							id="fromDateA"
							name="fromDateA"
							type="text"
							placeholder="2020-01-01"
						/>
						<label className="col-form-label ml-3 mr-3">~</label>
						<input className="form-control datepicker col-3" id="toDateA" name="toDateA" type="text" placeholder="2020-12-31" />
					</div>
				</div>
			</div>
			<div className="form-row my-2 mb-3">
				<div className="datatable table-responsive">
					<table
						id="purchaseHistoryList"
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
								<th>구매상품 종류</th>
								<th>구매일</th>
								<th>판매코드</th>
								<th>구매금액</th>
								<th>지불금액</th>
								<th>미수금액</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoPurchaseHistory);
