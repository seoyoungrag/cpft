package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.truckOwner;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class TruckOwnerControllerMOCK {
	
private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new TruckOwnerControllerTest()).build();
	}
	
	// 차주관리 리스트
	@Test
	public void mockMvcGetTransPortList() throws Exception {
		System.out.println("============ 차주관리 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/truckOwner/getTruckOwnerInfoList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().string("getTruckOwnerInfoList"));
		System.out.println("============ 차주관리 리스트 END ============\n");
	}
	// 차주관리 상세보기 - Common
	@Test
	public void mockMvcGetTruckOwnerInfoCommon() throws Exception {
		System.out.println("============ 차주관리 상세보기 - Common START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/truckOwner/getTruckOwnerInfoCommon").param("toSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getTruckOwnerInfoCommon1"));
		System.out.println("============ 차주관리 상세보기 - Common END ============\n");
	}
	// 차주관리 상세보기 - 개인정보 =============================================================================
	@Test
	public void mockMvcGetTruckOwnerInfoDetail() throws Exception {
		System.out.println("============ 차주관리 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/truckOwner/getTruckOwnerInfoDetail").param("toSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getTruckOwnerInfoDetail1"));
		System.out.println("============ 차주관리 상세보기 END ============\n");
	}
	// 차주관리 update - 개인정보(Common)
	@Test
	public void mockMvcUpdateTruckOwnerInfoCommon() throws Exception {
		System.out.println("============ 차주관리 update - 개인정보(Common) START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/truckOwner/updateTruckOwnerInfoCommon"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateTruckOwnerInfoCommon"));
		System.out.println("============ 차주관리 update - 개인정보(Common) END ============\n");
	}
	// 차주관리 update - 사업자정보
	@Test
	public void mockMvcUpdateTruckOwnerInfoDetailBI() throws Exception {
		System.out.println("============ 차주관리 update - 사업자정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/truckOwner/updateTruckOwnerInfoDetailBI"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateTruckOwnerInfoDetailBI"));
		System.out.println("============ 차주관리 update - 사업자정보 END ============\n");
	}
	// 차주관리 update - 자격정보
	@Test
	public void mockMvcUpdateTruckOwnerInfoDetailCI() throws Exception {
		System.out.println("============ 차주관리 update - 자격정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/truckOwner/updateTruckOwnerInfoDetailCI"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateTruckOwnerInfoDetailCI"));
		System.out.println("============ 차주관리 update - 자격정보 END ============\n");
	}
	// 차주관리 update - 차량등록 정보
	@Test
	public void mockMvcUpdateTruckOwnerInfoDetailVI() throws Exception {
		System.out.println("============ 차주관리 update - 차량등록 정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/truckOwner/updateTruckOwnerInfoDetailVI"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateTruckOwnerInfoDetailVI"));
		System.out.println("============ 차주관리 update - 차량등록 정보 END ============\n");
	}
	// 차주관리 update - 결제정보
	@Test
	public void mockMvcUpdateTruckOwnerInfoDetailPI() throws Exception {
		System.out.println("============ 차주관리 update - 결제정보 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/truckOwner/updateTruckOwnerInfoDetailPI"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateTruckOwnerInfoDetailPI"));
		System.out.println("============ 차주관리 update - 결제정보 END ============\n");
	}	
	// 차주관리 상세보기 - 계정관리 ==================================================================================
	@Test
	public void mockMvcGetTruckOwnerInfoAccountManagement() throws Exception {
		System.out.println("============ 차주관리 상세보기 - 계정관리 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/truckOwner/getTruckOwnerInfoAccountManagement").param("toSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getTruckOwnerInfoAccountManagement1"));
		System.out.println("============ 차주관리 상세보기 - 계정관리 END ============\n");
	}
	// 차주관리 update - 계정관리
	@Test
	public void mockUpdateTruckOwnerInfoAccountManagement() throws Exception {
		System.out.println("============ 차주관리 update - 계정관리 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/truckOwner/updateTruckOwnerInfoAccountManagement"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateTruckOwnerInfoAccountManagement"));
		System.out.println("============ 차주관리 update - 계정관리 END ============\n");
	}
	
}
