import React, { Component } from "react";

function Input(props) {
	const [state, setState] = React.useState({
		name: "",
		nickname: "",
	});

	const updateValue = (fieldName, value) => {
		setState((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));
	};

	const onAddClick = () => {
		props.onAddClick(this.state.name, this.state.nickname);
	};

	return (
		<div className="app-input">
			<div>
				<span>Name:</span>
				<input
					type="text"
					onChange={(e) => {
						updateValue("name", e.target.value);
					}}
				/>
			</div>
			<div>
				<span>Nickname:</span>
				<input
					type="text"
					onChange={(e) => {
						updateValue("nickname", e.target.value);
					}}
				/>
			</div>
			<button
			//  onClick={() => {
			//   onAddClick();
			//  }}
			>
				Add
			</button>
		</div>
	);
}

export default Input;
