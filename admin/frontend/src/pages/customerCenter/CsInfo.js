import React from "react";
import MainStructure from "components/structure/MainStructure";
import * as Calc from "util/Calc";

function CsInfo(props) {
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
		const dummyTable = $("#CsInfoTbl").DataTable({
			//language: DataTable_language,
			data: array,
			dom:
				"<'row'<'col-sm-12 col-md-3 contentStart'><'col-sm-12 col-md-6' contentCenter><'col-sm-12 col-md-3 contentEnd'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: null, width: "5%" },
				{ data: "csNumber", width: "8%" },
				{ data: "csCategory", width: "8%" },
				{ data: "customerType", width: "8%" },
				{ data: "csTitle", width: "15%" },
				{ data: "csWriter", width: "15%" },
				{ data: "regDate", width: "15%" },
				{ data: "csStatus", width: "15%" },
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
				// 리스트 클릭 시 페이지 이동
				$("#CsInfoTbl tbody tr").on("click", function () {
					const userSeq = $(this).attr("id");
					const url = "/customerCenter/csInfoDetail";
					props.history.push(url, { userSeq: userSeq });
				});

				// 리스트 마우스 hover시 포인터 모양 변경
				$("#CsInfoTbl tbody tr").on("mouseenter", function () {
					$(this).css("cursor", "pointer");
				});

				const column1 = this.api().column(2);
				const select1 = $("<select><option value=''>전체</option></select>")
					.appendTo("#searchTab1")
					.on("change", function () {
						const val = $(this).val();
						column1.search(val ? "^" + $(this).val() + "$" : val, true, false).draw();
					});
				column1
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select1.append("<option>" + data + "</option>");
					});

				const column2 = this.api().column(7);
				const select2 = $("<select><option value=''>전체</option></select>")
					.appendTo("#searchTab2")
					.on("change", function () {
						const val = $(this).val();
						column2.search(val ? "^" + $(this).val() + "$" : val, true, false).draw();
					});
				column2
					.data()
					.unique()
					.sort()
					.each(function (data, j) {
						select2.append("<option>" + data + "</option>");
					});

				$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
					const from = $("#fromDate").datepicker("getDate");
					const to = $("#toDate").datepicker("getDate");
					const targetDate = new Date(data[6]);

					if (from === null && to === null) return true;
					if (from === null && targetDate <= to) return true;
					if (to === null && targetDate >= from) return true;
					if (targetDate <= to && targetDate >= from) return true;
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

		$("#fromDate, #toDate").datepicker();

		$("#fromDate, #toDate").on("change", function () {
			dummyTable.draw();
		});

		$("#searchVal").on("keyup", function () {
			const searchVal = $(this).val();
			const searchOption = $("#searchOption").val();
			if (searchOption !== "") {
				dummyTable.columns(searchOption).search(searchVal).draw();
			} else {
				dummyTable.search(searchVal).draw();
			}
		});

		// 컴포넌트 언마운트
		return () => {
			dummyTable.destroy(true);
			$.fn.dataTable.ext.search.pop();
			$("#searchTab1").off();
			$("#searchTab2").off();
			$("#searchVal").off();
		};
	}, []);

	// 더미 데이터 ---------------------------------------------------------------------
	const array = [
		{
			csNumber: "M00001",
			csCategory: "문의사항",
			customerType: "차주",
			csTitle: "서류제출 어떻게 하나요?",
			csWriter: "김차주",
			regDate: "2020-09-10",
			csStatus: "처리완료",
		},
		{
			csNumber: "M00002",
			csCategory: "건의사항",
			customerType: "차주",
			csTitle: "어플 사용법 좀 가르쳐 주세요.",
			csWriter: "유차주",
			regDate: "2020-09-11",
			csStatus: "확인중",
		},
		{
			csNumber: "M00003",
			csCategory: "건의사항",
			customerType: "차주",
			csTitle: "돈은 어디로 입금되나요?",
			csWriter: "서차주",
			regDate: "2020-09-17",
			csStatus: "확인중",
		},
		{
			csNumber: "M00004",
			csCategory: "불만사항",
			customerType: "차주",
			csTitle: "이거 어떻게 쓰는 건가요?",
			csWriter: "양차주",
			regDate: "2020-09-15",
			csStatus: "확인중",
		},
	];
	//--------------------------------------------

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
								<span>고객센터</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="container-fluid mt-n10">
					<div className="card mb-4">
						<div className="card-body">
							<div className="col-12 row">
								<div className="col-3">
									<div className="d-flex justify-content-start">
										<label htmlFor="csRegDate" className="col-12 col-sm-3 col-form-label">
											작성일
										</label>
										<button type="button" className="btn btn-secondary ml-0 mr-1" onClick={Calc.getLastWeek}>
											<span>1주일</span>
										</button>
										<button type="button" className="btn btn-secondary mx-1" onClick={Calc.getLastMonth}>
											<span>1개월</span>
										</button>
										<button type="button" className="btn btn-secondary  mx-1" onClick={Calc.getLast3Month}>
											<span>3개월</span>
										</button>
									</div>
								</div>
								<div className="col-4">
									<div className="d-flex justify-content-start">
										<input
											className="form-control datepicker col-4"
											id="fromDate"
											type="text"
											placeholder="2020-08-01"
										/>
										<label className="col-form-label ml-3 mr-3">~</label>
										<input className="form-control datepicker col-4" id="toDate" type="text" placeholder="2020-08-30" />
									</div>
								</div>
							</div>

							<br />

							<div className="col-12 row">
								<div className="col-3">
									<div className="d-flex justify-content-start" id="searchTab1">
										<label htmlFor="csCategory" className="col-12 col-sm-3 col-form-label">
											카테고리
										</label>
									</div>
								</div>

								<div className="col-7">
									<div className="d-flex justify-content-start">
										<label htmlFor="csCategory" className="col-12 col-sm-2 col-form-label">
											조건별 검색
										</label>
										<select className="form-control col-12 col-sm-2" id="searchOption" name="searchOption">
											<option value="">전체</option>
											<option value="4">제목</option>
											<option value="1">문의번호</option>
										</select>
										<input type="text" id="searchVal" name="searchVal" placeholder="검색" />
									</div>
								</div>
								<div className="col-2">
									<div className="d-flex justify-content-end" id="searchTab2">
										<label htmlFor="csStatus" className="col-12 col-sm-5 col-form-label">
											처리상태
										</label>
									</div>
								</div>
							</div>

							<br />

							<div className="datatable table-responsive">
								<table
									id="CsInfoTbl"
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
											<th>문의번호</th>
											<th>카테고리</th>
											<th>고객분류</th>
											<th>제목</th>
											<th>작성자</th>
											<th>작성일</th>
											<th>처리상태</th>
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
export default CsInfo;
