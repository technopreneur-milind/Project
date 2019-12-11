package com.technopreneur.ecommerce.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {
    private Integer id;
    private String name;
    private Integer price;
    private String description;
}
