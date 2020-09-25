package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.customerCenter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerCenterControllerTest {
	// 고객센터 리스트
	@GetMapping("/customerCenter/getCsInfoList")
	public String getCsInfoList() {
		return "getCsInfoList";
	}
	// 고객센터 상세보기
	@GetMapping("/customerCenter/getCsInfoDetail")
	public String getCsInfoDetail(@RequestParam Integer csSeq) {
		return "getCsInfoDetail" + csSeq;
	}
	// 고객센터 update - 상세보기
	@PostMapping("/customerCenter/updateCsInfoDetail")
	public String updateCsInfoDetail() {
		return "updateCsInfoDetail";
	}
	// VOC 리스트 ====================================
	@GetMapping("/customerCenter/getVocManageList")
	public String getVocManageList() {
		return "getVocManageList";
	}
	// VOC 상세보기
	@GetMapping("/customerCenter/getVocManageDetail")
	public String getVocManageDetail(@RequestParam Integer vcSeq) {
		return "getVocManageDetail" + vcSeq;
	}
	// VOC update - 상세보기
	@PostMapping("/customerCenter/updateVocManageDetail")
	public String updateVocManageDetail() {
		return "updateVocManageDetail";
	}
	// VOC insert
	@PostMapping("/customerCenter/insertVocManage")
	public String insertVocManage() {
		return "insertVocManage";
	}
}
