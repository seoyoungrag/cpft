package kr.co.teamfresh.cpft.truckowner.web.backend.controller.v1;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.truckowner.web.backend.dto.order.OrderDTO;
import kr.co.teamfresh.cpft.truckowner.web.backend.dto.order.OrderTruckOwnerForTruckOwnerListDTO;
import kr.co.teamfresh.cpft.truckowner.web.backend.service.order.OrderService;
import kr.co.teamfresh.cpft.truckowner.web.backend.util.ObjectMapperUtils;
import kr.co.teamfresh.cpft.common.model.response.ListResult;
import kr.co.teamfresh.cpft.common.model.response.SingleResult;
import kr.co.teamfresh.cpft.common.service.ResponseService;
import kr.co.teamfresh.cpft.model.entity.order.OrderTruckOwner;
import lombok.RequiredArgsConstructor;

@Api(tags = { "8. Order(for Mobile)" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/mobile/order")
public class MobileOrderController {
	Logger logger = LoggerFactory.getLogger(MobileOrderController.class);
	private final ResponseService responseService;
	private final OrderService orderService;

	@ApiOperation(value = "진행상테로 오더 조회", notes = "진행상테에 대한 오더를 조회한다.")
	@GetMapping("/status/{status}")
	public ListResult<OrderDTO> listOrderByCarrierIdAndStatus(@RequestHeader("X-AUTH-TOKEN") String token,
			@PathVariable String status) {
		return responseService.getListResult(orderService.findAllByStatus(status));
	}

	@ApiOperation(value = "오더아이디로 오더 조회", notes = "오더아이디로 오더를 조회한다.")
	@GetMapping("{orderSeq}")
	public SingleResult<OrderDTO> getOrderByOrderSeq(@RequestHeader("X-AUTH-TOKEN") String token,
			@PathVariable Integer orderSeq) {
		return responseService.getSingleResult(orderService.findOne(orderSeq));
	}

	@ApiOperation(value = "차주 기준으로 차주와 관련된 오더 조회", notes = "특정 차주의 오더들을 조회한다.")
	@GetMapping("/status/{status}/truckOwner/{userSeq}")
	public ListResult<OrderTruckOwnerForTruckOwnerListDTO> listOrderByTruckOwnerUserSeqAndStatus(
			@RequestHeader("X-AUTH-TOKEN") String token,
			@PathVariable String status, @PathVariable Integer userSeq) {
		List<OrderTruckOwnerForTruckOwnerListDTO> orderList = new ArrayList<OrderTruckOwnerForTruckOwnerListDTO>();
		if (status.equals("all")) {
			List<OrderTruckOwner> orderTruckOwnerList = orderService.findOrderByOrderTruckOwners(userSeq);
			orderList = ObjectMapperUtils.mapAll(orderTruckOwnerList, OrderTruckOwnerForTruckOwnerListDTO.class);
			return responseService.getListResult(orderList);
		} else {

			List<OrderTruckOwner> orderTruckOwnerList = orderService.findOrderByOrderTruckOwnersAndStatus(status,
					userSeq);
			orderList = ObjectMapperUtils.mapAll(orderTruckOwnerList, OrderTruckOwnerForTruckOwnerListDTO.class);
			return responseService.getListResult(orderList);
		}
	}

}
