package com.airiel.product_management_system_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Products_spring_react")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="Name")
    private String name;

    @Column(name = "Description", nullable = true)
    private String description;

    @Column(name = "Price")
    private Double price;

    @Column(name = "ImageUrl", nullable = true)
    private String imageUrl;

    @Column(name = "Quantity")
    private int quantity;
}
