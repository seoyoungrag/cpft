import React from "react";
import MainStructrue from "components/structure/MainStructure";
import CarrierInfoCommon from "pages/carrier/CarrierInfoCommon";


function CarrierInfoContainer(props) {

    const userSeq = props.location.state.userSeq;
    const url = props.location.pathname;
    console.log(url);

    return (
        <MainStructrue>
            <CarrierInfoCommon userSeq={userSeq} />
        </MainStructrue>
    );
}

export default CarrierInfoContainer;