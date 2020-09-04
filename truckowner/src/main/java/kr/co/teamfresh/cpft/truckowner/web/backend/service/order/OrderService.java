package kr.co.teamfresh.cpft.truckowner.web.backend.service.order;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.truckowner.web.backend.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.truckowner.web.backend.dto.order.OrderTruckOwnerForApplicationListDTO;
import kr.co.teamfresh.cpft.truckowner.web.backend.util.ObjectMapperUtils;
import kr.co.teamfresh.cpft.common.advice.exception.CResourceNotExistException;
import kr.co.teamfresh.cpft.common.model.response.PageReqRes;
import kr.co.teamfresh.cpft.model.entity.order.Order;
import kr.co.teamfresh.cpft.model.entity.order.OrderTruckOwner;
import kr.co.teamfresh.cpft.repository.order.OrderJpaRepo;
import kr.co.teamfresh.cpft.repository.orderTruckOwner.OrderTruckOwnerJpaRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {
	
	private final OrderJpaRepo orderJpaRepo;
	private final OrderTruckOwnerJpaRepo orderTruckOwnerJpaRepo;
	
	public OrderDTO saveOrder(Order order) {
		//User user = userJpaRepo.findById(uid).orElseThrow(CUserNotFoundException::new);		map().getWorkGroup().getOrders().add(destination);
		if(order.getOrderSeq()!=null && !order.getOrderSeq().equals("")) {
			//Order oriOrder = Optional.ofNullable(orderJpaRepo.getOne(order.getOrderSeq())).orElseThrow(CResourceNotExistException::new);
			//ObjectMapperUtils.map(order, oriOrder);
			//return orderJpaRepo.save(oriOrder);
			return ObjectMapperUtils.map(orderJpaRepo.save(order), OrderDTO.class);
		}else {
			return ObjectMapperUtils.map(orderJpaRepo.save(order), OrderDTO.class);
		}
	}

	public List<OrderDTO> findAllOrders() {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAll(), OrderDTO.class);
	}

	public List<OrderDTO> findAllByCarrierSeqAndStatus(Integer carrierSeq, String status) {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByCarrierCarrierSeqAndStatusOrderByOrderSeq(carrierSeq, status), OrderDTO.class);
	}
	
	public List<OrderDTO> findAllByCarrierSeq(Integer carrierSeq) {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByCarrierCarrierSeqOrderByOrderSeq(carrierSeq), OrderDTO.class);
	}

	/*
	public Page<Order> listOrderByCarrierIdAndOrderSeq(String carrierSeq, String orderSeq, PageReqRes<OrderDTO> pageable) {
		//return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByCarrierCarrierSeqAndOrderSeqOrderByOrderSeq(carrierSeq, orderSeq, pageable), OrderDTO.class);
		return orderJpaRepo.findAllByCarrierCarrierSeqAndOrderSeqOrderByOrderSeq(carrierSeq, orderSeq, pageable);
	}
	*/

	public Page<OrderTruckOwner> listOrderTruckOwnerByStatusOrderByCreatedAt(String status, PageReqRes<OrderTruckOwner, OrderTruckOwnerForApplicationListDTO> pageable) {
		return orderTruckOwnerJpaRepo.findAllByOrderTruckOwnerPKOrderStatusOrderByCreatedAtAscOrderSeqAscUserSeqAsc(status, pageable);
	}

	public Page<OrderTruckOwner> listOrderTruckOwnerByOrderSeqOrderAndStatusByCreatedAt(String status, Integer orderSeq, PageReqRes<OrderTruckOwner, OrderTruckOwnerForApplicationListDTO> pageable) {
		return orderTruckOwnerJpaRepo.findAllByOrderTruckOwnerPKOrderStatusAndOrderTruckOwnerPKOrderOrderSeqOrderByCreatedAtAscOrderSeqAscUserSeqAsc(status, orderSeq, pageable);
	}

	public List<OrderDTO> findAllByStatus(String status) {
		return ObjectMapperUtils.mapAll(orderJpaRepo.findAllByStatusOrderByOrderSeq(status), OrderDTO.class);
	}
	
	public OrderDTO findOne(Integer id) {
		return ObjectMapperUtils.map(orderJpaRepo.findById(id).orElseThrow(CResourceNotExistException::new), OrderDTO.class);
	}

	public List<OrderTruckOwner> findOrderByOrderTruckOwnersAndStatus(String status, Integer userSeq) {
		return orderTruckOwnerJpaRepo.findAllByStatusAndUserSeqOrderByOrderSeq(status, userSeq);
	}

	public List<OrderTruckOwner> findOrderByOrderTruckOwners(Integer userSeq) {
		return orderTruckOwnerJpaRepo.findAllByUserSeqOrderByOrderSeq(userSeq);
	}
}
