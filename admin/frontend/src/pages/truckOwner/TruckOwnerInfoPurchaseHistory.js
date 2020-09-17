import React from "react";
import * as dl from "util/DataTableLang";

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
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start TOP_start'><'col-6 d-flex justify-content-center TOP_center'><'col-3 d-flex justify-content-end TOP_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "구매상품 종류", data: "purchaseKindOf" },
				{ title: "구매일", data: "purchaseDate" },
				{ title: "판매코드", data: "sellCode" },
				{ title: "구매금액", data: "price" },
				{ title: "지불금액", data: "pay" },
				{ title: "미수금액", data: "notReceived" },
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
				// 카테고리 추가
				const column = this.api().column(1);
				const select = $("<select class='form-control col-6'><option value=''>전체</option></select>")
					.appendTo(".TOP_start")
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

				// 달력 추가
				$(".TOP_end").append(
					'<input type="text" id="fromDateA" class="form-control datepicker col-4" placeholder="2020-00-00" />' +
						'<label class="col-form-label ml-3 mr-3">~</label>' +
						'<input type="text" id="toDateA" class="form-control datepicker col-4" placeholder="2020-12-31" />'
				);

				// 달력 초기화
				$(".TOP_end").append('<button class="btn btn-primary" id="resetCalendarA">초기화</button>');

				// datepicker
				$("#fromDateA, #toDateA").datepicker();

				// 초기화 버튼
				$("#resetCalendarA").on("click", function () {
					$("#fromDateA").datepicker("setDate", "");
					$("#toDateA").datepicker("setDate", "");
				});

				// 달력 자동검색
				$("#fromDateA, #toDateA").on("change", function () {
					dummyTable.draw();
				});

				// 달력 자동검색 옵션
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

		// 컴포넌트 언마운트
		return () => {
			$.fn.dataTable.ext.search.pop();
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
			{/* <div className="card-header row">
				<div className="col-3 d-flex justify-content-start"></div>
				<div className="col-6 d-flex justify-content-center"></div>
				<div className="col-3 d-flex justify-content-end"></div>
			</div> */}
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
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoPurchaseHistory);
