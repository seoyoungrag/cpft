import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import BaseContainer from "containers/BaseContainer";
import MainStructure from "components/structure/MainStructure";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import reactElementToJSXString from "react-element-to-jsx-string";

import { Error400, Error401, Error403, Error404, Error500, Error503, Test, Main, Auth, NotFound, PasswordRecovery } from "pages";

import OrderRegist from "pages/order/OrderRegist";
import OrderManage from "pages/order/OrderManage";
import ApplicantManage from "pages/order/ApplicantManage";
import CarOwnerList from "pages/truckOwner/TruckOwnerList";
import DtStmnList from "pages/truckOwner/DtStmnList";
import ElctrnTaxBill from "pages/elctrnTaxBill/ElctrnTaxBill";
import DashBoard from "pages/dashboard/Dashboard";
import TransportList from "pages/calculate/TransportList";
import TransportDetail from "pages/calculate/TransportDetail";
import CarrierCalc from "pages/calculate/CarrierCalc";
import TruckOwnerCalc from "pages/calculate/TruckOwnerCalc";
import CarrierService from "pages/carrier/CarrierService";
import TruckOwnerService from "pages/truckOwner/TruckOwnerService";
import OrderBoard from "pages/board/OrderBoard";
import CarrierAccount from "pages/account/CarrierAccount";
import TruckOwnerAccount from "pages/account/TruckOwnerAccount";
import AdminAccount from "pages/account/AdminAccount";
import CarrierAccountDetail from "pages/account/CarrierAccountDetail";
import TruckOwnerAccountDetail from "pages/account/TruckOwnerAccountDetail";
import AdminAccountDetail from "pages/account/AdminAccountDetail";

//고객센터관리
import CsInfo from "pages/customerCenter/CsInfo";
import VocManage from "pages/customerCenter/VocManage";
import CsInfoDetail from "pages/customerCenter/CsInfoDetail";

import ServiceTerms from "pages/serviceTerms/ServiceTerms";
// 차주관리
import TruckOwnerInfoList from "pages/truckOwner/TruckOwnerInfoList";
import TruckOwnerInfoContainer from "pages/truckOwner/TruckOwnerInfoContainer";

// 운송사 관리
import CarrierInfoList from "pages/carrier/CarrierInfoList";
import CarrierInfoContainer from "pages/carrier/CarrierInfoContainer";

import BlackList from "pages/order/BlackList";
//import "tabler-react/dist/Tabler.css";
import ReactStore from "ReactStore";
import NoticeContainer from "pages/notice/NoticeContainer";

function App(props) {
	React.useEffect(() => {
		console.log(props);
		props.initNav();
	}, [props]);

	return (
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/auth/passwordRecovery" component={PasswordRecovery} />
				<Route exact path="/auth/:kind" component={Auth} />
				<Route exact path="/test" component={Test} />
				<Route exact path="/order/regist" component={OrderRegist} />
				<Route exact path="/order/manage" component={OrderManage} />
				<Route exact path="/order/applicant/manage" component={ApplicantManage} />
				<Route exact path="/order/black/list" component={BlackList} />
				<Route exact path="/auth/black/list" component={PasswordRecovery} />
				<Route exact path="/truckOwner/list" component={CarOwnerList} />
				<Route exact path="/dtStmn/list" component={DtStmnList} />
				<Route exact path="/elctrnTaxBill/list" component={ElctrnTaxBill} />
				<Route exact path="/dashboard/dashboard" component={DashBoard} />
				<Route exact path="/calculate/transportList" component={TransportList} />
				<Route exact path="/calculate/transportDetail" component={TransportDetail} />
				<Route exact path="/calculate/carrierCalc" component={CarrierCalc} />
				<Route exact path="/calculate/truckOwnerCalc" component={TruckOwnerCalc} />
				<Route exact path="/carrier/carrierService" component={CarrierService} />
				<Route exact path="/truckOwner/carrierService" component={CarrierService} />
				<Route exact path="/truckOwner/truckOwnerService" component={TruckOwnerService} />
				<Route exact path="/board/orderBoard" component={OrderBoard} />
				<Route exact path="/account/carrierAccount" component={CarrierAccount} />
				<Route exact path="/account/truckOwnerAccount" component={TruckOwnerAccount} />
				<Route exact path="/account/adminAccount" component={AdminAccount} />
				<Route exact path="/account/carrierAccountDetail" component={CarrierAccountDetail} />
				<Route exact path="/account/truckOwnerAccountDetail" component={TruckOwnerAccountDetail} />
				<Route exact path="/account/adminAccountDetail" component={AdminAccountDetail} />

				{/* 추후 사용예정? */}
				<Route exact path="/serviceTerms/serviceTerms" component={ServiceTerms} />

				{/* 고객센터VOC 관리 */}
				<Route exact path="/customerCenter/csInfo" component={CsInfo} />
				<Route exact path="/customerCenter/csInfoDetail" component={CsInfoDetail} />
				<Route exact path="/customerCenter/vocManage" component={VocManage} />

				{/* 공지사항 & PUSH */}
				<Route exact path="/notice/noticeContainer" component={NoticeContainer} />

				{/* 차주 관리 */}
				<Route exact path="/truckOwner/truckOwnerInfoList" component={TruckOwnerInfoList} />
				<Route exact path="/truckOwner/truckOwnerInfoDetail" component={TruckOwnerInfoContainer} />

				{/* 운송사 관리 */}
				<Route exact path="/carrier/carrierInfoList" component={CarrierInfoList} />
				<Route exact path="/carrier/carrierInfoDetail" component={CarrierInfoContainer} />

				<Route exact path="/400" component={Error400} />
				<Route exact path="/401" component={Error401} />
				<Route exact path="/403" component={Error403} />
				<Route exact path="/404" component={Error404} />
				<Route exact path="/500" component={Error500} />
				<Route exact path="/503" component={Error503} />
				<Route component={NotFound} />
			</Switch>
			<BaseContainer />
		</React.Fragment>
	);
}

export default withRouter((props) => <App {...props} />);
