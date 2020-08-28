import React, { Component } from 'react';
import MainStructure from "components/structure/MainStructure";
import { connect } from "react-redux";

class DashBoard extends Component {
    render() {
        return (
            <MainStructure>
                <h1>DashBoard 페이지</h1>
            </MainStructure>
        )
    }
}

export default DashBoard;
