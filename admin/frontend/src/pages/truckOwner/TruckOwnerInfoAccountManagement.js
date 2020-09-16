import React from "react";

function TruckOwnerInfoAccountManagement(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		const dummyTable = $("#accountHistory").DataTable({
			data: array,
			columns: [{ data: null }, { data: "Revision" }, { data: "useCategory" }, { data: "accountStatus" }],
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
	});

	const { registDate, registPath, lastLoginDate } = inputs;

	// inputs값 세팅
	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

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

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="basicInfoArea" style={{ width: "100%" }}>
					<h4>
						<b>가입 정보</b>
					</h4>
					<span style={{ marginRight: "100px" }}>가입일자</span>
					<input type="text" id="registDate" name="registDate" onChange={handleChange} value={registDate} />
					<span style={{ marginRight: "50px", marginLeft: "50px" }}>가입경로</span>
					<input type="text" id="registPath" name="registPath" onChange={handleChange} value={registPath} />
					<span style={{ marginRight: "50px", marginLeft: "50px" }}>마지막 로그인 일자</span>
					<input type="text" id="lastLoginDate" name="lastLoginDate" onChange={handleChange} value={lastLoginDate} />
				</div>
				<div className="agreeHistory" style={{ marginTop: "50px", width: "100%" }}>
					<h4>
						<b>약관 동의 내역</b>
					</h4>
					<table>
						<tbody>
							<tr>
								<td style={{ width: "10rem" }}>약관1</td>
								<td style={{ width: "6rem" }}>
									<input type="radio" id="agreeMent1" name="agreeMent1" /> 동의
								</td>
								<td>
									<input type="radio" id="agreeMent1" name="agreeMent1" /> 철회
								</td>
							</tr>
							<tr>
								<td style={{ width: "10rem" }}>약관2</td>
								<td style={{ width: "6rem" }}>
									<input type="radio" id="agreeMent2" name="agreeMent2" /> 동의
								</td>
								<td>
									<input type="radio" id="agreeMent2" name="agreeMent2" /> 철회
								</td>
							</tr>
							<tr>
								<td style={{ width: "10rem" }}>약관3</td>
								<td style={{ width: "6rem" }}>
									<input type="radio" id="agreeMent3" name="agreeMent3" /> 동의
								</td>
								<td>
									<input type="radio" id="agreeMent3" name="agreeMent3" /> 철회
								</td>
							</tr>
						</tbody>
					</table>
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
						>
							<thead>
								<tr>
									<th>no.</th>
									<th>일자</th>
									<th>이용내역</th>
									<th>계정상태</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(TruckOwnerInfoAccountManagement);
