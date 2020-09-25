import React from "react";
import ManagerRow from "pages/carrier/ManagerRow";

function CarrierInfoDetail(props) {
	// 컴포넌트 마운트
	React.useEffect(() => {
		// 컴포넌트 언마운트
		return () => {};
	}, []);

	// CarrierInfoCommon에서 가져옴
	const userSeq = props.userSeq;

	// 저장버튼
	const handleClick = React.useCallback((e) => {
		// inputs 값들을 다룰 예정
	}, []);

	// // 데이터 조회
	// const getData = async () => {
	//     setIsLoading(true);
	//     var data = null;
	//     await axios.get(url + userSeq)
	//         .then(res => {
	//             data = res.data.data;
	//             setInputs((state) => ({
	//                 ...inputs,
	//                 userName: data.userNm,
	//                 phoneNumber: data.truckOwner.telno
	//             }));
	//         })
	//         .catch(res => {
	//             alert("에러가 발생하였습니다 새로고침 후 다시 이용해주세요.");
	//         });
	//     setIsLoading(false);

	// 담당자 정보(배열) - 더미데이터
	const [datas, setDatas] = React.useState([
		{
			id: 1,
			managerName: "갑",
			managerPhoneNumber: "010-0001-0001",
			managerEmail: "naver.com",
			comment: "동해물과",
		},
		{
			id: 2,
			managerName: "을",
			managerPhoneNumber: "010-0002-0002",
			managerEmail: "google.com",
			comment: "백두산이",
		},
		{
			id: 3,
			managerName: "병",
			managerPhoneNumber: "010-0003-0003",
			managerEmail: "daum.com",
			comment: "마르고",
		},
	]);

	// 담당자 정보(배열) 세팅
	const managerRowChange = React.useCallback((e) => {
		const { name, value, id } = e.target;
		setDatas((prevDatas) =>
			prevDatas.map((data) =>
				data.id === parseInt(id)
					? {
							...data,
							[name]: value,
					  }
					: { ...data }
			)
		);
	}, []);

	// 버튼 추가시 사용할 key값 (굳이 ref 안해도 됨)
	const nextKey = React.useRef(datas.length);

	// 담당자 정보 + 버튼
	const addRow = React.useCallback(() => {
		// 새로운 객체를 만든다
		const data = {
			id: (nextKey.current += 1),
			managerName: null,
			managerPhoneNumber: null,
			managerEmail: null,
			comment: null,
		};
		// 생성된 객체를 배열에 추가한다 (2가지 방법 모두 가능)
		// setDatas([...datas, data]);
		setDatas((prevDatas) => prevDatas.concat(data));
	}, []);

	// ManagerRow에 전달할 onRemove 함수 - X버튼
	// 굳이 ManagerRow에서 handleRemove를 만들지 않고 함수를 전달하는 이유
	// => 컴포넌트 최적화? 그냥 보여주기만 할 컴포넌트는 굳이 안에서 함수를 새로 정의할 필요 없을듯
	const onRemove = React.useCallback((id) => {
		// 삭제하려는 key 값이 아닌 것들만 새로 배열 생성 = 삭제하려는 key값에 해당하는 배열요소만 제외하고 새로 생성
		setDatas((prevDatas) => prevDatas.filter((data) => data.id !== id));
	}, []);
	// ------------------------------------------------------------------------------------------------------------------------

	return (
		<React.Fragment>
			<div className="form-row my-2 mb-3">
				<div className="companyInfoArea" style={{ width: "100%", overflow: "hidden" }}>
					<div className="companyInfo" style={{ width: "60%", float: "left" }}>
						<h4>
							<b>기본정보</b>
						</h4>
						<table>
							<tbody>
								<tr>
									<td style={{ width: "10rem" }}>법인명</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="corporationName"
											name="corporationName"
											className="form-control col-10"
											value={props.data.corporationName || ""}
											onChange={props.onInputsChange}
										/>
									</td>
									<td style={{ width: "10rem" }}>대표자</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="ceoName"
											name="ceoName"
											className="form-control col-10"
											value={props.data.ceoName || ""}
											onChange={props.onInputsChange}
										/>
									</td>
								</tr>
								<tr>
									<td style={{ width: "10rem" }}>사업자등록번호</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="registrationNumber"
											name="registrationNumber"
											className="form-control col-10"
											value={props.data.registrationNumber || ""}
											onChange={props.onInputsChange}
										/>
									</td>
									<td style={{ width: "10rem" }}>운송사코드</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="carrierCode"
											name="carrierCode"
											className="form-control col-10"
											value={props.data.carrierCode || ""}
											onChange={props.onInputsChange}
										/>
									</td>
								</tr>
								<tr>
									<td style={{ width: "10rem" }}>고객센터 전화번호</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="customerCenterNumber"
											name="customerCenterNumber"
											className="form-control col-10"
											value={props.data.customerCenterNumber || ""}
											onChange={props.onInputsChange}
										/>
									</td>
									<td style={{ width: "10rem" }}>고객센터 운영시간</td>
									<td style={{ width: "15rem" }}>
										<input
											type="text"
											id="customerCenterTime"
											name="customerCenterTime"
											className="form-control col-10"
											value={props.data.customerCenterTime || ""}
											onChange={props.onInputsChange}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="attachFiles" style={{ width: "40%", float: "left" }}>
						<h4>
							<b>첨부파일</b>
						</h4>
						<table>
							<tbody>
								<tr>
									<td>사업자등록증</td>
									<td style={{ width: "50%" }}>
										<input
											type="file"
											id="businessLicenseImg"
											name="businessLicenseImg"
											value={props.files.businessLicenseImg || ""}
											onChange={props.onFilesChange}
										/>
									</td>
								</tr>
								<tr>
									<td>직인</td>
									<td style={{ width: "50%" }}>
										<input
											type="file"
											id="seal"
											name="seal"
											value={props.files.seal || ""}
											onChange={props.onFilesChange}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="managerInfo" style={{ marginTop: "20px", width: "100%", overflow: "hidden" }}>
					<hr />
					<div className="labelArea" style={{ float: "left" }}>
						<h4>
							<b>담당자 정보</b>
						</h4>
					</div>
					<div className="btnArea" style={{ float: "right" }}>
						<button className="btn btn-info" type="button" id="addRow" onClick={addRow}>
							+
						</button>
					</div>
					<div className="tableArea">
						<table style={{ width: "100%" }}>
							<tbody id="targetBody">
								{datas.map((data, index) => (
									<ManagerRow data={data} key={index} onRemove={onRemove} onChange={managerRowChange} />
								))}
							</tbody>
						</table>
					</div>
					<div className="btnArea" style={{ width: "100%", marginTop: "10rem" }}>
						<button type="button" className="btn btn-info" onClick={handleClick} style={{ float: "right" }}>
							저장
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(CarrierInfoDetail);
