package com.airiel.product_management_system_backend.service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.airiel.product_management_system_backend.dto.ProductDto;
import com.airiel.product_management_system_backend.entity.Product;
import com.airiel.product_management_system_backend.mapper.ProductMapper;
import com.airiel.product_management_system_backend.repository.ProductRepository;
import com.airiel.product_management_system_backend.service.ProductService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService{
    private ProductRepository productRepository;

    @Override
    public ProductDto addProduct(ProductDto productDto) {
        Product product = ProductMapper.mapToProduct(productDto);
        Product savedProduct = productRepository.save(product);
        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(ProductMapper::mapToProductDto).toList();
    }

    @Override
    public ProductDto getProductById(Long id) {
        Product product = productRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("Product not found"));
        return ProductMapper.mapToProductDto(product);
    }

    @Override
    public ProductDto updateProduct(Long id, ProductDto productDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateProduct'");
    }

    @Override
    public void deleteProduct(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteProduct'");
    }

}
