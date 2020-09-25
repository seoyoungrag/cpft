import React from "react";

const initialState = {
	auth: {
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
	},
	codes: {
		codes: [],
		orderRegisWorkGroupCodes: [],
		rcritTypeCodes: [],
		carTypeCodes: [],
		tonTypeCodes: [],
		payFullTypeCodes: [],
		workDayCodes: [],
		error: {
			triggered: false,
			message: "",
		},
	},
	notes: {
		noteInput: "",
		notes: [],
		error: {
			triggered: false,
			message: "",
		},
		editing: {
			id: null,
			text: "",
		},
	},
};

const globalContext = React.createContext(initialState);
const { Provider } = globalContext;

function GlobalStateProvider({ children }) {
	const [globalState, dispatch] = React.useReducer((globalState, action) => {
		switch (action.type) {
			case "auth/INITIALIZE_INPUT":
				return {
					...globalState.auth,
					form: {
						userLoginId: "",
						userLoginPw: "",
					},
				};
			case "auth/CHANGE_INPUT":
				let newForm = globalState.auth.form;
				newForm[action.payload.name] = action.payload.value;
				return {
					...globalState,
					...auth,
					form: newForm,
				};
			case "auth/INITIALIZE_ERROR":
				return {
					...globalState.auth,
					error: {
						triggered: false,
						message: "",
					},
				};
			case "auth/LOGIN_SUCCESS":
				return {
					...globalState,
					...auth,
					logged: true,
					rememberMe: action.payload.rememberMe,
					useInfo: {
						carrierSeq: action.payload.user.carrierSeq,
						userLoginId: action.payload.user.userLoginId,
						userNm: action.payload.user.userNm,
						userEmail: action.payload.user.userEmail,
						userSeq: action.payload.user.userSeq,
						token: action.payload.token,
					},
				};
			case "auth/REGISTER_FAILURE":
				switch (action.payload.status) {
					case 400:
						return {
							...globalState,
							...auth,
							error: {
								triggered: true,
								message: "WRONG USERNAME OR PASSWORD",
							},
						};
					case 500:
						return {
							...globalState,
							...auth,
							error: {
								triggered: true,
								message: action.payload.response.msg,
							},
						};
					default:
						return {
							...globalState,
							...auth,
						};
				}
			case "auth/REGISTER_SUCCESS":
				return {
					...globalState,
					...auth,
					logged: true,
					rememberMe: action.payload.rememberMe,
					userInfo: {
						userLoginId: action.payload.user.userLoginId,
						userNm: action.payload.user.userNm,
						userEmail: action.payload.user.userEmail,
						userSeq: action.payload.user.userSeq,
						token: action.payload.token,
					},
				};
			case "auth/CHECK_USER_SUCCESS":
				return {
					...globalState,
					...auth,
				};
			case "auth/CHECK_USER_FAILURE":
				return {
					...globalState,
					...auth,
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
					...globalState,
					...auth,
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
					...globalState,
					...auth,
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
					...globalState,
					...auth,
					error: {
						triggered: true,
						message: "로그아웃이 실패했습니다. 다시 시도해주세요.",
					},
				};
			case "auth/LOGIN_FAILURE":
				switch (action.payload.status) {
					case 400:
						return {
							...globalState,
							...auth,
							error: {
								triggered: true,
								message: "WRONG USERNAME OR PASSWORD",
							},
						};
					case 500:
						return {
							...globalState,
							...auth,
							error: {
								triggered: true,
								message: action.payload.response.msg,
							},
						};
					default:
						return {
							...globalState,
							...auth,
						};
				}
			case "codes/GET_CODES_SUCCESS":
				return {
					...globalState,
					...codes,
					codes: action.payload.codes,
					orderRegisWorkGroupCodes: () => {
						return () => {
							let rtn;
							let ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("운송그룹");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort((a, b) => {
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						};
					},
					rcritTypeCodes: () => {
						return () => {
							let rtn;
							let ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("모집유형");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort((a, b) => {
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						};
					},
					carTypeCodes: () => {
						return () => {
							let rtn;
							let ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("차종");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort((a, b) => {
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						};
					},
					tonTypeCodes: () => {
						return () => {
							let rtn;
							let ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("톤수");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort((a, b) => {
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						};
					},
					payFullTypeCodes: () => {
						return () => {
							let rtn;
							let ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("완제/무제");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn > 0) {
									rtn.sort((a, b) => {
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						};
					},
					workDayCodes: () => {
						return () => {
							let rtn;
							let ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm == "요일";
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn > 0) {
									rtn.sort((a, b) => {
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						};
					},
				};
			case "codes/GET_CODES_FAILURE":
				return {
					...globalState,
					...codes,
					error: {
						triggered: true,
						message: "코드를 조회하는데 실패했습니다.",
					},
				};
			case "notes/CHANGE_NOTE_INPUT":
				return {
					...globalState,
					...notes,
					noteInput: action.payload.value,
				};
			case "notes/ADD_NOTE_SUCCESS":
				const { note } = action.payload;
				return {
					...globalState,
					...notes,
					notes: [note].concat(globalState.notes.notes),
					noteInput: "",
					error: {
						triggered: false,
						message: "",
					},
				};
			case "notes/ADD_NOTE_FAILURE":
				return {
					...globalState,
					...notes,
					error: {
						triggered: true,
						message: "Error! Please Try With Unempty Note",
					},
				};
			case "notes/GET_NOTES_SUCCESS":
				return {
					...globalState,
					...notes,
					notes: action.payload.notes.results,
				};
			case "notes/GET_NOTES_SUCCESS":
				return {
					...globalState,
					...notes,
					notes: action.payload.notes,
				};
			case "notes/GET_NOTES_FAILURE":
				return {
					...globalState,
					...notes,
					error: {
						triggered: true,
						message: "Error! Please Try Again!",
					},
				};
			case "notes/TOGGLE_NOTE":
				return {
					...globalState,
					...notes,
					editing: {
						id: parseInt(action.payload.id, 10),
						note: action.payload.text,
					},
				};
			case "notes/CHANGE_NOTE_INPUT":
				if (action.payload.isEditing) {
					return {
						...globalState,
						...notes,
						editing: {
							...globalState,
							...notes.editing,
							text: action.payload.value,
						},
					};
				}
				return {
					...globalState,
					...notes,
					noteInput: action.payload.value,
				};
			case "notes/UPDATE_NOTE_SUCCESS":
				const { id, text } = action.payload.note;
				let notes = state.notes;
				let index = notes.findIndex((note, i) => {
					return note.id === id;
				});
				notes[parseInt(index, 10)] = {
					id,
					text,
				};
				return {
					...globalState,
					...notes,
					editing: {
						id: null,
						note: "",
					},
				};
			case "notes/DELETE_NOTE_SUCCESS":
				return {
					...globalState,
					...notes,
					notes: globalState.notes.notes.filter((note) => note.id !== action.payload.id),
				};
			default:
				return globalState;
		}
	}, initialState);

	return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
}

export { globalContext, GlobalStateProvider };
