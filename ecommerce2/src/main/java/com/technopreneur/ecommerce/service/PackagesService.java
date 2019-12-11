package com.technopreneur.ecommerce.service;

import com.google.common.collect.Lists;
import com.technopreneur.ecommerce.model.Package;
import com.technopreneur.ecommerce.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PackagesService {
    private  List<Package> packages = new ArrayList<>();
    private  Map<Integer,Package> packageMap = new HashMap<>();

    public List<Package> search() {
        if(packages.isEmpty()){
            init();
        }
        return packages;
    }
    public Package getPackage(Integer id) {
        return packageMap.get(id);
    }

    private  void init(){
        int index =0;
        for (int i = 0; i < 4; i++) {
            String name = "package";
            Package package1 = Package.builder()
                    .id(new Long(index))
                    .name(name+index)
                    .description("Protection Package "+i+" - This is a description about Package ")
                    .image("/assets/images/" + name + ".jpeg")
                    .products(Lists.newArrayList(
                            Product.builder().id(100).name("Shield").description("This is description for Shield").price(100).build(),
                            Product.builder().id(101).name("Helmet").description("This is description for Helmet").price(200).build(),
                            Product.builder().id(101).name("Axe").description("This is description for Axe").price(200).build(),
                            Product.builder().id(101).name("Knife").description("This is description for Knife").price(200).build(),
                            Product.builder().id(101).name("Sword").description("This is description for Sword").price(200).build()))
                    .build();
            packageMap.put(index++,package1);
            packages.add(package1);

        }
        for (int i = 0; i < 4; i++) {
            String name = "package";
            Package package1 = Package.builder()
                    .id(new Long(index))
                    .name(name+index)
                    .description("Coin Package "+i+" - This is a description about Package ")
                    .image("/assets/images/" + name + ".jpeg")
                    .products(Lists.newArrayList(
                            Product.builder().id(100).name("Gold Coin").price(10000).build(),
                            Product.builder().id(101).name("Platinum Coin").price(20000).build(),
                            Product.builder().id(101).name("Silver Coin").price(1000).build()))
                    .build();
            packageMap.put(index++,package1);
            packages.add(package1);

        }
        for (int i = 0; i < 4; i++) {
            String name = "package";
            Package package1 = Package.builder()
                    .id(new Long(index))
                    .name(name+index)
                    .description("Bow Package "+i+" - This is a description about Package ")
                    .image("/assets/images/" + name + ".jpeg")
                    .products(Lists.newArrayList(
                            Product.builder().id(100).name("Bow").price(100000).build()))
                    .build();
            packageMap.put(index++,package1);
            packages.add(package1);

        }
    }

}
