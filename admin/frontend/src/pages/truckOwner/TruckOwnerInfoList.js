import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as dl from "util/DataTableLang";

function TruckOwnerInfoList(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// 더미 테이블 -----------------------------------------------------------
		const dummyTable = $("#truckOwnerInfoList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start TOL_start'><'col-6 d-flex justify-content-center TOL_center'><'col-3 d-flex justify-content-end TOL_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: null },
				{ data: "ownerName" },
				{ data: "ownerCode" },
				{ data: "joinStatus" },
				{ data: "businessInfo" },
				{ data: "certificateInfo" },
				{ data: "vehicleInfo" },
				{ data: "paymentInfo" },
				{ data: "accountStatus" },
				{ data: "carrierName" },
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
					targets: 9,
					visible: false,
				},
			],
			order: [[1, "asc"]],
			createdRow: function (row, data, dataIndex, cells) {
				$(row).attr("id", dataIndex + 1);
			},
			initComplete: function (settings, json) {
				// 리스트 클릭 시 페이지 이동
				$("#truckOwnerInfoList tbody tr").on("click", function () {
					const userSeq = $(this).attr("id");
					const url = "/truckOwner/truckOwnerInfoDetail";
					props.history.push(url, { userSeq: userSeq });
				});

				// 리스트 마우스 hover시 포인터 모양 변경
				$("#truckOwnerInfoList tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				// 카테고리1 추가
				const column1 = this.api().column(9);
				const select1 = $("<select class='form-control col-4'><option value=''>전체</option></select>")
					.appendTo(".TOL_start")
					.on("change", function () {
						const val1 = $(this).val();
						column1.search(val1 ? "^" + $(this).val() + "$" : val1, true, false).draw();
					});
				column1
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select1.append("<option>" + data + "</option>");
					});

				// 카테고리2 추가
				const column2 = this.api().column(3);
				const select2 = $("<select class='form-control col-4' id='searchOption'><option value=''>전체</option></select>")
					.appendTo(".TOL_end")
					.on("change", function () {
						const val2 = $(this).val();
						column2.search(val2 ? "^" + $(this).val() + "$" : val2, true, false).draw();
					});
				column2
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select2.append("<option>" + data + "</option>");
					});

				// 검색창 추가
				$(".TOL_end").append('<input type="text" id="searchVal" class="form-control" placeholder="검색" />');

				// 검색 자동검색
				$("#searchVal").on("keyup", function () {
					const searchVal = $(this).val();
					dummyTable.search(searchVal).draw();
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

	// 더미 데이터 -------------------------------------------------------------
	const array = [
		{
			ownerName: "홍길동",
			ownerCode: "N0002643",
			joinStatus: "미제출",
			businessInfo: "O",
			certificateInfo: "O",
			vehicleInfo: "X",
			paymentInfo: "X",
			accountStatus: "준회원",
			carrierName: "팀프레시",
		},
		{
			ownerName: "고길동",
			ownerCode: "N0002543",
			joinStatus: "승인완료",
			businessInfo: "O",
			certificateInfo: "O",
			vehicleInfo: "O",
			paymentInfo: "O",
			accountStatus: "정회원",
			carrierName: "마켓컬리",
		},
		{
			ownerName: "대길동",
			ownerCode: "N0001253",
			joinStatus: "미제출",
			businessInfo: "O",
			certificateInfo: "X",
			vehicleInfo: "X",
			paymentInfo: "O",
			accountStatus: "준회원",
			carrierName: "CJ",
		},
	];
	// ----------------------------------------------------------------------

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
								<span>차주 정보</span>
							</h1>
							<div className="page-header-subtitle">TruckOwnerInfo 차주 정보 페이지</div>
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
									id="truckOwnerInfoList"
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
												이름
											</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												차주코드
											</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												서류 제출 여부
											</th>
											<th colSpan="4">정보 기입 완료 상태</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												계정 상태
											</th>
											<th rowSpan="2" style={{ verticalAlign: "middle" }}>
												운송사이름(히든)
											</th>
										</tr>
										<tr>
											<th>사업자 정보</th>
											<th>자격 정보</th>
											<th>차량등록 정보</th>
											<th>결제 정보</th>
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

export default TruckOwnerInfoList;
