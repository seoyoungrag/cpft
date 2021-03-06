import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as dl from "util/DataTableLang";

function CarrierInfoList(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// DataTables
		// $("#carrierInfoList").DataTable({
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
		//         { title: "no.", data: null },
		//         { title: "법인명", data: "carrierNm" },
		//         { title: "운송사 코드", data: "userNm" },
		//         { title: "대표자", data: null },
		//         { title: "담당자명", data: null },
		//         { title: "담당자연락처", data: "crqfcs.2" },
		//         { title: "담당자이메일", data: "crqfcs.1" },
		//         { title: "서비스 운영 여부", data: "crqfcs.0" },
		//         { title: "계약일", data: null }
		//     ],
		//     createdRow: function (row, data) {
		//         $(row).attr("id", data.userSeq);
		//     }
		// });

		// 더미 테이블
		const dummyTable = $("#carrierInfoList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start CIL_start'><'col-6 d-flex justify-content-center CIL_center'><'col-3 d-flex justify-content-end CIL_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "법인명", data: "corporationName" },
				{ title: "운송사코드", data: "carrierCode" },
				{ title: "대표자", data: "ceoName" },
				{ title: "담당자명", data: "managerName" },
				{ title: "담당자 연락처", data: "managerPhoneNumber" },
				{ title: "담당자 이메일", data: "managerEmail" },
				{ title: "서비스 운영 여부", data: "serviceYn" },
				{ title: "계약일", data: "contractDate" },
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
			order: [[1, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				// 리스트 행 클릭 시 상세보기 이동
				$("#carrierInfoList tbody tr").on("click", function () {
					const userSeq = $(this).attr("id");
					const url = "/carrier/carrierInfoDetail";
					props.history.push(url, { userSeq: userSeq });
				});
				// 리스트 마우스 hover시 포인터 변경
				$("#carrierInfoList tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				// 검색옵션 추가
				$(".CIL_end").append(
					'<select id="searchOption" class="form-control col-5">' +
						'<option value="">전체</option>' +
						'<option value="1">법인명</option>' +
						'<option value="4">운송사담당자</option>' +
						'<option value="3">대표자</option>' +
						"</select>"
				);

				// 검색창 추가
				$(".CIL_end").append('<input type="text" id="searchVal" class="form-control" placeholder="검색" />');

				// 검색 자동검색
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
		};
	}, []);

	// 더미 데이터 ---------------------------------------------------------------------
	const array = [
		{
			corporationName: "(주)팀프레시",
			carrierCode: "W000001",
			ceoName: "이성일",
			managerName: "홍길동",
			managerPhoneNumber: "010-1234-5678",
			managerEmail: "hoho@gmail.com",
			serviceYn: "Y",
			contractDate: "2020/08/15",
		},
		{
			corporationName: "(주)마켓컬리",
			carrierCode: "W000001",
			ceoName: "이성일",
			managerName: "고길동",
			managerPhoneNumber: "010-1234-5678",
			managerEmail: "gogo@gmail.com",
			serviceYn: "Y",
			contractDate: "2020/08/15",
		},
		{
			corporationName: "(주)CJ홈쇼핑",
			carrierCode: "W000001",
			ceoName: "이성일",
			managerName: "장보고",
			managerPhoneNumber: "010-1234-5678",
			managerEmail: "jojo@gmail.com",
			serviceYn: "Y",
			contractDate: "2020/08/15",
		},
	];

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
								<span>운송사 관리</span>
							</h1>
							<div className="page-header-subtitle">CarrierInfo 운송사 정보 페이지</div>
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
									id="carrierInfoList"
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
				</div>
			</main>
		</MainStructure>
	);
}

export default CarrierInfoList;
