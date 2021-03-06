package kr.co.teamfresh.cpft.repository.order;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.order.Order;

public interface OrderJpaRepo extends JpaRepository<Order, Integer> {

	List<Order> findAllByCarrierCarrierSeqOrderByOrderSeq(Integer carrierSeq);
	List<Order> findAllByCarrierCarrierSeqAndStatusOrderByOrderSeq(Integer carrierSeq, String status);
	Page<Order> findAllByCarrierCarrierSeqAndOrderSeqOrderByOrderSeq(Integer carrierSeq, Integer orderSeq, Pageable pageable);
	List<Order> findAllByStatusOrderByOrderSeq(String status);

}
