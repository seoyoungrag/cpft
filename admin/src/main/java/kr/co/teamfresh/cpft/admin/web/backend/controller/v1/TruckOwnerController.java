package kr.co.teamfresh.cpft.admin.web.backend.controller.v1;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import kr.co.teamfresh.cpft.admin.web.backend.dto.truckOwner.TruckOwnerCommonInfoDTO;
import kr.co.teamfresh.cpft.admin.web.backend.dto.truckOwner.TruckOwnerForTruckOwnerListDTO;
import kr.co.teamfresh.cpft.admin.web.backend.service.truckOwner.TruckOwnerService;
import kr.co.teamfresh.cpft.common.model.response.PageReqRes;
import kr.co.teamfresh.cpft.common.model.response.SingleResult;
import kr.co.teamfresh.cpft.common.service.ResponseService;
import kr.co.teamfresh.cpft.model.entity.TruckOwner;
import kr.co.teamfresh.cpft.repository.UserJpaRepo;
import kr.co.teamfresh.cpft.repository.TruckOwner.TruckOwnerJpaRepo;
import lombok.RequiredArgsConstructor;

@Api(tags = { "6. TruckOwner" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/truckOwner")
public class TruckOwnerController {

	Logger logger = LoggerFactory.getLogger(TruckOwnerController.class);
	private final ResponseService responseService;
	private final TruckOwnerService truckOwnerService;
	private final UserJpaRepo userJpaRepo;
	private final TruckOwnerJpaRepo truckOwnerJpaRepo;

	@ApiOperation(value = "오더가 있는 지원자(차주) 조회", notes = "차주 중 특정 오더를 지원한 사용자를 조회한다.")
	@GetMapping("/order/{orderSeq}")
	public PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> listTruckOwnerBydOrderSeq(
			@PathVariable Integer orderSeq, 
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerForTruckOwnerListDTO> page) {
		return responseService.getPageResult(page, truckOwnerService.findAllByOrdersOrderSeqOrderByUserUserSeq(orderSeq, page), TruckOwnerForTruckOwnerListDTO.class);	
	}

	@ApiOperation(value = "모든 차주 조회", notes = "데이터에 등록된 모든 차주와 차주의 모든 오더를 조회한다.")
	@GetMapping
	public PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> listTruckOwner(
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerForTruckOwnerListDTO> page) {
		return responseService.getPageResult(page, truckOwnerService.findAllByOrderByUserUserSeq(page), TruckOwnerForTruckOwnerListDTO.class);	
	}

	@ApiOperation(value = "채용 완료된 차주 조회(추후에  퇴사 정보가 추가된다.)", notes = "데이터에 등록된 차주 중 채용완료된 차주와 오더를 조회한다.")
	@GetMapping("/order/status/{orderStatus}/orderTruckOwner/status/{orderTruckOwnerStatus}")
	public PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> listTruckOwnerBydOrderStatus(@PathVariable String orderStatus, @PathVariable String orderTruckOwnerStatus, 
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerForTruckOwnerListDTO> page) {
		List<TruckOwner> t = truckOwnerService.findAllByOrderTruckOwnerStatusAndOrderStatusOrderByUserUserSeq(orderTruckOwnerStatus, orderStatus, page).getContent();
		return responseService.getPageResult(page, truckOwnerService.findAllByOrderTruckOwnerStatusAndOrderStatusOrderByUserUserSeq(orderTruckOwnerStatus, orderStatus, page), TruckOwnerForTruckOwnerListDTO.class);	
	}
	
	@ApiOperation(value = "차주관리 - 차주정보(리스트) 페이지 조회", notes = "차주정보(리스트)를 조회한다")
	@GetMapping("/truckOwnerInfoList")
	public PageReqRes<TruckOwner, TruckOwnerForTruckOwnerListDTO> truckOwnerInfoListAll(
			@ApiParam(value = "오더 지원자 페이징 정보", required = true) @ModelAttribute PageReqRes<TruckOwner,TruckOwnerForTruckOwnerListDTO> page) {
		return responseService.getPageResult(page, truckOwnerService.findAllByOrderByUserUserSeq(page), TruckOwnerForTruckOwnerListDTO.class);	
	}
	
	@ApiOperation(value = "차주관리 - 차주정보 상세보기 페이지 조회", notes = "차주 상세정보를 조회한다")
	@GetMapping("/truckOwnerInfoDetail/{userSeq}")
	public SingleResult<TruckOwnerCommonInfoDTO> truckOwnerInfoDetail(@ApiParam(value = "유저SEQ", required = true) @PathVariable Integer userSeq) {
		return responseService.getSingleResult(truckOwnerService.findTruckOwnerCommonInfo(userSeq));
	}
	
	@ApiOperation(value = "test업데이트", notes = "업데이트")
	@GetMapping("/truckOwnerInfoUpdate")
	public  SingleResult<TruckOwner> update() {
		TruckOwner truck = TruckOwner.builder().telno("454545").userSeq(2).build();
		truckOwnerJpaRepo.save(truck);
		return responseService.getSingleResult(truck);
	}
	
}
