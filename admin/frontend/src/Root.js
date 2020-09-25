import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store/configure";
import { BrowserRouter as Router } from "react-router-dom";
import ReactStore from "ReactStore";

function Root(props) {
	React.useEffect(() => {
		_initNav();

		return () => {};
	}, []);

	// componentDidUpdate = () => {
	// 	/*
	//   first = location.pathname;
	//   first.indexOf(1);
	//   first.toLowerCase();
	//   first = first.split("/")[1];
	//   */
	// };

	const _initButton = () => {
		state.buttonIdsArray.forEach((button) => {
			document.getElementById(button).classList.remove("active");
		});
	};
	const _handleClick = (id) => {
		let isClicked = false;
		if (document.getElementById(id).classList.contains("active")) {
			isClicked = true;
		}
		_initButton();
		if (isClicked) {
			document.getElementById(id).classList.remove("active");
			setState((prevState) => ({
				...prevState,
				clickedButton: "",
			}));
			localStorage.setItem("clickedButton", "");
		} else {
			document.getElementById(id).classList.add("active");
			setState((prevState) => ({
				...prevState,
				clickedButton: id,
			}));
			localStorage.setItem("clickedButton", id);
		}
		setState((prevState) => ({ ...prevState, active: !prevState.active }));
	};

	const _initNav = () => {
		let isInitNav = true;
		state.buttonIdsArray.forEach((button) => {
			if (!document.getElementById(button)) {
				isInitNav = false;
			}
		});
		if (!isInitNav) {
			return false;
		}
		_initButton();
		state.buttonIdsArray.forEach((button) => {
			document.getElementById(button).classList.remove("active");
			let collapseDiv = document.getElementById(button).querySelector("a").dataset.target;
			if (state.clickedButton == button) {
				document.getElementById(button).classList.add("active");
				document.querySelector(collapseDiv).classList.add("show");
			} else {
				document.getElementById(button).classList.remove("active");
				document.querySelector(collapseDiv).classList.remove("show");
			}
		});
		let aTags = document.querySelectorAll("a.collapse-item");
		for (let i = 0; i < aTags.length; i++) {
			if (aTags[i].pathname == location.pathname) {
				aTags[i].classList.add("active");
			} else {
				aTags[i].classList.remove("active");
			}
		}
	};

	const [state, setState] = React.useState({
		active: true,
		buttonIdsArray: ["button1", "button2", "button3", "button4", "button5", "button7", "button8"],
		clickedButton: localStorage.getItem("clickedButton") || "",
		initButton: _initButton,
		handleClick: _handleClick,
		initNav: _initNav,
	});

	return (
		<Provider store={store}>
			<ReactStore.Provider value={state}>
				<React.StrictMode>
					<Router>
						<App initNav={_initNav} />
					</Router>
				</React.StrictMode>
			</ReactStore.Provider>
		</Provider>
	);
}
export default Root;
