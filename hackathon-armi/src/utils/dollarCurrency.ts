export const dollarCurrency = (value: number) =>{
    return new Intl.NumberFormat("en-us",{style: 'currency',currencyDisplay: "symbol",currency: "USD"}).format(value)
}