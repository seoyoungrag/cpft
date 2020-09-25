import React from "react";

const initialState = {
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
};

const codesContext = React.createContext(initialState);
const { Provider } = codesContext;

function CodesContextProvider(props) {
	const [codesState, dispatch] = React.useReducer((codesState, action) => {
		switch (action.type) {
			case "codes/GET_CODES_SUCCESS":
				return {
					...codesState,
					codes: action.payload.codes,
					orderRegisWorkGroupCodes: (function () {
						return (function () {
							var rtn;
							var ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("운송그룹");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort(function (a, b) {
										// 오름차순
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						})();
					})(),
					rcritTypeCodes: (function () {
						return (function () {
							var rtn;
							var ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("모집유형");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort(function (a, b) {
										// 오름차순
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						})();
					})(),
					carTypeCodes: (function () {
						return (function () {
							var rtn;
							var ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("차종");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort(function (a, b) {
										// 오름차순
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						})();
					})(),
					tonTypeCodes: (function () {
						return (function () {
							var rtn;
							var ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("톤수");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort(function (a, b) {
										// 오름차순
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						})();
					})(),
					payFullTypeCodes: (function () {
						return (function () {
							var rtn;
							var ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("완제/무제");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort(function (a, b) {
										// 오름차순
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						})();
					})(),
					workDayCodes: (function () {
						return (function () {
							var rtn;
							var ctgry = action.payload.codes.filter((codeCtgry) => {
								return codeCtgry.codeCtgryNm.includes("요일");
							});
							if (ctgry && ctgry.length > 0) {
								rtn = ctgry[0].codes.filter((code) => {
									return code.codeUseYn.includes("Y");
								});
								if (rtn && rtn.length > 0) {
									rtn.sort(function (a, b) {
										// 오름차순
										return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
									});
								}
							} else {
								rtn = [];
							}
							return rtn;
						})();
					})(),
				};
			case "codes/GET_CODES_FAILURE":
				return {
					...codesState,
					error: {
						triggered: true,
						message: "코드를 조회하는데 실패했습니다.",
					},
				};
			default:
				return codesState;
		}
	}, initialState);

	return <Provider value={{ codesState, dispatch }}>{props.children}</Provider>;
}

export { codesContext, CodesContextProvider };
