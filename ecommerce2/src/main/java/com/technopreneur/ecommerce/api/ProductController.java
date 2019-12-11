package com.technopreneur.ecommerce.api;

import com.technopreneur.ecommerce.model.Package;
import com.technopreneur.ecommerce.model.Product;
import com.technopreneur.ecommerce.service.PackagesService;
import com.technopreneur.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ecommerce/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping
    public List<Product> search()
    {
        return productService.search();
    }
    @RequestMapping("/{id}")
    public Product getProduct(@PathVariable String id)
    {
        return productService.getProduct(id);
    }

}
