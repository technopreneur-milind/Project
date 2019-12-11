package com.technopreneur.ecommerce.api;

import com.technopreneur.ecommerce.model.Package;
import com.technopreneur.ecommerce.model.Product;
import com.technopreneur.ecommerce.service.PackagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ecommerce/packages")
public class PackageController {

    @Autowired
    private PackagesService packagesService;

    @RequestMapping
    public List<Package> search()
    {
        return packagesService.search();
    }
    @RequestMapping("/{id}")
    public Package getPackage(@PathVariable String id)
    {
        return packagesService.getPackage(Integer.valueOf(id));
    }

    @RequestMapping(method = RequestMethod.POST)
    public Package createPackage(@RequestBody Package package1)
    {
        //TODO: return packagesService.createPackage(package1);
        return Package.builder().build();
    }

    @RequestMapping(value ="/{id}",method = RequestMethod.PUT)
    public Package updatePackage(@RequestBody Package package1)
    {
        //TODO: return packagesService.updatePackage(package1);
        return Package.builder().build();
    }

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    public Package deletePackage(@RequestBody Package package1)
    {
        //TODO: return packagesService.deletePackage(package1);
        //Strict Authentication
        return Package.builder().build();
    }




}
