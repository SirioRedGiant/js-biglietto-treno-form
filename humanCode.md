# Pseudo Codice

## Raccolta dati:

- Definisci il costo fisso di 0.21€ per ogni chilometro.

## Input dell'utente(Richiesta dati):

- Chiedi all'utente quanti chilometri vuole percorrere.
- Chiedi all'utente l'età del passeggero.

### Calcolo Base del prezzo pieno:

- Moltiplica i chilometri inseriti per 0.21 per ottenere il prezzo lordo.

#### Verifica Sconti in base all'età:

- SE l'età è minore di 18 anni:

*       Calcola uno sconto del 20% sul prezzo lordo.
*       Sottrai lo sconto dal prezzo lordo per ottenere il prezzo finale.

- ALTRIMENTI SE l'età è maggiore di 65 anni:

*       Calcola uno sconto del 40% sul prezzo lordo.
*       Sottrai lo sconto dal prezzo lordo per ottenere il prezzo finale.

- ALTRIMENTI (età compresa tra 18 e 65):

*       Il prezzo finale è uguale al prezzo lordo.

### Formattazione:

- Prendi il prezzo finale e arrotondalo a due cifre decimali.

# Output (Risultato):

- Mostra all'utente il prezzo finale calcolato.

## Esempio pratico di ragionamento:

- Input: 100km, 17 anni.
- Prezzo base: 100 * 0.21 = 21€
- Sconto (Minorenne): 21 * 0.20 = 4.20€
- Totale: 21 - 4.20 = 16.80€
