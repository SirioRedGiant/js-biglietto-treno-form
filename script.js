//note Seleziono il bottone dall'HTML
const btnCalculate = document.getElementById("calculate");

//note Resto in ascolto del click sul bottone
btnCalculate.addEventListener("click", function () {
  //note     1. Raccolta dati dagli input
  const name = document.getElementById("user-name").value;
  const km = parseFloat(document.getElementById("km").value);
  const age = parseInt(document.getElementById("age").value);
  const pricePerKm = 0.21;

  //*     2. Calcolo prezzo pieno del biglietto
  let totalPrice = km * pricePerKm;
  let ticketPriceOffer = "biglietto standard";

  //^     3. Applicazione sconti in base all'età
  if (age - bracket === "minor") {
    // Sconto 20% per minorenni
    totalPrice = totalPrice - totalPrice * 0.2;
    ticketPriceOffer = "Minor-ticket (20%)";
  } else if (age - bracket > "senior") {
    // Sconto 40% per over 65
    totalPrice = totalPrice - totalPrice * 0.4;
    ticketPriceOffer = "Over 65 (40%)";
  }
  // Sconto non applicate agli adulti

  //!     4. Output finale in console con 2 decimali
  console.log("Chilometri impostati:", km);
  console.log("Età impostata:", age);
  console.log("Prezzo finale: €", totalPrice.toFixed(2));
  document.getElementById("display-name").innerText = " " + name;
  document.getElementById("display-kilometers").innerText = " " + km + " km";
  document.getElementById("display-provided-offer").innerText =
    " " + ticketPriceOffer;
  document.getElementById("display-ticket-price").innerText =
    " " + totalPrice.toFixed(2) + " €";

  console.log(
    "Prezzo finale calcolato per " + name + ": €" + totalPrice.toFixed(2)
  );
});
