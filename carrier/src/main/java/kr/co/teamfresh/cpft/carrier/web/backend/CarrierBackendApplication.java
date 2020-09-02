package kr.co.teamfresh.cpft.carrier.web.backend;

import java.net.MalformedURLException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletComponentScan;
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
@ComponentScan({"kr.co.teamfresh.cpft"})
@EnableJpaRepositories("kr.co.teamfresh.cpft.repository")
@ServletComponentScan(basePackages = "kr.co.teamfresh.cpft.common.config")
@EnableJpaAuditing
@SpringBootApplication
public class CarrierBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarrierBackendApplication.class, args);
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
