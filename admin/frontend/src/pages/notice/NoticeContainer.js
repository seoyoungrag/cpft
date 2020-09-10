import React from "react";
import MainStructure from "components/structure/MainStructure";
import { useQuery, useMutation, queryCache } from "react-query";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import NoticeList from "./NoticeList";
import PushList from "./PushList";
import NoticeMutate from "./NoticeMutate";
import { globalContext } from "util/GlobalContext";

function NoticeContainer(props) {
	React.useEffect(() => {
		return () => {};
	}, []);

	const { globalState, dispatch } = React.useContext(globalContext);
	const { isNoticeMutate, noticeSeq } = globalState;

	return (
		<MainStructure>
			<Tab.Container>
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
									<span>공지사항 & PUSH</span>
								</h1>
								<div className="page-header-subtitle">공지사항 페이지</div>
							</div>
						</div>
					</div>
					<div className="container-fluid mt-n10">
						<div className="card mb-4">
							<div className="card-header row">
								<div className="col-12 row mt-3">
									<div className="col-3">
										<div className="d-flex justify-content-start">
											<Nav variant="tabs">
												<Nav.Item>
													<Nav.Link
														eventKey="noticeList"
														onClick={() => dispatch({ type: "SET_NOTICE_MUTATE", SET_NOTICE_MUTATE: false })}
													>
														공지사항
													</Nav.Link>
												</Nav.Item>
												<Nav.Item>
													<Nav.Link
														eventKey="pushList"
														onClick={() => dispatch({ type: "SET_NOTICE_MUTATE", SET_NOTICE_MUTATE: false })}
													>
														PUSH
													</Nav.Link>
												</Nav.Item>
											</Nav>
										</div>
									</div>
									<div className="col-5 d-flex justify-content-center"></div>
									<div className="form-group row col-4 d-flex justify-content-end m-auto p-auto"></div>
								</div>
							</div>
							<div className="card-body">
								{isNoticeMutate ? (
									<NoticeMutate noticeSeq={noticeSeq} dispatch={dispatch} noticeSeq={noticeSeq} />
								) : (
									<Tab.Content>
										<Tab.Pane eventKey="noticeList">
											<NoticeList />
										</Tab.Pane>
										<Tab.Pane eventKey="pushList">
											<PushList />
										</Tab.Pane>
									</Tab.Content>
								)}
							</div>
						</div>
					</div>
				</main>
			</Tab.Container>
		</MainStructure>
	);
}

export default NoticeContainer;
