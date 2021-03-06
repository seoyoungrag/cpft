package kr.co.teamfresh.cpft.truckowner.web.backend.controller.v1;

import kr.co.teamfresh.cpft.model.dto.code.CodeDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.truckowner.web.backend.service.code.CodeService;
import kr.co.teamfresh.cpft.common.model.response.ListResult;
import kr.co.teamfresh.cpft.common.service.ResponseService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "9. Code" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/mobile/code")
public class MobileCodeController {

	private final CodeService codeService;
	private final ResponseService responseService;

	@ApiOperation(value = "모든 코드 조회", notes = "모든 코드를 조회한다.")
	@GetMapping
	public ListResult<CodeDTO> codes() {
		return responseService.getListResult(codeService.findAllCodes());
	}

}
