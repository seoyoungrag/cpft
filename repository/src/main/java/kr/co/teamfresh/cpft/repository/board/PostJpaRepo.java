package kr.co.teamfresh.cpft.repository.board;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.board.Board;
import kr.co.teamfresh.cpft.model.entity.board.Post;

public interface PostJpaRepo extends JpaRepository<Post, Long> {
	List<Post> findByBoard(Board board);
}