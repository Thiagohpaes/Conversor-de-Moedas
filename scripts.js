const convertButton = document.querySelector(".convert-button");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValuetoConverted = document.querySelector(".currency-value1");
  const currencyValueConverted = document.querySelector(".currency-value2");
  const currencySelect1 = document.querySelector(".currency-select1");
  const currencySelect2 = document.querySelector(".currency-select2");
  const dolarToday = 4.9;
  const euroToday = 5.28;
  const librasToday = 6.04;
  const bitocoinToday = 177.812;
  const realToday = 1.0
  


  if (currencySelect1.value == "dolar") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
    
  }

  if (currencySelect1.value == "euro") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect1.value == "libras") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / librasToday);
  }

  if (currencySelect1.value == "bitcoin") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitocoinToday);
  }

  if (currencySelect1.value == "real") {
    currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / realToday);
  }


  // --------------------------------------------------------------

  if (currencySelect2.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect2.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect2.value == "libras") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / librasToday);
  }

  if (currencySelect2.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitocoinToday);
  }

  if (currencySelect2.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / realToday);
  }



  function changeCurrency() {
    const currencyName1 = document.getElementById("currency-name1");
    const currencyName2 = document.getElementById("currency-name2");
    const currencyImage1 = document.querySelector(".currency-image1");
    const currencyImage2 = document.querySelector(".currency-image2");
   


    if (currencySelect1.value == "real") {
      currencyName1.innerHTML = "real";
      currencyImage1.src = "./assets/real.png";
    }
    
    if (currencySelect1.value == "dolar") {
      currencyName1.innerHTML = "Dólar americano";
      currencyImage1.src = "./assets/dollar.png";
      
    }

    if (currencySelect1.value == "euro") {
      currencyName1.innerHTML = "Euro";
      currencyImage1.src = "./assets/euro1.png";
    }

    if (currencySelect1.value == "libras") {
      currencyName1.innerHTML = "Libras";
      currencyImage1.src = "./assets/libra.png";
    }

    if (currencySelect1.value == "bitcoin") {
      currencyName1.innerHTML = "Bitcoin";
      currencyImage1.src = "./assets/bitcoin.png";
    }
  


  // ____________________________________________________

  if (currencySelect2.value == "real") {
    currencyName2.innerHTML = "real";
    currencyImage2.src = "./assets/real.png";
  }
  
  if (currencySelect2.value == "dolar") {
    currencyName2.innerHTML = "Dólar americano";
    currencyImage2.src = "./assets/dollar.png";
  }

  if (currencySelect2.value == "euro") {
    currencyName2.innerHTML = "Euro";
    currencyImage2.src = "./assets/euro1.png";
  }

  if (currencySelect2.value == "libras") {
    currencyName2.innerHTML = "Libras";
    currencyImage2.src = "./assets/libra.png";
  }

  if (currencySelect2.value == "bitcoin") {
    currencyName2.innerHTML = "Bitcoin";
    currencyImage2.src = "./assets/bitcoin.png";
  }
  convertValues();
}

  currencySelect1.addEventListener("change", changeCurrency);
  currencySelect2.addEventListener("change", changeCurrency);
}

convertButton.addEventListener("click", convertValues);



