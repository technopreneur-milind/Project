package com.technopreneur.ecommerce.service;

import com.technopreneur.ecommerce.model.CurrencyGrid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Map;

@Service
public class CurrencyService {

    @Autowired
    private RestTemplate restTemplate;

    public CurrencyGrid getCurrencyConversionGrid(String base)
    {
        Map<String,Object> currencyMap =  restTemplate.getForObject("https://api.exchangeratesapi.io/latest?base="+base, Map.class);
        Map<String, BigDecimal> rateMap =(Map<String,BigDecimal>) currencyMap.get("rates");
        CurrencyGrid currencyGrid = new CurrencyGrid(rateMap);
        return currencyGrid;
    }
}
