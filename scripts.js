const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const select0 = document.getElementById('currency-select0')


const dolar = 5.32
const euro = 5.47
const bitcoin = 0.000011
const bitcoindol = 0.000064
const bitcoineur = 0.000065

const btcdol = 15766.52
const btceur = 15320.70
const btcrea = 83838.00


const convertValues = () => {

    const inputReais = document.getElementById('input-currency').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    //realValueText.innerHTML = inputReais

    if (select0.value === "R$ Real Brasileiro")
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)

    if (select0.value === "US$ Dólar Americano")
        realValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais)

    if (select0.value === "Euro €")
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais)

    if (select0.value === "Bitcoin")
        realValueText.innerHTML = (inputReais)



    //currencyValueText.innerHTML = inputReais / dolar

    //if (select.value === "R$ Real Brasileiro")
    //currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)






    if (select.value === "R$ Real Brasileiro" && select0.value === "R$ Real Brasileiro")
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais)

    if (select.value === "US$ Dólar Americano" && select0.value === "R$ Real Brasileiro")
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais / dolar)

    if (select.value === "Euro €" && select0.value === "R$ Real Brasileiro")
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais / euro)

    if (select.value === "Bitcoin" && select0.value === "R$ Real Brasileiro")
        currencyValueText.innerHTML = (inputReais * bitcoin)



    if (select.value === "US$ Dólar Americano" && select0.value === "US$ Dólar Americano")
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais)

    if (select.value === "R$ Real Brasileiro" && select0.value === "US$ Dólar Americano")
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais * dolar)

    if (select.value === "Euro €" && select0.value === "US$ Dólar Americano")
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format((dolar / euro) * inputReais)

    if (select.value === "Bitcoin" && select0.value === "US$ Dólar Americano")
        currencyValueText.innerHTML = (inputReais * bitcoindol)



    if (select.value === "Euro €" && select0.value === "Euro €")
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais)

    if (select.value === "R$ Real Brasileiro" && select0.value === "Euro €")
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais * euro)

    if (select.value === "US$ Dólar Americano" && select0.value === "Euro €")
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((euro / dolar) * inputReais)

    if (select.value === "Bitcoin" && select0.value === "Euro €")
        currencyValueText.innerHTML = (inputReais * bitcoineur)



    if (select.value === "Bitcoin" && select0.value === "Bitcoin")
        currencyValueText.innerHTML = (inputReais)

    if (select.value === "US$ Dólar Americano" && select0.value === "Bitcoin")
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais * btcdol)

    if (select.value === "R$ Real Brasileiro" && select0.value === "Bitcoin")
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais * btcrea)

    if (select.value === "Euro €" && select0.value === "Bitcoin")
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais * btceur)













}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'R$ Real Brasileiro') {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/brasil.png"
    }

    if (select.value === 'Euro €') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}


changeCurrency0 = () => {
    const currencyName0 = document.getElementById("currency-name0")
    const currencyImg0 = document.getElementById("currency-img0")

    if (select0.value === 'R$ Real Brasileiro') {
        currencyName0.innerHTML = "Real"
        currencyImg0.src = "./assets/brasil.png"
    }


    if (select0.value === 'Euro €') {
        currencyName0.innerHTML = "Euro"
        currencyImg0.src = "./assets/euro.png"
    }

    if (select0.value === 'US$ Dólar Americano') {
        currencyName0.innerHTML = "Dolar"
        currencyImg0.src = "./assets/eua.png"
    }

    if (select0.value === 'Bitcoin') {
        currencyName0.innerHTML = "Bitcoin"
        currencyImg0.src = "./assets/bitcoin.png"
    }

    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

select0.addEventListener('change', changeCurrency0)