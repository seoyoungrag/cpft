package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.calculate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculateControllerTest {
	// 운송료관리 리스트
	@GetMapping("/calculate/getTransPortList")
	public String getTransPortList() {
		return "getTransPortList";
	}
	// 운송료관리 상세보기
	@GetMapping("/calculate/getTransPortDetail")
	public String getTransPortDetail(@RequestParam Integer tpSeq) {
		return "getTransPortList" + tpSeq;
	}
	// 차주정산 리스트
	@GetMapping("/calculate/getTruckOwnerCalcList")
	public String getTruckOwnerCalcList() {
		return "getTruckOwnerCalcList";
	}

}
