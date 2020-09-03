import React from "react";
import MainStructure from "components/structure/MainStructure";

function DashBoard(props) {
    
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
                                <span>DashBoard</span>
                            </h1>
                            <div className="page-header-subtitle">
                                DashBoard 페이지
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-n10">
                    <div className="card mb-4">
                        <div className="card-header row">
                            <div className="col-6">대시보드</div>
                            <div className="col-sm-12 col-md-6 row">
                                <div className="col-12 d-flex justify-content-end">
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="basicInfoArea" style={{ overflow: "hidden", marginBottom: "20px", height: "70px" }}>
                                {/* <div className="photo" style={{ float: "left", width: "90px", paddingLeft: "20px", marginRight: "20px" }}> */}
                                {/* <img src={imgSrc} style={{ width: "70px", height: "70px" }}></img> */}
                                {/* </div> */}
                                <div className="basicInfo" style={{ float: "left", marginLeft: "5rem" }}>
                                    <span id="userName" style={{ fontSize: "25px", heigth: "70px", lineHeight: "70px", marginRight: "50px" }}><b></b></span>
                                    <span style={{ fontSize: "15px", marginRight: "50px" }}>
                                        <b>사업자등록번호</b>&nbsp;&nbsp;
                                            <input type="text" id="registrationNumber" name="registrationNumber" style={{ width: "130px" }} />
                                    </span>
                                    {/* <span id="" style={{ fontSize: "15px", marginRight: "50px" }}><b>가입 상태</b>&nbsp;&nbsp;-</span> */}
                                    <span style={{ fontSize: "15px", marginRight: "50px" }}>
                                        <b>서비스 운영여부</b>&nbsp;&nbsp;
                                            <input type="text" id="serviceYn" name="serviceYn" style={{ width: "130px" }} />
                                    </span>
                                    <span id="" style={{ fontSize: "15px", marginRight: "50px" }}>
                                        <b>운송사 코드</b>&nbsp;&nbsp;
                                            <input type="text" id="carrierCode" name="carrierCode" style={{ width: "130px" }} />
                                    </span>
                                </div>
                                <div className="modifyBtnArea" style={{ float: "right" }}>
                                    {/* <button type="button" id="basicInfoModifyBtn">수정</button> */}
                                </div>
                            </div>
                            <div className="card-header card-header-tabs card-header-primary pb-0">
                                <div className="nav-tabs-navigation">
                                    <div className="nav-tabs-wrapper">
                                        <ul className="nav nav-tabs" data-tabs="tabs">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link d-flex align-items-center active"
                                                    href="#Tab1"
                                                    data-toggle="tab"
                                                >
                                                    <span className="sm-display-none">탭1</span>
                                                    <div className="ripple-container"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link d-flex align-items-center"
                                                    href="#Tab2"
                                                    data-toggle="tab"
                                                >
                                                    <span className="sm-display-none">탭2</span>
                                                    <div className="ripple-container"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link d-flex align-items-center"
                                                    href="#Tab3"
                                                    data-toggle="tab"
                                                >
                                                    <span className="sm-display-none">탭3</span>
                                                    <div className="ripple-container"></div>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link d-flex align-items-center"
                                                    href="#Tab4"
                                                    data-toggle="tab"
                                                >
                                                    <span className="sm-display-none">탭4</span>
                                                    <div className="ripple-container"></div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane col-12 active" id="Tab1">
                                        탭 1
                                    </div>
                                    <div className="tab-pane col-12" id="Tab2">
                                        탭 2
                                    </div>
                                    <div className="tab-pane col-12" id="Tab3">
                                        탭 3
                                    </div>
                                    <div className="tab-pane col-12" id="Tab4">
                                        탭 4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainStructure>
    );
};

export default DashBoard;