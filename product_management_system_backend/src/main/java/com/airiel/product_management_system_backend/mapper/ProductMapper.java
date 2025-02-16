package com.airiel.product_management_system_backend.mapper;

import com.airiel.product_management_system_backend.dto.ProductDto;
import com.airiel.product_management_system_backend.entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product) {
        return new ProductDto(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getPrice(),
                product.getImageUrl(),
                product.getQuantity()
        );
    }

    public static Product mapToProduct(ProductDto productDto) {
        return new Product(
                productDto.getId(),
                productDto.getName(),
                productDto.getDescription(),
                productDto.getPrice(),
                productDto.getImageUrl(),
                productDto.getQuantity()
        );
    }
}
