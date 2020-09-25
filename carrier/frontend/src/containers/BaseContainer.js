import React, { Component } from "react";
import { connect } from "react-redux";
import * as codeActions from "../store/modules/codes";
import * as authActions from "../store/modules/auth";
import { withRouter } from "react-router-dom";
import { authContext } from "context/AuthContext";
import { codesContext } from "context/CodesContext";
import usePrevious from "util/Previous";
import Axios from "axios";

export function BaseContainer(props) {
	React.useEffect(() => {
		checkUser();
		getCodes();
		return () => {};
	}, []);

	const ac = React.useContext(authContext);
	const cc = React.useContext(codesContext);
	const { userInfo, logged } = ac.authState;

	const prevProps = usePrevious({ logged });

	React.useEffect(() => {
		if (prevProps !== undefined) {
			if (prevProps.logged !== logged && !logged) {
				console.log(4);
				window.location.href = "/auth/login";
			}
		}
	}, [logged]);

	const getCodes = async () => {
		const token = localStorage.getItem("codes") ? JSON.parse(localStorage.getItem("userInfo")).token : null;
		await Axios.get("/v1/code", {
			headers: {
				"Content-type": "application/json",
				Authorization: `token ${token}`,
			},
		})
			.then((res) => {
				const codes = res.data.list;
				cc.dispatch({ type: "codes/GET_CODES_SUCCESS", payload: { codes } });
			})
			.catch((error) => {
				cc.dispatch({ type: "codes/GET_CODES_FAILURE", payload: error.response, error: true });
			});
	};

	const setUserTemp = ({ carrierSeq, userSeq, userLoginId, userNm, userEmail, token }) =>
		ac.dispatch({
			type: "codes/SET_USER_TEMP",
			payload: {
				carrierSeq,
				userSeq,
				userLoginId,
				userNm,
				userEmail,
				token,
			},
		});

	const checkUser = () => {
		/*console.log("checkUser before ");*/
		// 먼저 localStorage에 값이 저장되있는지 확인, userInfo값이 있다면, 로그인을 한것으로 인식하고,
		// 바로 setUserTemp를 실시.
		// 이를 하는 이유는 새로고침 했을시, state가 초기화 되어 logged값도 false로 바뀌는데, 새로고침 했을시
		// 로그인을 유지하기 위함.

		//console.log(this.props.userInfo);
		if (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).userLoginId) {
			/*console.log("checkUser middle");*/
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			/*
   console.log("BaseContainer:25");
   console.log(userInfo);
*/
			setUserTemp({
				carrierSeq: userInfo.carrierSeq,
				userLoginId: userInfo.userLoginId,
				userNm: userInfo.userNm,
				userEmail: userInfo.userEmail,
				userSeq: userInfo.userSeq,
				token: userInfo.token,
			});
			return;
		}

		// 만약 userInfo값이 localStorage에 없을때에는, api통신을 실시.
		//checkUser();
		/*console.log(this.props.userInfo);*/
		if (!userInfo) {
			props.history.push("/auth/login");
		}

		// 만약 checkUser가 실패 했다면, logged는 false로 바뀌므로, 로그인 페이지로 이동시킨다.
		// 또한, /auth/register에서는 /auth/login으로 이동할 필요가 없으므로, auth라는 path가 url에 포함될때는 제외시킨다
		if (!logged && !window.location.pathname.includes("auth")) {
			props.history.push("/auth/login");
		}
	};

	return <div />;
}

export default withRouter(BaseContainer);
