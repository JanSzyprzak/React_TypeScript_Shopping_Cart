const CURRENCY_FORMATTEER = new Intl.NumberFormat(undefined, {
    currency: "PLN",
    style: "currency",
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTEER.format(number)
} 