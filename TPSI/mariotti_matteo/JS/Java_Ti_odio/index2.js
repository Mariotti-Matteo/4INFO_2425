// scrivi una funzione che data una stringa che rappresenta un numero in una base =< 9 restituisce il numero in decimale

/**
 * @param {number} base
 * @param {string} str
 */

const fn = (str, base) => {
    return str.split("").map(num => parseInt(num)).reverse().reduce((acc,  curr, posizione) => acc + base ** posizione * curr, 0)

}


console.log(fn("001010", 2))