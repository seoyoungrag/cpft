package kr.co.teamfresh.cpft.admin.web.backend.service.carrier;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.admin.web.backend.dto.carrier.CarrierDTO;
import kr.co.teamfresh.cpft.admin.web.backend.service.AbstractService;
import kr.co.teamfresh.cpft.admin.web.backend.util.ObjectMapperUtils;
import kr.co.teamfresh.cpft.model.entity.Carrier;
import kr.co.teamfresh.cpft.repository.carrier.CarrierJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CarrierService  extends AbstractService{

	private final CarrierJpaRepo carrierJpaRepo;
	
	//@Cacheable(value = CacheKey.CARRIER, key = "#carrierSeq", unless = "#result == null")
	public CarrierDTO findCarrier(Integer carrierSeq) {
		return ObjectMapperUtils.map(carrierJpaRepo.findAllByCarrierSeq(carrierSeq), CarrierDTO.class);
	}
	
	//@Cacheable(value = CacheKey.CARRIER, key = "#carrierSeq", unless = "#result == null")
	public Carrier findCarrierForCache(Integer carrierSeq) {
		//Carrier carrier = carrierJpaRepo.findById(carrierSeq).orElseThrow(CResourceNotExistException::new);
		return carrierJpaRepo.findAllByCarrierSeq(carrierSeq);
	}
}

