function tipodato(x, y) {
    x.isInteger() ? console.log("Il valore è un numero") : console.log("Il valore non è un numero");
    typeof y === "string" ? console.log("Il valore é una stringa") : console.log("Il valore non è una stringa");
    y.trim()
}


tipodato(5, "Stringa")