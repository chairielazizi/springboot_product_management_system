package com.airiel.product_management_system_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ProductManagementSystemBackendApplication extends SpringBootServletInitializer {

	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ProductManagementSystemBackendApplication.class);
    }
	public static void main(String[] args) {
		SpringApplication.run(ProductManagementSystemBackendApplication.class, args);
	}

}
