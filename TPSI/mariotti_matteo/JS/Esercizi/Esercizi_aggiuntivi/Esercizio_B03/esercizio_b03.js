x = [2, 6, 76, 24, 45, 3]

function operazione(x){
    Lunghezza = x.length
    somma = x.reduce((a, b) => a +b, 0);
    media = somma / Lunghezza
    console.log(media, somma)
    return(media, somma)
}

operazione(x)