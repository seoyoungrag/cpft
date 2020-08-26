package kr.co.teamfresh.cpft.repository.code;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.code.Code;

public interface CodeJpaRepo extends JpaRepository<Code, String> {

	List<Code> findAllByCodeUseYn(char c);

}
