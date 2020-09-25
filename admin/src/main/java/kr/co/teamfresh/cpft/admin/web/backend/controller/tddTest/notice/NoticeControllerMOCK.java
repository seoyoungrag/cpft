package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.notice;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class NoticeControllerMOCK {
	
	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new NoticeControllerTest()).build();
	}
	
	// 공지사항 리스트
	@Test
	public void mockMvcGetNoticeList() throws Exception {
		System.out.println("============ 공지사항 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/notice/getNoticeList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getNoticeList"));
		System.out.println("============ 공지사항 리스트 END ============\n");
	}
	// 공지사항 상세보기
	@Test
	public void mockMvcGetNoticeDetail() throws Exception {
		System.out.println("============ 공지사항 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/notice/getNoticeDetail").param("noSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getNoticeDetail1"));
		System.out.println("============ 공지사항 상세보기 END ============\n");
	}
	// 공지사항 insert
	@Test
	public void mockMvcInsertNotice() throws Exception {
		System.out.println("============ 공지사항 insert START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/notice/insertNotice"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("insertNotice"));
		System.out.println("============ 공지사항 insert END ============\n");
	}
	// 공지사항 update
	@Test
	public void mockMvcUpdateNotice() throws Exception {
		System.out.println("============ 공지사항 update START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/notice/updateNotice"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updateNotice"));
		System.out.println("============ 공지사항 update END ============\n");
	}
	// 공지사항 delete
	@Test
	public void mockMvcDeleteNotice() throws Exception {
		System.out.println("============ 공지사항 delete START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/notice/deleteNotice").param("noSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("deleteNotice1"));
		System.out.println("============ 공지사항 delete END ============\n");
	}
	// PUSH 리스트
	@Test
	public void mockMvcGetPushList() throws Exception {
		System.out.println("============ PUSH 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/notice/getPushList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getPushList"));
		System.out.println("============ PUSH 리스트 END ============\n");
	}
	// PUSH 상세보기
	@Test
	public void mockMvcGetPushDetail() throws Exception {
		System.out.println("============ PUSH 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/notice/getPushDetail").param("puSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getPushDetail1"));
		System.out.println("============ PUSH 상세보기 END ============\n");
	}
	// PUSH insert
	@Test
	public void mockMvcInsertPush() throws Exception {
		System.out.println("============ PUSH insert START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/notice/insertPush"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("insertPush"));
		System.out.println("============ PUSH insert END ============\n");
	}
	// PUSH update
	@Test
	public void mockMvcUpdatePush() throws Exception {
		System.out.println("============ PUSH update START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.post("/notice/updatePush"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("updatePush"));
		System.out.println("============ PUSH update END ============\n");
	}
	// PUSH delete
	@Test
	public void mockMvcDeletePush() throws Exception {
		System.out.println("============ PUSH delete START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/notice/deletePush").param("puSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("deletePush1"));
		System.out.println("============ PUSH delete END ============\n");
	}

}
