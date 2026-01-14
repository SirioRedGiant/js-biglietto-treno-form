//note Seleziono il bottone dall'HTML
const btnCalculate = document.getElementById("calculate");
const btnReset = document.getElementById("reset");

//note Resto in ascolto del click sul bottone
btnCalculate.addEventListener("click", function () {
  //**    1. Raccolta dati dagli input
  const name = document.getElementById("user-name").value;
  const km = parseFloat(document.getElementById("km").value);
  const ageBracket = document.getElementById("age-bracket").value;
  const pricePerKm = 0.21;

  // Validazione: controlla che il nome non sia vuoto e i km siano validi
  if (name === "" || isNaN(km) || km <= 0) {
    alert(
      "Per favore, inserisci un nome valido e un numero di chilometri maggiore di 0."
    );
    return; // Interrompe l'esecuzione
  }

  //*     2. Calcolo prezzo pieno del biglietto
  let totalPrice = km * pricePerKm;
  let ticketPriceOffer = "biglietto standard";

  //^     3. Applicazione sconti in base all'età
  if (ageBracket === "minor") {
    // Sconto 20% per minorenni
    totalPrice = totalPrice - totalPrice * 0.2;
    ticketPriceOffer = "Minor-ticket (20%)";
  } else if (ageBracket === "senior") {
    // Sconto 40% per over 65
    totalPrice = totalPrice - totalPrice * 0.4;
    ticketPriceOffer = "Over 65 (40%)";
  }
  // Sconto non applicate agli adulti

  //fixed Generatore numero della carrozza e del binario
  const numbCarrozza = Math.floor(Math.random() * 23) + 1;
  const numbBinario = Math.floor(Math.random() * 9) + 1;

  //!     Stampa in pagina e mostra il biglietto
  document.getElementById("ticket-title").style.display = "block";
  document.getElementById("ticket-area").style.display = "block";

  // Assegnazione valori ai campi del biglietto
  document.getElementById("display-name").innerText = " " + name;
  document.getElementById("display-provided-offer").innerText =
    " " + ticketPriceOffer;
  document.getElementById("display-numbCarrozza").innerText = numbCarrozza;
  document.getElementById("display-numbBinario").innerText = numbBinario;
  document.getElementById("display-ticket-price").innerText =
    " " + totalPrice.toFixed(2) + " €";
});

//note Funzione  per il pulsante Annulla
btnReset.addEventListener("click", function () {
  document.getElementById("user-name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("age-bracket").value = "adult";
  document.getElementById("ticket-title").style.display = "none";
  document.getElementById("ticket-area").style.display = "none";
});
