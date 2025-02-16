package com.airiel.product_management_system_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airiel.product_management_system_backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
