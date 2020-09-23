import React from "react";
import * as dl from "util/DataTableLang";

function TruckOwnerInfoTransferHistory(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// DataTables - 고정
		// $("#fixedTransferList").DataTable({
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
		//         { title: "운송사", data: "팀프레시" },
		//         { title: "계약일", data: "2020/08/13" },
		//         { title: "계약종료일", data: "2020/09/30" },
		//         { title: "운송상태", data: "근무중" }
		//     ],
		//     createdRow: function (row, data) {
		//         $(row).attr("id", data.userSeq);
		//     }
		// });

		// DataTables - 단기
		// $("#shortTermTransferList").DataTable({
		//     serverSide: false,
		//     processing: true,
		//     responsice: true,
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
		//         { data: null },
		//         { data: "팀프레시", name: "rowSpan"},
		//         { data: "userNm" },
		//         { data: null },
		//         { data: null },
		//         { data: "crqfcs.2" },
		//         { data: null },
		//         { data: null }
		//     ],
		//     createdRow: function (row, data) {
		//         $(row).attr("id", data.userSeq);
		//     },
		// });

		// 더미 고정 테이블
		const dummyFixedTable = $("#fixedTransferList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: fixedArray,
			dom:
				"<'row'<'col-3 d-flex justify contentStart'><'col-5 d-flex justify contentCenter'><'col-4 d-flex justify contentEnd'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "운송사", data: "companyName" },
				{ title: "계약일", data: "contractDate" },
				{ title: "계약종료일", data: "contractEndData" },
				{ title: "운송상태", data: "deliveryStatus" },
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
		});

		// 더미 단기 테이블
		const dummyShortTermTable = $("#shortTermTransferList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: shortTermArray,
			dom:
				"<'row'<'col-3 d-flex justify contentStart'><'col-5 d-flex justify contentCenter'><'col-4 d-flex justify contentEnd'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: null },
				{ data: "companyName" },
				{ data: "matchDate" },
				{ data: "pickupDate" },
				{ data: "startPoint" },
				{ data: "deliveryDate" },
				{ data: "endPoint" },
				{ data: "deliveryStatus" },
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
		});

		// rownum
		dummyFixedTable
			.on("order.dt search.dt", function () {
				dummyFixedTable
					.column(0, { search: "applied", order: "applied" })
					.nodes()
					.each(function (cell, i) {
						cell.innerHTML = i + 1;
					});
			})
			.draw();

		// rownum
		dummyShortTermTable
			.on("order.dt search.dt", function () {
				dummyShortTermTable
					.column(0, { search: "applied", order: "applied" })
					.nodes()
					.each(function (cell, i) {
						cell.innerHTML = i + 1;
					});
			})
			.draw();

		// 컴포넌트 언마운트
		return () => {
			dummyFixedTable.destroy(true);
			dummyShortTermTable.destroy(true);
		};
	}, []);

	// TruckOwnerCommon에서 받아옴
	const userSeq = props.userSeq;

	// 데이터 조회
	// const getData = async () => {
	//     setIsLoading(true);
	//     // var userSeq = props.location.state.userSeq;
	//     var userSeq = props.userSeq;
	//     var url = "/v1/truckOwner/truckOwnerInfoDetail/";
	//     var data = null;
	//     await axios.get(url + userSeq)
	//         .then(res => {
	//             data = res.data.data;
	//             setInputs((state) => ({
	//                 ...inputs,
	//                 userName: data.userNm,
	//                 phoneNumber: data.truckOwner.phone
	//             }));
	//         })
	//         .catch(res => {
	//             alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
	//         });
	//     setIsLoading(false);
	// };

	// 더미 데이터 -----------------------------------------------------------------
	const fixedArray = [
		{
			companyName: "팀프레시",
			contractDate: "2020/08/13",
			contractEndData: "2020/08/15",
			deliveryStatus: "계약종료",
		},
		{
			companyName: "팀프레시",
			contractDate: "2020/08/17",
			contractEndData: "-",
			deliveryStatus: "근무중",
		},
	];

	const shortTermArray = [
		{
			companyName: "팀프레시",
			matchDate: "2020/08/13",
			pickupDate: "2020/08/13",
			startPoint: "하남센터",
			deliveryDate: "2020/08/13",
			endPoint: "한마을빌딩",
			deliveryStatus: "이동중",
		},
		{
			companyName: "팀프레시",
			matchDate: "2020/08/18",
			pickupDate: "2020/08/19",
			startPoint: "일산센터",
			deliveryDate: "2020/08/19",
			endPoint: "63빌딩",
			deliveryStatus: "운송종료",
		},
	];
	// ------------------------------------------------------------------------------

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="transferHistoryArea" style={{ width: "100%" }}>
					<h4>
						<b>운송내역</b>
					</h4>
					<div className="card-header card-header-tabs card-header-primary pb-0">
						<div className="nav-tabs-navigation">
							<div className="nav-tabs-wrapper">
								<ul className="nav nav-tabs" data-tabs="tabs">
									<li className="nav-item">
										<a className="nav-link d-flex align-items-center" href="#fixed" data-toggle="tab">
											<span className="sm-display-none">고정</span>
											<div className="ripple-container"></div>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link d-flex align-items-center" href="#shortTerm" data-toggle="tab">
											<span className="sm-display-none">단기</span>
											<div className="ripple-container"></div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="card-body">
						<div className="tab-content">
							<div className="tab-pane col-12" id="fixed">
								<div className="form-row my-2 mb-3">
									<div className="datatable table-responsive">
										<table
											id="fixedTransferList"
											className="table table-bordered table-hover"
											width="100%"
											cellSpacing="0"
											role="grid"
											aria-describedby="dataTable_info"
											style={{ textAlign: "center" }}
										/>
									</div>
								</div>
							</div>
							<div className="tab-pane col-12" id="shortTerm">
								<div className="form-row my-2 mb-3">
									<div className="datatable table-responsive">
										<table
											id="shortTermTransferList"
											className="table table-bordered table-hover"
											width="100%"
											cellSpacing="0"
											role="grid"
											aria-describedby="dataTable_info"
											style={{ textAlign: "center" }}
										>
											<thead>
												<tr>
													<th rowSpan="2" style={{ verticalAlign: "middle" }}>
														no.
													</th>
													<th rowSpan="2" style={{ verticalAlign: "middle" }}>
														운송사
													</th>
													<th rowSpan="2" style={{ verticalAlign: "middle" }}>
														매칭일
													</th>
													<th colSpan="2">상차</th>
													<th colSpan="2">하차</th>
													<th rowSpan="2" style={{ verticalAlign: "middle" }}>
														운송상태
													</th>
												</tr>
												<tr>
													<th>상차일</th>
													<th>출발지</th>
													<th>하차일</th>
													<th>도착지</th>
												</tr>
											</thead>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoTransferHistory);
