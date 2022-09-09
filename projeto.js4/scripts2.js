const button = document.getElementById("convert-value")
const select = document.getElementById("convert-currency")

const dolar = 5.21
const euro = 5.22
const bitcoin = 100.38


const convertValue = () => {

    const valueInReais = document.getElementById("value-reais").value
    const real = document.getElementById("reais")
    const currency = document.getElementById("dolar")


    real.innerHTML = new Intl.NumberFormat('PT-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    ).format(valueInReais)

    if (select.value === "US$ Dólar americano") {
        currency.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(valueInReais / dolar)
    }
    if (select.value === "€ Euro") {
        currency.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            }
        ).format(valueInReais / euro)
    }
    if (select.value === "Bitcoin") {
        currency.innerHTML = new Intl.NumberFormat('SV',
            {
                style: 'currency',
                currency: 'BTC'
            }
        ).format(valueInReais / bitcoin)
    }


}


convertCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./estados-unidos (1) 1.jpg"
    }


    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./euro.jpg"
    }

     if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./bitcoin.jpg"
    }

    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", convertCurrency)