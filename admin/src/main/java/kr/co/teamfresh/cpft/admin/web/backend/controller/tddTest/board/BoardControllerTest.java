package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.board;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardControllerTest {
	// 게시글 리스트
	@GetMapping("/board/getOrderBoardList")
	public String getOrderBoardList() {
		return "getOrderBoardList";
	}
	// 게시글 상세보기
	@GetMapping("/board/getOrderBoardDetail")
	public String getOrderBoardDetail(@RequestParam Integer boSeq) {
		return "getOrderBoardDetail" + boSeq;
	}
}
