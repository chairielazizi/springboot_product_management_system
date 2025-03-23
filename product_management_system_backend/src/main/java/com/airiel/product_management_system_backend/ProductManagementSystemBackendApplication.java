package com.airiel.product_management_system_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.airiel.product_management_system_backend.config.WebConfig;

@SpringBootApplication
@Import(WebConfig.class)
public class ProductManagementSystemBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(ProductManagementSystemBackendApplication.class, args);
	}

}
