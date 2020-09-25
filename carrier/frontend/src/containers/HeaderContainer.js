import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "components/structure/Header";
import * as authActions from "store/modules/auth";
import { authContext } from "context/AuthContext";

function HeaderContainer(props) {
	return <Header />;
}

export default HeaderContainer;
