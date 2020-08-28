import React, { useEffect, useState } from "react";
import MainStructure from "components/structure/MainStructure";
import $, { data } from "jquery";
import axios from "axios";
import imgSrc from "../../styles/캡처.png";
import Loader from "../../util/Loader";
import TruckOwnerInfoCommon from "pages/truckOwner/TruckOwnerInfoCommon";
import { Route } from "react-router-dom";
import TruckOwnerInfoDetail from "pages/truckOwner/TruckOwnerInfoDetail";

function TruckOwnerInfoContainer(props) {

    const userSeq = props.location.state.userSeq;
    const url = props.location.pathname;
    console.log(url);
    
    return (
        <MainStructure>
            <TruckOwnerInfoCommon userSeq={userSeq} />
        </MainStructure>
    );
}

export default TruckOwnerInfoContainer;