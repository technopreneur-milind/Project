package com.technopreneur.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
public class CurrencyGrid {
    private Map<String, BigDecimal> currencyRates = new HashMap<>();
}
