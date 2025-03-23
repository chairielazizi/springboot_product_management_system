package com.airiel.product_management_system_backend.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("https://springboot-product-management-system.onrender.com")
            .allowedMethods("*")
            .allowedHeaders("*");
    System.out.println("CORS configuration applied to /api/**");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
 
        registry.addResourceHandler("/**")
                .addResourceLocations("file:public/");
    }
}
