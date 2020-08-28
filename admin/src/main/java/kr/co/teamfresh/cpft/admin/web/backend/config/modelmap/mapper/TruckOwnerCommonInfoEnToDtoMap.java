package kr.co.teamfresh.cpft.admin.web.backend.config.modelmap.mapper;

import org.modelmapper.PropertyMap;

import kr.co.teamfresh.cpft.admin.web.backend.dto.truckOwner.TruckOwnerCommonInfoDTO;
import kr.co.teamfresh.cpft.model.entity.TruckOwner;

public class TruckOwnerCommonInfoEnToDtoMap extends PropertyMap<TruckOwner, TruckOwnerCommonInfoDTO> {
	@Override
	protected void configure() {
		map().setUserName(source.getUser().getUserNm());
		map().setOwnerCode(source.getUser().getCarrier().getCarrierNm());
		map().setCarrierSeq(source.getUser().getCarrier().getCarrierSeq());
	}
}
