package kr.co.teamfresh.cpft.admin.web.backend;

import java.net.MalformedURLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.baroservice.api.BarobillApiProfile;
import com.baroservice.api.BarobillApiService;

@SpringBootConfiguration
@EnableCaching
@EntityScan("kr.co.teamfresh.cpft.model.entity")
@EnableJpaRepositories("kr.co.teamfresh.cpft.repository")
@ComponentScan({"kr.co.teamfresh.cpft"})
@EnableJpaAuditing
@SpringBootApplication
@EnableAutoConfiguration
public class AdminBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminBackendApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}
	
	@Bean
	public BarobillApiService barobillApiService() throws MalformedURLException {
		return new BarobillApiService(BarobillApiProfile.TESTBED);
	}
}