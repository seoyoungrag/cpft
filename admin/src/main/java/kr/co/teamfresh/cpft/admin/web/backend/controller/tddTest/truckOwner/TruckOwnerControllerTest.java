package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.truckOwner;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TruckOwnerControllerTest {
	// 차주관리 리스트
	@GetMapping("/truckOwner/getTruckOwnerInfoList")
	public String getTruckOwnerInfoList() {
		return "getTruckOwnerInfoList";
	}
	// 차주관리 상세보기 - Common
	@GetMapping("/truckOwner/getTruckOwnerInfoCommon")
	public String getCarrierInfoCommon(@RequestParam Integer toSeq) {
		return "getTruckOwnerInfoCommon" + toSeq;
	}
	// 차주관리 상세보기 - 개인정보 ==========================================
	@GetMapping("/truckOwner/getTruckOwnerInfoDetail")
	public String getTruckOwnerInfoDetail(@RequestParam Integer toSeq) {
		return "getTruckOwnerInfoDetail" + toSeq;
	}
	// 차주관리 update - 개인정보(Common)
	@PostMapping("/truckOwner/updateTruckOwnerInfoCommon")
	public String updateTruckOwnerInfoCommon() {
		return "updateTruckOwnerInfoCommon";
	}
	// 차주관리 update - 사업자정보
	@PostMapping("/truckOwner/updateTruckOwnerInfoDetailBI")
	public String updateTruckOwnerInfoDetailBI() {
		return "updateTruckOwnerInfoDetailBI";
	}
	// 차주관리 update - 자격정보
	@PostMapping("/truckOwner/updateTruckOwnerInfoDetailCI")
	public String updateTruckOwnerInfoDetailCI() {
		return "updateTruckOwnerInfoDetailCI";
	}
	// 차주관리 update - 차량등록 정보
	@PostMapping("/truckOwner/updateTruckOwnerInfoDetailVI")
	public String updateTruckOwnerInfoDetailVI() {
		return "updateTruckOwnerInfoDetailVI";
	}
	// 차주관리 update - 결제정보
	@PostMapping("/truckOwner/updateTruckOwnerInfoDetailPI")
	public String updateTruckOwnerInfoDetailPI() {
		return "updateTruckOwnerInfoDetailPI";
	}
	// 차주관리 상세보기 - 계정관리 =========================================================
	@GetMapping("/truckOwner/getTruckOwnerInfoAccountManagement")
	public String getTruckOwnerInfoAccountManagement(@RequestParam Integer toSeq) {
		return "getTruckOwnerInfoAccountManagement" + toSeq;
	}
	// 차주관리 update - 계정관리
	@PostMapping("/truckOwner/updateTruckOwnerInfoAccountManagement")
	public String updateTruckOwnerInfoAccountManagement() {
		return "updateTruckOwnerInfoAccountManagement";
	}
}
