package kr.co.teamfresh.cpft.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.User;

public interface UserJpaRepo extends JpaRepository<User, Integer> {
	Optional<User> findByUserLoginId(String id);

	Optional<User> findByUserEmail(String email);
	
	User findByUserSeq(String userSeq);

	List<User> findAllByUserRolesRolePKRole(String role);
}
