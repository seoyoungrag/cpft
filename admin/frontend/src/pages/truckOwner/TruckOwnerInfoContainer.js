import React from "react";
import MainStructure from "components/structure/MainStructure";
import TruckOwnerInfoCommon from "pages/truckOwner/TruckOwnerInfoCommon";

function TruckOwnerInfoContainer(props) {

    const userSeq = props.location.state.userSeq;
    
    return (
        <MainStructure>
            <TruckOwnerInfoCommon userSeq={userSeq} /> 
        </MainStructure>
    );
}

export default TruckOwnerInfoContainer;