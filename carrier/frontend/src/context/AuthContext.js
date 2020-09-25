import React from "react";

const initialState = {
	form: {
		userLoginId: "",
		userLoginPw: "",
	},
	error: {
		triggered: false,
		message: "",
	},
	logged: false,
	userInfo: {
		carrierSeq: null,
		userSeq: null,
		userLoginId: "",
		userNm: "",
		userEmail: "",
		token: null,
	},
	rememberMe: true,
};

const authContext = React.createContext(initialState);
const { Provider } = authContext;

function AuthContextProvider(props) {
	const [authState, dispatch] = React.useReducer((authState, action) => {
		switch (action.type) {
			case "auth/INITIALIZE_INPUT":
				return {
					...authState,
					form: {
						userLoginId: "",
						userLoginPw: "",
						userNm: "",
						userEmail: "",
					},
				};
			case "auth/CHANGE_INPUT":
				let newForm = authState.form;
				newForm[action.payload.name] = action.payload.value;
				return {
					...authState,
					form: newForm,
				};
			case "auth/INITIALIZE_ERROR":
				return {
					...authState,
					error: {
						triggered: false,
						message: "",
					},
				};
			case "auth/LOGIN_SUCCESS":
				return {
					...authState,
					logged: true,
					userInfo: {
						carrierSeq: action.payload.user.carrierSeq,
						userLoginId: action.payload.user.userLoginId,
						userNm: action.payload.user.userNm,
						userEmail: action.payload.user.userEmail,
						userSeq: action.payload.user.userSeq,
						token: action.payload.token,
					},
					rememberMe: action.payload.rememberMe,
				};
			case "auth/REGISTER_FAILURE":
				switch (action.payload.status) {
					case 400:
						return {
							...authState,
							error: {
								triggered: true,
								message: "WRONG USERNAME OR PASSWORD",
							},
						};
					case 500:
						return {
							...authState,
							error: {
								triggered: true,
								message: action.payload.response.msg,
							},
						};
					default:
						return {
							...authState,
						};
				}
			case "auth/REGISTER_SUCCESS":
				return {
					...authState,
					logged: true,
					userInfo: {
						userLoginId: action.payload.user.userLoginId,
						userNm: action.payload.user.userNm,
						userEmail: action.payload.user.userEmail,
						userSeq: action.payload.user.userSeq,
						token: action.payload.token,
					},
					rememberMe: action.payload.rememberMe,
				};
			case "auth/CHECK_USER_SUCCESS":
				return {
					...authState,
				};
			case "auth/CHECK_USER_FAILURE":
				return {
					...authState,
					logged: false,
					userInfo: {
						userLoginId: null,
						userNm: "",
						userSeq: null,
						userEmail: "",
						token: null,
					},
				};
			case "auth/SET_USER_TEMP":
				return {
					...authState,
					logged: true,
					userInfo: {
						carrierSeq: action.payload.carrierSeq,
						userLoginId: action.payload.userLoginId,
						userNm: action.payload.userNm,
						userEmail: action.payload.userEmail,
						userSeq: action.payload.userSeq,
						token: action.payload.token,
					},
				};
			case "auth/LOGOUT_SUCCESS":
				return {
					...authState,
					logged: false,
					userInfo: {
						carrierSeq: null,
						userSeq: null,
						userLoginId: "",
						userNm: "",
						userEmail: "",
						token: null,
						message: "",
					},
				};
			case "auth/LOGOUT_FAILURE":
				return {
					...authState,
					error: {
						triggered: true,
						message: "로그아웃이 실패했습니다. 다시 시도해주세요.",
					},
				};
			case "auth/LOGIN_FAILURE":
				console.log(action.payload);
				switch (action.payload.status) {
					case 400:
						return {
							...authState,
							error: {
								triggered: true,
								message: "WRONG USERNAME OR PASSWORD",
							},
						};
					case 500:
						return {
							...authState,
							error: {
								triggered: true,
								message: action.payload.data.msg,
							},
						};
					default:
						return {
							...authState,
						};
				}
			default:
				return authState;
		}
	}, initialState);

	return <Provider value={{ authState, dispatch }}>{props.children}</Provider>;
}

export { authContext, AuthContextProvider };
