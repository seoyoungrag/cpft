package kr.co.teamfresh.cpft.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.teamfresh.cpft.model.entity.User;

public interface UserJpaRepo extends JpaRepository<User, Integer> {
	Optional<User> findByUserLoginId(String id);

	Optional<User> findByUserEmail(String email);
	
	User findByUserSeq(Integer userSeq);

	List<User> findAllByUserRolesRolePKRole(String role);
	
	Page<User> findAllByUserRolesRolePKRole(String role, Pageable pageable);
	
}
