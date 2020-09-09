import React, { useEffect, useState, useCallback } from "react";
import MainStructure from "components/structure/MainStructure";
import $ from "jquery";
import "vendor/datatables/dataTables.bootstrap4.min.css";
import "vendor/datatables/jquery.dataTables.min.js";
$.DataTable = require("vendor/datatables/dataTables.bootstrap4.min.js");
import "datatables.net-dt";

function CsInfoDetail(props) {
    console.log("component did mount");

    // 컴포넌트 마운트, 언마운트시 실행
    useEffect(() => {
        console.log("컴포넌트 마운트");
        setData(userSeq - 1);
        return () => {
            console.log("컴포넌트 언마운트");
        };
    }, []);

    const userSeq = props.location.state.userSeq;
    const [items, setItems] = useState({
        csNumber: "-",
        csCategory: "-",
        customerType: "-",
        csTitle: "-",
        csWriter: "-",
        csRegDate: "-",
        csStatus: "-",
        csContents: "-",
        csReply: "-",
        truckOwnerHp: "-",
    });

    const { csNumber, csCategory, customerType, csTitle, csWriter, csRegDate, csStatus, csContents, csReply, truckOwnerHp } = items;

    useEffect(() => {
        attachJiraIssueColletor();
        // Activate Bootstrap scrollspy for the sticky nav component
        $("body").scrollspy({
            target: "#stickyNav",
            offset: 0,
        });
        // Scrolls to an offset anchor when a sticky nav link is clicked
        $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top - 81,
                        },
                        200
                    );
                    return false;
                }
            }
        });
    });

    // 더미 데이터 세팅 ----------------------------------------------------------

    const array = [
        {
            csNumber: "M00001",
            csCategory: "불편사항",
            customerType: "차주",
            csTitle: "서류제출 어떻게 하나요?",
            csWriter: "김차주",
            csRegDate: "2020-08-05",
            csStatus: "처리완료",
            csContents: "서류 제출을 어디서 하는지 모르겠어요. 어디서 찾으면 되나요?",
            csReply: "마이페이지 > 내 정보 수정에 들어가면 있습니다. 4개 모두 올려주세요.",
            truckOwnerHp: "01012345678",
        },
        {
            csNumber: "M00002",
            csCategory: "문의사항",
            customerType: "차주",
            csTitle: "어플 사용법 좀 가르쳐 주세요.",
            csWriter: "유차주",
            csRegDate: "2020-08-08",
            csStatus: "확인중",
            csContents: "어플 사용법을 모르겠어요 알려주세요!",
            csReply: "해당 화주사에 유선 문의 부탁드립니다.",
            truckOwnerHp: "01012345678",
        },
        {
            csNumber: "M00003",
            csCategory: "문의사항",
            customerType: "차주",
            csTitle: "돈은 어디로 입금되나요?",
            csWriter: "서차주",
            csRegDate: "2020-08-17",
            csStatus: "확인중",
            csContents: "돈이 어디로 입금되는 지 모르겠어요.",
            csReply: "지정된 계좌번호로 입금 됩니다.",
            truckOwnerHp: "01012345678",
        },
        {
            csNumber: "M00004",
            csCategory: "문의사항",
            customerType: "차주",
            csTitle: "이거 어떻게 쓰는 건가요?",
            csWriter: "양차주",
            csRegDate: "2020-08-30",
            csStatus: "확인중",
            csContents: "이거 어떻게 쓰는건가요?",
            csReply: "질문을 상세하게 말씀 부탁드립니다.",
            truckOwnerHp: "01012345678",
        },
    ];

    // 더미 데이터 세팅

    const setData = useCallback((userSeq) => {
        setItems((prevItems) => ({
            ...prevItems,
            csNumber: array[userSeq].csNumber,
            csCategory: array[userSeq].csCategory,
            customerType: array[userSeq].customerType,
            csTitle: array[userSeq].csTitle,
            csWriter: array[userSeq].csWriter,
            csRegDate: array[userSeq].csRegDate,
            csStatus: array[userSeq].csStatus,
            csContents: array[userSeq].csContents,
            csReply: array[userSeq].csReply,
            truckOwnerHp: array[userSeq].truckOwnerHp,
        }));
    });

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
                            <div className="sbp-preview">
                                <div className="sbp-preview-content">
                                    <div className="form-group row">
                                        <table style={{ border: "1px solid #818380" }} className="table col-12">
                                            <tbody className="col-12">
                                                <tr>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <b>카테고리</b>
                                                    </td>
                                                    <td
                                                        colSpan="5"
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        <span id="csCategory">{csCategory}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <b>제목</b>
                                                    </td>
                                                    <td
                                                        colSpan="3"
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        <span id="csTitle">{csTitle}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <b>작성일</b>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span id="csRegDate">{csRegDate}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <b>작성자</b>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span id="csWriter">{csWriter}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <b>연락처</b>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span id="truckOwnerHp">{truckOwnerHp}</span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <b>처리상태</b>
                                                    </td>
                                                    <td
                                                        style={{
                                                            border: "1px solid #818380",
                                                            padding: "10px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span id="csStatus">
                                                            <select
                                                                className="form-control col-12 col-sm-8"
                                                                id="csStatus"
                                                                name="csStatus"
                                                                value={csStatus}
                                                                disabled
                                                            >
                                                                <option value="처리상태 전체">처리상태 전체</option>
                                                                <option value="처리완료">처리완료</option>
                                                                <option value="확인중">확인중</option>
                                                            </select>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="csContents" className="text-sm-left col-form-label">
                                            <b>내용</b>
                                        </label>
                                        <textarea
                                            className="form-control col-12 col-sm-12"
                                            id="csContents"
                                            name="csContents"
                                            rows="10"
                                            value={csContents}
                                            required
                                            readOnly
                                        ></textarea>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="csReply" className="col-form-label">
                                            <b>답변 작성</b>
                                        </label>
                                        <textarea
                                            className="form-control col-12 col-sm-12"
                                            id="csReply"
                                            name="csReply"
                                            rows="3"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="d-flex flex-row-reverse">
                                        <button className="btn btn-primary" type="button">
                                            저장
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainStructure>
    );
}
export default CsInfoDetail;
