package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.carrier;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class CarrierControllerMOCK {

	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new CarrierControllerTest()).build();
	}
	
	// 운송사관리 리스트
	@Test
	public void mockMvcGetCarrierInfoList() throws Exception {
		System.out.println("============ 운송사관리 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/carrier/getCarrierInfoList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCarrierInfoList"));
		System.out.println("============ 운송료관리 리스트 END ============\n");
	}
	// 운송사관리 상세보기 - Common
	@Test
	public void mockMvcGetCarrierInfoCommon() throws Exception {
		System.out.println("============ 운송사관리 상세보기 - Common START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/carrier/getCarrierInfoCommon").param("ciSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCarrierInfoCommon1"));
		System.out.println("============ 운송사관리 상세보기 - Common END ============\n");
	}
	// 운송사관리 상세보기 - 기본정보 =============================================================================
	@Test
	public void mockMvcGetCarrierInfoDetail() throws Exception {
		System.out.println("============ 운송사관리 상세보기 - 기본정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/carrier/getCarrierInfoDetail").param("ciSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCarrierInfoDetail1"));
		System.out.println("============ 운송사관리 상세보기 - 기본정보 END ============\n");
	}
	// 운송사관리 update - 기본정보
	@Test
	public void mockMvcUpdateCarrierInfoDetail() throws Exception {
		System.out.println("============ 운송사관리 update - 기본정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/carrier/updateCarrierInfoDetail"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateCarrierInfoDetail"));
		System.out.println("============ 운송사관리 update - 기본정보 START ============\n");
	}
	// 운송사관리 상세보기 - 계약정보 ===============================================================================
	@Test
	public void mockMvcGetCarrierInfoContract() throws Exception {
		System.out.println("============ 운송사관리 상세보기 - 계약정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/carrier/getCarrierInfoContract").param("ciSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCarrierInfoContract1"));
		System.out.println("============ 운송사관리 상세보기 - 계약정보 END ============\n");
	}
	// 운송사관리 update - 계약정보
	@Test
	public void mockMvcUpdateCarrierInfoContract() throws Exception {
		System.out.println("============ 운송사관리 update - 계약정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/carrier/updateCarrierInfoContract"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateCarrierInfoContract"));
		System.out.println("============ 운송사관리 update - 계약정보 END ============\n");
	}
	// 운송사관리 상세보기 - 결제정보 ==============================================================================
	@Test
	public void mockMvcGetCarrierInfoPayment() throws Exception {
		System.out.println("============ 운송사관리 상세보기 - 결제정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/carrier/getCarrierInfoPayment").param("ciSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCarrierInfoPayment1"));
		System.out.println("============ 운송사관리 상세보기 - 결제정보 END ============\n");
	}
	// 운송사관리 update - 결제정보
	@Test
	public void mockMvcUpdateCarrierInfoPayment() throws Exception {
		System.out.println("============ 운송사관리 update - 결제정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/carrier/updateCarrierInfoPayment"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateCarrierInfoPayment"));
		System.out.println("============ 운송사관리 update - 결제정보 END ============\n");
	}
	// 운송사관리 상세보기 - 계정관리
	@Test
	public void getCarrierInfoAccountManagement() throws Exception {
		System.out.println("============ 운송사관리 상세보기 - 계정관리 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/carrier/getCarrierInfoAccountManagement").param("ciSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCarrierInfoAccountManagement1"));
		System.out.println("============ 운송사관리 상세보기 - 계정관리 END ============\n");
	}
	// 운송사관리 update - 결제정보
	@Test
	public void mockMvcUpdateCarrierInfoAccountManagement() throws Exception {
		System.out.println("============ 운송사관리 update - 계정관리 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/carrier/updateCarrierInfoAccountManagement"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateCarrierInfoAccountManagement"));
		System.out.println("============ 운송사관리 update - 계정관리 END ============\n");
	}
}
