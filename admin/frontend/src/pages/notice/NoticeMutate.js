import React from "react";
$.datepicker = require("bootstrap-datepicker");
import * as Calc from "util/Calc";

function NoticeMutate(props) {
	React.useEffect(() => {
		$("#from, #to").datepicker();
		if (props.noticeSeq !== null) {
			const index = props.noticeSeq - 1;
			setInputs((prevInputs) => ({
				...prevInputs,
				target: dummyData[index].target,
				popupCheck: dummyData[index].popupCheck,
				from: dummyData[index].from,
				to: dummyData[index].to,
				startTime: dummyData[index].startTime,
				endTime: dummyData[index].endTime,
				createdAt: dummyData[index].createdAt,
				title: dummyData[index].title,
				content: dummyData[index].content,
			}));
		}
		return () => {};
	}, []);

	const [inputs, setInputs] = React.useState({
		noticeSeq: null,
		target: null,
		popupCheck: false,
		from: null,
		to: null,
		startTime: null,
		endTime: null,
		createdAt: Calc.getDateStr(new Date()),
		title: null,
		content: null,
	});

	const { noticeSeq, target, popupCheck, from, to, startTime, endTime, createdAt, title, content } = inputs;

	const handleChange = React.useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}, []);

	// 더미데이터
	const dummyData = [
		{
			noticeSeq: 1,
			target: "운송사",
			popupCheck: true,
			from: "2020/09/09",
			to: "2020/09/12",
			startTime: "02:05",
			endTime: "18:07",
			createdAt: "2020/09/01",
			title: "[공지사항] 운송사에게 알립니다.",
			content: "안녕하세요 용차블루 입니다 블라블라블라블라블라",
		},
		{
			noticeSeq: 2,
			target: "차주",
			popupCheck: true,
			from: "2020/09/12",
			to: "2020/09/14",
			startTime: "11:05",
			endTime: "23:07",
			createdAt: "2020/09/12",
			title: "[공지사항] 운송사에게 알립니다.",
			content: "아으어으오이아엉",
		},
		{
			noticeSeq: 3,
			target: "운송사",
			popupCheck: false,
			from: "2020/09/15",
			to: "2020/09/15",
			startTime: "03:05",
			endTime: "05:00",
			createdAt: "2020/09/17",
			title: "[공지사항] 운송사에게 알립니다.",
			content: "리액트리액트리액트리액트리액트트트트틑ㅌ틑트",
		},
	];

	return (
		<React.Fragment>
			<div className="card-header-row">
				<div className="col-12 row mt-3">
					<div className="col-3">
						<div className="d-flex justify-content-start" id="searchTab"></div>
						<div className="col-5 d-flex justify-content-center"></div>
						<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto"></div>
					</div>
					<div className="col-5 d-flex justify-content-center"></div>
					<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto"></div>
				</div>
			</div>
			<div className="form-row my-2 mb-3">
				<div className="noticeArea" style={{ border: "1px solid black", width: "100%" }}>
					<div
						className="noticeHeader"
						style={{ paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem", paddingRight: "1rem", width: "100%" }}
					>
						<table style={{ width: "100%" }}>
							<tbody>
								<tr>
									<td style={{ width: "5%" }}>대상</td>
									<td style={{ width: "10%" }}>
										<select
											id="target"
											name="target"
											value={target || ""}
											onChange={handleChange}
											style={{ width: "100%" }}
										>
											<option>운송사</option>
											<option>차주</option>
										</select>
									</td>
									<td style={{ width: "5%" }}>
										<input
											type="checkbox"
											id="popupCheck"
											name="popupCheck"
											checked={popupCheck || ""}
											onChange={handleChange}
											style={{ marginLeft: "3rem" }}
										/>
									</td>
									<td style={{ width: "7%" }}>팝업사용</td>
									<td style={{ width: "10%" }}>팝업 공지 기간</td>
									<td style={{ width: "15%" }}>
										<input
											type="text"
											id="from"
											name="from"
											placeholder="2020-01-01"
											className="form-control datepicker"
											value={from || ""}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
									<td>
										<input
											type="time"
											id="startTime"
											name="startTime"
											value={startTime || "00:00"}
											onChange={handleChange}
										/>
									</td>
									<td>&nbsp;~&nbsp;</td>
									<td style={{ width: "15%" }}>
										<input
											type="text"
											id="to"
											name="to"
											placeholder="2020-01-01"
											className="form-control datepicker"
											value={to || ""}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
									<td style={{ width: "10%" }}>
										<input type="time" id="endTime" name="endTime" value={endTime || "24:00"} onChange={handleChange} />
									</td>
									<td style={{ width: "8%" }}>최초 작성일</td>
									<td>{createdAt || ""}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div
						className="noticeContent"
						style={{
							paddingTop: "2rem",
							paddingBottom: "2rem",
							paddingLeft: "1rem",
							paddingRight: "1rem",
							width: "100%",
							borderTop: "1px solid grey",
						}}
					>
						<table style={{ width: "100%" }}>
							<tbody>
								<tr style={{ marginBottom: "3rem" }}>
									<td style={{ width: "5%" }}>제목</td>
									<td>
										<input
											type="text"
											id="title"
											name="title"
											value={title || ""}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
								</tr>
								<tr>
									<td style={{ width: "5%" }}>내용</td>
									<td>
										<textarea
											id="content"
											name="content"
											rows="20"
											value={content || ""}
											onChange={handleChange}
											style={{ width: "100%" }}
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<div style={{ paddingTop: "2rem", paddingBottom: "2rem", width: "100%" }}>
							{props.noticeSeq === null ? (
								<button style={{ float: "right" }}>저장</button>
							) : (
								<React.Fragment>
									<button style={{ float: "right" }}>수정</button>
									<button style={{ float: "right" }}>삭제</button>
								</React.Fragment>
							)}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default React.memo(NoticeMutate);
