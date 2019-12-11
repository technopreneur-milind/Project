package com.technopreneur.ecommerce.api;

import com.technopreneur.ecommerce.model.CurrencyGrid;
import com.technopreneur.ecommerce.model.Package;
import com.technopreneur.ecommerce.service.CurrencyService;
import com.technopreneur.ecommerce.service.PackagesService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ecommerce/currency")
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @RequestMapping
    public CurrencyGrid getPackage(@RequestParam(value ="base", required = false) String base)
    {
        return currencyService.getCurrencyConversionGrid(StringUtils.isBlank(base) ? "USD": base);
    }


}
