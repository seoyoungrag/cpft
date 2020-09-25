package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.customerCenter;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class CustomerCenterControllerMOCK {
	
	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new CustomerCenterControllerTest()).build();
	}
	
	// 고객센터 리스트
	@Test
	public void mockMvcGetCsInfoList() throws Exception {
		System.out.println("============ 고객센터 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/customerCenter/getCsInfoList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCsInfoList"));
		System.out.println("============ 고객센터 리스트 END ============\n");
	}
	// 고객센터 상세보기
	@Test
	public void mockMvcGetCsInfoDetail() throws Exception {
		System.out.println("============ 고객센터 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/customerCenter/getCsInfoDetail").param("csSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getCsInfoDetail1"));
		System.out.println("============ 고객센터 상세보기 END ============\n");
	}
	// 고객센터 update - 상세보기
	@Test
	public void mockMvcUpdateCsInfoDetail() throws Exception {
		System.out.println("============ 고객센터 update - 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/customerCenter/updateCsInfoDetail"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateCsInfoDetail"));
		System.out.println("============ 고객센터 update - 상세보기 END ============\n");
	}
	// VOC 리스트
	@Test
	public void mockMvcGetVocManageList() throws Exception {
		System.out.println("============ VOC 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/customerCenter/getVocManageList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getVocManageList"));
		System.out.println("============ VOC 리스트 END ============\n");
	}
	// 고객센터 상세보기
	@Test
	public void mockMvcGetVocManageDetail() throws Exception {
		System.out.println("============ VOC 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/customerCenter/getVocManageDetail").param("vcSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getVocManageDetail1"));
		System.out.println("============ VOC 상세보기 END ============\n");
	}
	// 고객센터 update - 상세보기
	@Test
	public void mockMvcUpdateVocManageDetail() throws Exception {
		System.out.println("============ VOC update - 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/customerCenter/updateVocManageDetail"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateVocManageDetail"));
		System.out.println("============ VOC update - 상세보기 END ============\n");
	}
	// VOC insert
	@Test
	public void insertVocManage() throws Exception {
		System.out.println("============ VOC insert START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/customerCenter/insertVocManage"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("insertVocManage"));
		System.out.println("============ VOC insert END ============\n");	
	}
}
