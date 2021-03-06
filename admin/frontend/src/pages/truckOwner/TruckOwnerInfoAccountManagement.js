import React from "react";
import * as dl from "util/DataTableLang";

function TruckOwnerInfoAccountManagement(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		const dummyTable = $("#accountHistory").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: array,
			dom:
				"<'row'<'col-3 d-flex justify-content-start TOA_start'><'col-6 d-flex justify-content-center TOA_center'><'col-3 d-flex justify-content-end TOA_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ title: "no.", data: null },
				{ title: "일자", data: "Revision" },
				{ title: "이용내역", data: "useCategory" },
				{ title: "계정상태", data: "accountStatus" },
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

	// inputs
	const [inputs, setInputs] = React.useState({
		registDate: "2020/08/21",
		registPath: "mobile",
		lastLoginDate: "2020/08/25",
		agreement1: {
			agree: true,
			reject: false,
		},
		agreement2: {
			agree: true,
			reject: false,
		},
		agreement3: {
			agree: true,
			reject: false,
		},
	});

	const { registDate, registPath, lastLoginDate, agreement1, agreement2, agreement3 } = inputs;

	// inputs값 세팅
	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// radio값 세팅
	const handleRadio = React.useCallback((e) => {
		const { name, value, checked } = e.target;
		const obj = {
			[value]: checked,
		};
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: obj,
		}));
	});

	// 더미 데이터 -----------------------------------------------
	const array = [
		{
			Revision: "2020/09/14",
			useCategory: "탈퇴",
			accountStatus: "탈퇴",
		},
		{
			Revision: "2020/09/12",
			useCategory: "계정승인",
			accountStatus: "정회원(2차권한)",
		},
		{
			Revision: "2020/09/10",
			useCategory: "가입",
			accountStatus: "준회원(1차권한)",
		},
	];

	// 수정 버튼 이벤트
	const handleClick = (e) => {
		const btn = e.target;
		const html = $(btn).html();
		if (html === "수정") {
			$(btn).html("저장");
			$("input[type=radio]").each(function () {
				$(this).prop("disabled", false);
			});
		} else {
			$(btn).html("수정");
			$("input[type=radio]").each(function () {
				$(this).prop("disabled", true);
			});
			// 업데이트 통신~
		}
	};

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="basicInfoArea" style={{ width: "100%" }}>
					<h4>
						<b>가입 정보</b>
					</h4>
					<table>
						<tbody>
							<tr>
								<td style={{ width: "5rem" }}>가입일자</td>
								<td style={{ width: "15rem" }}>
									<input
										type="text"
										id="registDate"
										name="registDate"
										className="form-control col-8"
										readOnly
										value={registDate}
									/>
								</td>
								<td style={{ width: "5rem" }}>가입경로</td>
								<td style={{ width: "15rem" }}>
									<input
										type="text"
										id="registPath"
										name="registPath"
										className="form-control col-8"
										readOnly
										value={registPath}
									/>
								</td>
								<td style={{ width: "10rem" }}>마지막 로그인 일자</td>
								<td style={{ width: "15rem" }}>
									<input
										type="text"
										id="lastLoginDate"
										name="lastLoginDate"
										className="form-control col-8"
										readOnly
										value={lastLoginDate}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="agreeHistory" style={{ marginTop: "50px", width: "100%", overflow: "hidden" }}>
					<h4>
						<b>약관 동의 내역</b>
					</h4>
					<div style={{ width: "70%", float: "left" }}>
						<table>
							<tbody>
								<tr>
									<td style={{ width: "10rem" }}>약관1</td>
									<td style={{ width: "6rem" }}>
										<input
											type="radio"
											id="agreement1"
											value="agree"
											name="agreement1"
											checked={agreement1.agree || ""}
											disabled
											onChange={handleRadio}
										/>{" "}
										동의
									</td>
									<td>
										<input
											type="radio"
											id="agreement1"
											value="reject"
											name="agreement1"
											checked={agreement1.reject || ""}
											disabled
											onChange={handleRadio}
										/>{" "}
										철회
									</td>
								</tr>
								<tr>
									<td style={{ width: "10rem" }}>약관2</td>
									<td style={{ width: "6rem" }}>
										<input
											type="radio"
											id="agreement2"
											value="agree"
											name="agreement2"
											checked={agreement2.agree || ""}
											disabled
											onChange={handleRadio}
										/>{" "}
										동의
									</td>
									<td>
										<input
											type="radio"
											id="agreement2"
											value="reject"
											name="agreement2"
											checked={agreement2.reject || ""}
											disabled
											onChange={handleRadio}
										/>{" "}
										철회
									</td>
								</tr>
								<tr>
									<td style={{ width: "10rem" }}>약관3</td>
									<td style={{ width: "6rem" }}>
										<input
											type="radio"
											id="agreement3"
											value="agree"
											name="agreement3"
											checked={agreement3.agree || ""}
											disabled
											onChange={handleRadio}
										/>{" "}
										동의
									</td>
									<td>
										<input
											type="radio"
											id="agreement3"
											value="reject"
											name="agreement3"
											checked={agreement3.reject || ""}
											disabled
											onChange={handleRadio}
										/>{" "}
										철회
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div style={{ width: "30%", float: "right" }}>
						<button className="btn btn-info ml-1" id="mutateBtn" onClick={handleClick} style={{ float: "right" }}>
							수정
						</button>
					</div>
				</div>
				<div className="accountHistory" style={{ marginTop: "50px", width: "100%" }}>
					<h4>
						<b>계정 이용 내역</b>
					</h4>
					<div className="datatable table-responsive">
						<table
							id="accountHistory"
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
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoAccountManagement);
