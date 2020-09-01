import React from "react";
import MainStructure from "components/structure/MainStructure";
import TruckOwnerInfoCommon from "pages/truckOwner/TruckOwnerInfoCommon";

function TruckOwnerInfoContainer(props) {

    const userSeq = props.location.state.userSeq;
    const array = props.location.state.array;
    const url = props.location.pathname;
    
    return (
        <MainStructure>
            <TruckOwnerInfoCommon userSeq={userSeq} array={array} />
        </MainStructure>
    );
}

export default TruckOwnerInfoContainer;