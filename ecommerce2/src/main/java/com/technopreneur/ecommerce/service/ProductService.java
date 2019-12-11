package com.technopreneur.ecommerce.service;

import com.google.common.collect.Lists;
import com.technopreneur.ecommerce.model.Package;
import com.technopreneur.ecommerce.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    public List<Product> search() {
        List<Product> products = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Product product1 = Product.builder()
                    .id(i)
                    .price(i * 100)
                    .description("Description for " + i)
                    .name("name" + i)
                    //.imagePath("imagePath" + i)
                    //.imagePathSm("imagePathsm" + i)
                    //.qty(i * 10)
                    //.type("type" + i)
                    .build();
            products.add(product1);
        }
        return products;
    }

    public Product getProduct(String id)
    {
        int i=999;
        Product product1 = Product.builder()
                .id(i)
                .price(i * 100)
                .description("Description for " + i)
                .name("name" + i)
                //.imagePath("imagePath" + i)
                //.imagePathSm("imagePathsm" + i)
                //.qty(i * 10)
                //.type("type" + i)
                .build();
        return product1;
    }

}
