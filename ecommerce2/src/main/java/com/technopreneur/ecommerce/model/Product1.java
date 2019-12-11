package com.technopreneur.ecommerce.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product1 {
    private String type;
    private String name;
    private String description;
    private String imagePath;
    private String imagePathSm;
    private Integer price;
    private Integer qty;
    private String id;
}
