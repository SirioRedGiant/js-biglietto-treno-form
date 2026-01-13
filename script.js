//note Seleziono il bottone dall'HTML
const btnCalculate = document.getElementById("calculate");

//note Resto in ascolto del click sul bottone
btnCalculate.addEventListener("click", function () {
  //note     1. Raccolta dati dagli input
  const km = parseFloat(document.getElementById("km").value);
  const age = parseInt(document.getElementById("age").value);
  const pricePerKm = 0.21;
  const name = document.getElementById("user-name").value;

  //*     2. Calcolo prezzo pieno del biglietto
  const totalPrice = km * pricePerKm;
  const ticketPriceOffer = "biglietto standard";

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
  document.getElementById("display-name").innerText = " " + name;
  document.getElementById("display-kilometers").innerText = " " + km;
  document.getElementById("display-provided-offer").innerText =
    " " + ticketPriceOffer;
  document.getElementById("display-ticket-price").innerText = " " + totalPrice;

  console.log(
    "Prezzo finale calcolato per " + name + ": €" + totalPrice.toFixed(2)
  );
});
