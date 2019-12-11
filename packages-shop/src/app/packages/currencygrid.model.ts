
export class CurrencyGrid {
  constructor(
    public currencyRates: Map<String, number> = new Map<String, number>([['USD', 1],
      ['GBP', 0.76], ['EUR', 0.90], ['INR', 71]]),
    public currencySymbols: Map<String, String> = new Map<String, String>([['USD', '$'],
      ['GBP', '£'], ['EUR', '€'], ['INR', '₹']])
  ) { }
}
