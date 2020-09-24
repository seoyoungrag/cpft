package kr.co.teamfresh.cpft.carrier.web.backend.controller.v1;

import kr.co.teamfresh.cpft.model.dto.code.CodeCtgryDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.teamfresh.cpft.carrier.web.backend.service.code.CodeService;
import kr.co.teamfresh.cpft.common.model.response.ListResult;
import kr.co.teamfresh.cpft.common.service.ResponseService;
import lombok.RequiredArgsConstructor;

@Api(tags = { "4. Code" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/code")
public class CodeController {

	private final CodeService codeService;
	private final ResponseService responseService;

	@ApiOperation(value = "모든 코드 조회", notes = "모든 코드를 조회한다.")
	@GetMapping
	public ListResult<CodeCtgryDTO> codes() {
		return responseService.getListResult(codeService.findAllCodesWithCtgry());
	}

}
