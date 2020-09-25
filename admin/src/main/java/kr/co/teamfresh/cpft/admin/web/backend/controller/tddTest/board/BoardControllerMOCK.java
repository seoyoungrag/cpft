package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.board;

import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
public class BoardControllerMOCK {

	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new BoardControllerTest()).build();
	}
	
	// 게시글 리스트
	@Test
	public void mockMvcGetOrderBoardList() throws Exception {
		System.out.println("============ 게시글 리스트 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/board/getOrderBoardList"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getOrderBoardList"));
		System.out.println("============ 게시글 리스트 END ============\n");
	}
	// 게시글 상세보기
	@Test
	public void mockMvcGetOrderBoardDetail() throws Exception {
		System.out.println("============ 게시글 상세보기 START ============\n");
		this.mockMvc.perform(MockMvcRequestBuilders.get("/board/getOrderBoardDetail").param("boSeq", "1"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andExpect(MockMvcResultMatchers.content().string("getOrderBoardDetail1"));
		System.out.println("============ 게시글 상세보기 END ============\n");
	}
	
}
