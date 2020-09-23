import React from "react";
import * as dl from "util/DataTableLang";

function CarrierInfoAccountManagement(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		setData(userSeq - 1);
		const dummyTable = $("#accountList").DataTable({
			language: dl.DataTable_language,
			responsive: true,
			data: accountData,
			dom:
				"<'row'<'col-3 d-flex justify-content-start CIA_start'><'col-6 d-flex justify-content-center CIA_center'><'col-3 d-flex justify-content-end CIA_end'>>" +
				"<'row'<'col-sm-12'rt>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			columns: [
				{ data: null },
				{ data: "createdAt" },
				{ data: "accountType" },
				{ data: "subId" },
				{ data: "subPw" },
				{ data: "userName" },
				{ data: "userEmail" },
				{ data: "comment" },
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

	// CarrierInfoCommon에서 가져옴
	const userSeq = props.userSeq;

	// inputs
	const [inputs, setInputs] = React.useState({
		masterId: null,
		accountType: null,
		masterIdCreatedAt: null,
		masterPw: null,
		masterPwChk: null,
		userName: null,
		userEmail: null,
	});

	const { masterId, masterIdCreatedAt, accountType, masterPw, masterPwChk, userName, userEmail } = inputs;

	// inputs 값 세팅
	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// 더미 데이터 --------------------------------------------------------------------
	const array = [
		{
			masterId: "timf001",
			accountType: "마스터",
			masterPw: "timfDev1",
			userName: "홍길동",
			userEmail: "hoho@gmail.com",
			masterIdCreatedAt: "2020/09/10",
		},
		{
			masterId: "timf002",
			accountType: "마스터",
			masterPw: "timfDev2",
			userName: "고길동",
			userEmail: "gogo@gmail.com",
			masterIdCreatedAt: "2020/09/12",
		},
		{
			masterId: "timf003",
			accountType: "마스터",
			masterPw: "timfDev3",
			userName: "대길동",
			userEmail: "jojo@gmail.com",
			masterIdCreatedAt: "2020/09/14",
		},
	];

	let accountData = [
		{
			masterId: "timf001",
			subId: "timftest1",
			subPw: "timf0525",
			createdAt: "2020/09/01",
			accountType: "서브마스터",
			userName: "갑",
			userEmail: "koko@gmail.com",
			comment: "테스트1",
		},
		{
			masterId: "timf001",
			subId: "timftest1",
			subPw: "timf0525",
			createdAt: "2020/09/01",
			accountType: "서브마스터",
			userName: "을",
			userEmail: "koko@gmail.com",
			comment: "테스트1",
		},
		{
			masterId: "timf002",
			subId: "timftest2",
			subPw: "timf0717",
			createdAt: "2020/09/11",
			accountType: "서브마스터",
			userName: "병",
			userEmail: "uouo@gmail.com",
			comment: "테스트2",
		},
		{
			masterId: "timf002",
			subId: "timftest2",
			subPw: "timf0717",
			createdAt: "2020/09/11",
			accountType: "서브마스터",
			userName: "정",
			userEmail: "uouo@gmail.com",
			comment: "테스트2",
		},
		{
			masterId: "timf003",
			subId: "timftest3",
			subPw: "timf0602",
			createdAt: "2020/09/12",
			accountType: "서브마스터",
			userName: "무",
			userEmail: "popo@gmail.com",
			comment: "테스트3",
		},
		{
			masterId: "timf003",
			subId: "timftest3",
			subPw: "timf0602",
			createdAt: "2020/09/12",
			accountType: "서브마스터",
			userName: "기",
			userEmail: "lolo@gmail.com",
			comment: "테스트3",
		},
	];

	const setAccountList = (masterId) => {
		accountData = accountData.filter((data) => data.masterId === masterId);
	};

	// 더미 데이터 세팅
	const setData = React.useCallback((userSeq) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			masterId: array[userSeq].masterId,
			accountType: array[userSeq].accountType,
			masterPw: array[userSeq].masterPw,
			userName: array[userSeq].userName,
			userEmail: array[userSeq].userEmail,
			masterIdCreatedAt: array[userSeq].masterIdCreatedAt,
		}));
		setAccountList(array[userSeq].masterId);
	}, []);
	// --------------------------------------------------------------------

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="accountManagementArea" style={{ width: "100%" }}>
					<h4>
						<b>계정관리</b>
					</h4>
					<table>
						<tbody>
							<tr>
								<td style={{ width: "6rem" }}>마스터 ID</td>
								<td style={{ width: "13rem" }}>
									<input
										type="text"
										id="masterId"
										name="masterId"
										value={masterId || ""}
										className="form-control col-10"
										onChange={handleChange}
									/>
								</td>
								<td style={{ width: "6rem" }}></td>
							</tr>
							<tr>
								<td style={{ width: "6rem" }}>PW</td>
								<td style={{ width: "13rem" }}>
									<input
										type="text"
										id="masterPw"
										name="masterPw"
										value={masterPw || ""}
										className="form-control col-10"
										onChange={handleChange}
									/>
								</td>
								<td style={{ width: "6rem" }}>PW 확인</td>
								<td>
									<input
										type="text"
										id="masterPwChk"
										name="masterPwChk"
										value={masterPwChk || ""}
										className="form-control col-10"
										onChange={handleChange}
									/>
								</td>
							</tr>
							<tr>
								<td style={{ width: "6rem" }}>이름</td>
								<td>
									<input
										type="text"
										id="userName"
										name="userName"
										value={userName || ""}
										className="form-control col-10"
										onChange={handleChange}
									/>
								</td>
							</tr>
							<tr>
								<td style={{ width: "6rem" }}>이메일</td>
								<td>
									<input
										type="text"
										id="userEmail"
										name="userEmail"
										value={userEmail || ""}
										className="form-control col-10"
										onChange={handleChange}
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<button type="button" className="btn btn-info" style={{ float: "right" }}>
						저장
					</button>
				</div>
				<div className="accountList" style={{ width: "100%" }}>
					<hr />
					<h4>
						<b>계정 리스트</b>
					</h4>
					<div className="datatable table-responsive">
						<table
							id="accountList"
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
									<th>계정생성일자</th>
									<th>사용자유형</th>
									<th>ID</th>
									<th>PW</th>
									<th>이름</th>
									<th>이메일</th>
									<th>비고</th>
								</tr>
								<tr>
									<th>-</th>
									<th>{masterIdCreatedAt || ""}</th>
									<th>{accountType || ""}</th>
									<th>{masterId || ""}</th>
									<th>{masterPw || ""}</th>
									<th>{userName || ""}</th>
									<th>{userEmail || ""}</th>
									<th>마스터 계정</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(CarrierInfoAccountManagement);
