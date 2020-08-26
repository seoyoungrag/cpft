package kr.co.teamfresh.cpft.common.config.security;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kr.co.teamfresh.cpft.common.advice.exception.CUserNotFoundException;
import kr.co.teamfresh.cpft.model.entity.common.CacheKey;
import kr.co.teamfresh.cpft.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

	private final UserJpaRepo userJpaRepo;

	@Cacheable(value = CacheKey.USER, key = "#userPk", unless = "#result == null")
	public UserDetails loadUserByUsername(String userPk) {
		return userJpaRepo.findById(Integer.valueOf(userPk)).orElseThrow(CUserNotFoundException::new);
	}

}