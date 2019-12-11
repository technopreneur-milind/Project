package com.technopreneur.ecommerce.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Data
@Builder
public class Package {
    private Long id;
    private String name;
    private Integer price = 0;
    private String description;
    private List<Product> products;
    private String image;

    public static class PackageBuilder {
        private List<Product> products;
        public PackageBuilder products(List<Product> products)
        {
            this.products = products;
            if(!CollectionUtils.isEmpty(this.products))
            {
                price = products.stream().map(Product::getPrice).reduce(0, (a, b)-> a+b);
            }
            return this;
        }
    }
}
