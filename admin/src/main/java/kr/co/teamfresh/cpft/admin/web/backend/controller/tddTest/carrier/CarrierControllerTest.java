package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.carrier;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.teamfresh.cpft.model.entity.mock.carrier.CarrierCommon;

@RestController
@RequestMapping("/test")
public class CarrierControllerTest {
	// 운송사관리 리스트
	@GetMapping("/carrier/getCarrierInfoList")
	public String getCarrierInfoList() {
		return "getCarrierInfoList";
	}
	// 운송사관리 상세보기 - Common(기본정보)
	@GetMapping("/carrier/getCarrierInfoCommon")
	public CarrierCommon getCarrierInfoCommon(@RequestParam Integer ciSeq) {
		CarrierCommon obj = null;
		switch(ciSeq) {
			case 1:
				obj = new CarrierCommon(1, "팀프레시", "이성일", "561-88-31138", "W00001", "02-888-8988", "09:00~18:00", "Y");
				break;
			case 2:
				obj = new CarrierCommon(2, "마켓컬리", "이성일", "422-32-1138", "W00521", "02-623-7788", "09:00~18:00", "Y");
				break;
			case 3:
				obj = new CarrierCommon(3, "CJ홈쇼핑", "이성일", "852-18-323", "W00301", "02-766-5252", "09:00~18:00", "Y");
				break;
			default:
				break;
		}
		return obj;
	}
	// 운송사관리 상세보기 - 담당자 정보  ==========================================
	@GetMapping("/carrier/getCarrierInfoDetail")
	public String getCarrierInfoDetail(@RequestParam Integer ciSeq) {
		return "getCarrierInfoDetail" + ciSeq;
	}
	// 운송사관리 update - 기본정보
	@PostMapping("/carrier/updateCarrierInfoDetail")
	public String updateCarrierInfoDetail() {
		return "updateCarrierInfoDetail";
	}
	// 운송사관리 상세보기 - 계약정보 ============================================
	@GetMapping("/carrier/getCarrierInfoContract")
	public String getCarrierInfoContract(@RequestParam Integer ciSeq) {
		return "getCarrierInfoContract" + ciSeq;
	}
	// 운송사관리 update - 계약정보
	@PostMapping("/carrier/updateCarrierInfoContract")
	public String updateCarrierInfoContract() {
		return "updateCarrierInfoContract";
	}
	// 운송사관리 상세보기 - 결제정보 ===========================================
	@GetMapping("/carrier/getCarrierInfoPayment")
	public String getCarrierInfoPayment(@RequestParam Integer ciSeq) {
		return "getCarrierInfoPayment" + ciSeq;
	}
	// 운송사관리 update - 결제정보
	@PostMapping("/carrier/updateCarrierInfoPayment")
	public String updateCarrierInfoPayment() {
		return "updateCarrierInfoPayment";
	}
	// 운송사관리 상세보기 - 계정관리 =====================================================
	@GetMapping("/carrier/getCarrierInfoAccountManagement")
	public String getCarrierInfoAccountManagement(@RequestParam Integer ciSeq) {
		return "getCarrierInfoAccountManagement" + ciSeq;
	}
	// 운송사관리 update - 계정관리
	@PostMapping("/carrier/updateCarrierInfoAccountManagement")
	public String updateCarrierInfoAccountManagement() {
		return "updateCarrierInfoAccountManagement";
	}
}
