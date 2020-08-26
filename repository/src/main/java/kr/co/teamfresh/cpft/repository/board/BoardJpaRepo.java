package kr.co.teamfresh.cpft.repository.board;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.board.Board;

public interface BoardJpaRepo extends JpaRepository<Board, Long> {
	Board findByName(String name);
}