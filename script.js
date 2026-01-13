//note Seleziono il bottone dall'HTML
const btnCalculate = document.getElementById("calculate");

//note Resto in ascolto del click sul bottone
btnCalculate.addEventListener("click", function () {
  //note     1. Raccolta dati dagli input
  const km = parseFloat(document.getElementById("km").value);
  const age = parseInt(document.getElementById("age").value);
  const pricePerKm = 0.21;

  //*     2. Calcolo prezzo pieno del biglietto
  let totalPrice = km * pricePerKm;

  //^     3. Applicazione sconti in base all'età
  if (age < 18) {
    // Sconto 20% per minorenni
    totalPrice = totalPrice - totalPrice * 0.2;
    console.log("sconto riservato ai minorenni (20%)");
  } else if (age > 65) {
    // Sconto 40% per over 65
    totalPrice = totalPrice - totalPrice * 0.4;
    console.log("sconto riservato ai over 65 (40%)");
  } else {
    // Sconto non applicate agli adulti
    console.log("Nessun sconto applicato");
  }

  //!     4. Output finale in console con 2 decimali
  console.log("Chilometri impostati:", km);
  console.log("Età impostata:", age);
  console.log("Prezzo finale: €", totalPrice.toFixed(2));
});
