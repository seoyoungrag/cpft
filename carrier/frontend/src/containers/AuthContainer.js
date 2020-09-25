import React, { Component } from "react";
import { connect } from "react-redux";
import AuthForm from "components/auth/AuthForm";
import { withRouter } from "react-router-dom";
import usePrevious from "util/Previous";
import * as authActions from "store/modules/auth";
import { authContext } from "context/AuthContext";
import { codesContext } from "context/CodesContext";

export function AuthContainer(props) {
	React.useEffect(() => {
		initialize();
		return () => {};
	}, []);

	const { authState, dispatch } = React.useContext(authContext);
	const { userLoginId, userLoginPw } = authState.form;
	const { userInfo, logged, error, rememberMe } = authState;

	const { kind } = props;
	const prevProps = usePrevious({ kind, logged });
	console.log(authState);
	React.useEffect(() => {
		const { history } = props;
		if (prevProps !== undefined) {
			if (prevProps.kind !== kind) {
				initialize();
			}
			console.log(prevProps.logged);
			console.log(logged);
			if (prevProps.logged !== logged && logged) {
				localStorage.setItem(
					"userInfo",
					JSON.stringify({
						carrierSeq: authState.userInfo.carrierSeq,
						userSeq: authState.userInfo.userSeq,
						userLoginId: authState.userInfo.userLoginId,
						userNm: authState.userInfo.userNm,
						userEmail: authState.userInfo.userEmail,
						token: authState.userInfo.token,
					})
				);
				history.push("/");
			}
		}
	}, [logged]);

	const initializeInput = () => {
		dispatch({ type: "auth/INITIALIZE_INPUT" });
	};

	const initializeError = () => {
		dispatch({ type: "auth/INITIALIZE_ERROR" });
	};

	const initialize = () => {
		initializeError();
		initializeInput();
	};

	return (
		<AuthForm
			kind={kind}
			userLoginId={userLoginId}
			userLoginPw={userLoginPw}
			// onChangeInput={handleChangeInput}
			// onLogin={handleLogin}
			// onRegister={handleRegister}
			error={error}
		/>
	);
}

export default withRouter(AuthContainer);
