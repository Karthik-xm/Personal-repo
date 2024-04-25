const item = {
    name: 'shoes',
    size: {
      EU: 44,
      US: 18
    },
    status: 'live'
  };
  
  const { name, size, status } = item;
  const { EU, US } = size;
  
  console.log("Name:", name);
  console.log("Size (EU):", EU);
  console.log("Size (US):", US);
  console.log("Status:", status);
  
  function convertCurrency(amount) {
    const conversionRates = {
      USD: amount * 1.21,
      GBP: amount * 0.88,
      AUD: amount * 1.60,
      MXN: amount * 24.09
    };
    return conversionRates;
  }
  const { USD, GBP, AUD, MXN } = convertCurrency(100);
  console.log("USD:", USD);
  console.log("GBP:", GBP);
  console.log("AUD:", AUD);
  console.log("MXN:", MXN);
  