package com.airiel.product_management_system_backend.service;

import java.util.List;

import com.airiel.product_management_system_backend.dto.ProductDto;

public interface ProductService {
    ProductDto addProduct(ProductDto productDto);
    List<ProductDto> getAllProducts();
    ProductDto getProductById(Long id);
    ProductDto updateProduct(Long id, ProductDto productDto);
    void deleteProduct(Long id);
}
