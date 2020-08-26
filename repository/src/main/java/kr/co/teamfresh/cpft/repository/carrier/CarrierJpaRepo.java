package kr.co.teamfresh.cpft.repository.carrier;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.Carrier;

public interface CarrierJpaRepo extends JpaRepository<Carrier, Integer> {

	Carrier findAllByCarrierSeq(Integer carrierSeq);
}