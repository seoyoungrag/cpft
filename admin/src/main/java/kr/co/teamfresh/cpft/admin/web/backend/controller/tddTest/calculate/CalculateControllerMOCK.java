package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.calculate;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class CalculateControllerMOCK {

	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new CalculateControllerTest()).build();
	}
	
	// 운송료관리 리스트
	@Test
	public void mockMvcGetTransPortList() throws Exception {
		System.out.println("============ 운송료관리 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/calculate/getTransPortList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk()).andExpect(MockMvcResultMatchers.content().string("getTransPortList"));
		System.out.println("============ 운송료관리 리스트 END ============\n");
	}
	// 운송료관리 상세보기
	@Test
	public void mockMvcGetTransPortDetail() throws Exception {
		System.out.println("============ 운송료관리 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/calculate/getTransPortDetail").param("tpSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getTransPortList1"));
		System.out.println("============ 운송료관리 상세보기 END ============\n");
	}
	// 차주정산 리스트
	@Test
	public void mockMvcGetTruckOwnerCalcList() throws Exception {
		System.out.println("============ 차주정산 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/calculate/getTruckOwnerCalcList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getTruckOwnerCalcList"));
		System.out.println("============ 차주정산 리스트 END ============\n");
	}
}
