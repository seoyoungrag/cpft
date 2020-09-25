package kr.co.teamfresh.cpft.admin.web.backend.controller.tddTest.notice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoticeControllerTest {
	// 공지사항 리스트
	@GetMapping("/notice/getNoticeList")
	public String getNoticeList() {
		return "getNoticeList";
	}
	// 공지사항 상세보기
	@GetMapping("/notice/getNoticeDetail")
	public String getNoticeDetail(@RequestParam Integer noSeq) {
		return "getNoticeDetail" + noSeq;
	}
	// 공지사항 insert
	@PostMapping("/notice/insertNotice")
	public String insertNotice() {
		return "insertNotice";
	}
	// 공지사항 update
	@PostMapping("/notice/updateNotice")
	public String updateNotice() {
		return "updateNotice";
	}
	// 공지사항 delete
	@GetMapping("/notice/deleteNotice")
	public String deleteNotice(@RequestParam Integer noSeq) {
		return "deleteNotice" + noSeq;
	}
	// PUSH 리스트 ====================
	@GetMapping("/notice/getPushList")
	public String getPushList() {
		return "getPushList";
	}
	// PUSH 상세보기
	@GetMapping("/notice/getPushDetail")
	public String getPushDetail(@RequestParam Integer puSeq) {
		return "getPushDetail" + puSeq;
	}
	// PUSH insert
	@PostMapping("/notice/insertPush")
	public String insertPush() {
		return "insertPush";
	}
	// PUSH update
	@PostMapping("/notice/updatePush")
	public String updatePush() {
		return "updatePush";
	}
	// PUSH delete
	@GetMapping("/notice/deletePush")
	public String deletePush(@RequestParam Integer puSeq) {
		return "deletePush" + puSeq;
	}

}
