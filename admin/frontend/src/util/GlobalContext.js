import React from "react";

const initialState = {
	url: null,
	isNoticeMutate: false,
	noticeSeq: null,
};

const globalContext = React.createContext(initialState);
const { Provider } = globalContext;

const GlobalStateProvider = ({ children }) => {
	const [globalState, dispatch] = React.useReducer((globalState, action) => {
		switch (action.type) {
			case "SET_URL":
				return {
					...globalState,
					url: action.url,
				};
			case "SET_NOTICE_MUTATE":
				return {
					...globalState,
					noticeSeq: null,
					isNoticeMutate: action.isNoticeMutate,
				};
			case "SET_NOTICE_SEQ":
				return {
					...globalState,
					noticeSeq: action.noticeSeq,
					isNoticeMutate: true,
				};
			case "RESET_NOTICE_SEQ":
				return {
					...globalState,
					noticeSeq: null,
					isNoticeMutate: false,
				};
			default:
				return globalState;
		}
	}, initialState);

	return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};

export { globalContext, GlobalStateProvider };
