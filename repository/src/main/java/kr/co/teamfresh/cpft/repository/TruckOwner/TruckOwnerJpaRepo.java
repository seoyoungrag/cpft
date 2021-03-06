package kr.co.teamfresh.cpft.repository.TruckOwner;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.TruckOwner;

public interface TruckOwnerJpaRepo extends JpaRepository<TruckOwner, Integer> {

	Page<TruckOwner> findAllByOrdersOrderTruckOwnerPKOrderOrderSeqOrderByUserUserSeq(Integer orderSeq, Pageable pageable);

	Page<TruckOwner> findAllByOrderByUserUserSeq(Pageable page);
	
	Page<TruckOwner> findAllByOrdersStatusAndOrdersOrderTruckOwnerPKOrderStatusOrderByUserUserSeq(String orderTruckOwnerStatus, String orderStatus,  Pageable page);

	TruckOwner findByUserUserSeq(Integer userSeq);
	
}
