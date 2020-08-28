package kr.co.teamfresh.cpft.admin.web.backend.service.truckOwner;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.admin.web.backend.dto.truckOwner.TruckOwnerCommonInfoDTO;
import kr.co.teamfresh.cpft.admin.web.backend.dto.truckOwner.TruckOwnerForTruckOwnerListDTO;
import kr.co.teamfresh.cpft.admin.web.backend.util.ObjectMapperUtils;
import kr.co.teamfresh.cpft.common.model.response.PageReqRes;
import kr.co.teamfresh.cpft.model.entity.TruckOwner;
import kr.co.teamfresh.cpft.repository.TruckOwner.TruckOwnerJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class TruckOwnerService {

	private final TruckOwnerJpaRepo truckOwnerJpaRepo; 
	
	public Page<TruckOwner> findAllByOrdersOrderSeqOrderByUserUserSeq(Integer orderSeq, PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrdersOrderTruckOwnerPKOrderOrderSeqOrderByUserUserSeq(orderSeq, page);
	}

	public Page<TruckOwner> findAllByOrderByUserUserSeq(PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrderByUserUserSeq(page);
	}

	public Page<TruckOwner> findAllByOrderTruckOwnerStatusAndOrderStatusOrderByUserUserSeq(String orderTruckOwnerStatus, String orderStatus, PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> page) {
		return truckOwnerJpaRepo.findAllByOrdersStatusAndOrdersOrderTruckOwnerPKOrderStatusOrderByUserUserSeq(orderTruckOwnerStatus, orderStatus, page);
	}
	
	public TruckOwner findByUserUserSeq(Integer userSeq) {
		return truckOwnerJpaRepo.findByUserUserSeq(userSeq);
	}
	
	public List<TruckOwner> findAll() {
		return truckOwnerJpaRepo.findAll();
	}
	
	public TruckOwnerCommonInfoDTO findTruckOwnerCommonInfo(Integer userSeq) {
		return ObjectMapperUtils.map(findByUserUserSeq(userSeq), TruckOwnerCommonInfoDTO.class);
	}
}
