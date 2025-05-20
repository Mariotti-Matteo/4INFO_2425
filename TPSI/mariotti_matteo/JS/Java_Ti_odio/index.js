/**
 * 
 * @param {string} str 
 * @param {number} num
 * @param {{str: string, num: Number, arr: []}} arr oggetto
 * @param {{str: string, num: Number, arr: number[]}[]} // array di oggetti
 * @param {numer | string} // entrambi
 * 
 */

const fn1 = (str, num, arr) => {
       
}

const isEven = (num) => num % 2 == 0;
// codice diverso

let str0 = "CIAO"


console.log(`Benvenuto al mio sito, ${str0}`);



// codice  ancora diverso

const lunghezza = 3;

Array.from({lenght : lunghezza}).forEach(_, row =>{
    console.log(" ".repeat(2 - row).concat("*").repeat(1 + row * 2))

}); // si aspetta un oggetto con una lunghezza


"".slice() // Accetta i numeri negativi, 
[1, 2, 3].slice() // restituiscimi la porzione di una stringa/array da indice m a indice n
"".substring() // NOn accetta numeri negativi


"".trim() // toglie gli spazi all'inzio e alla fine
 
let arr = [1, 2,3, 5]
arr[-1] // non si può negativo
arr.at(-1) // si può negativo



let arr1 = [1,2,3]
let arr2 = [2,23]

console.log({...arr1, ...arr2}) // "..." spread operator "Coletello che spalma la marmellata sul pane"

let array_lungo = ["M", "m"]
const [ nome, cognome] = array_lungo // DESTRUCTORING
console.log(nome, cognome)


.every() // Controlla che tutti gli elementi di un array rispettino una condizione

.fill() // cambia tutti i valori in un valore deciso da me, statico posso mettere un indice
Array.from({lenght: 5 }, (v, indice) => indice) // metodo statico della classe array

.filter() // tutti gli elementi rispettano una condizione se non lo fanno li tolgo

.find() // trova l'oggetto data una condizione e lo restituisce

.findIndex() // trova l'oggetto data una condizione e ne restituisce l'indice

.flat() // ho un array bidimensionale e lo rendo monodimensionale (ho un array di n dimensioni e lo rendo n-1 dimension) quante volte lo voglio ridurre glielo posso passare

.forEach // per ogni elemento eseguo una funzione

.includes(); // se include un oggetto da passato

.join() // é il contrario di split 
["c", "i", "a", "o"].join("") // il risultato sarà 'ciao' 
["c", "i", "a", "o"].join("-") // il risultato sarà 'c-i-a-o' 

.map() // Fa una mappatura dell'array

[1, 2, 3, 5].map(num => num **2) // mi restituira [1, 2, 9, 25]

.pop() // tolgo dal fondo e lo rimuovo dall'array (e ottengo così l'ultimo oggetto)

.push() // mette un valore che voglio didavantietro (in coda)

.reduce() // una callback function, riduco la dimensione di un array

numeri.reduce((acc, curr) => acc + curr, 0)

.reverse() // inverte l'ordine dell'array cambia propio l'array

let arr0 = [1, 2, 3]
let arra1 = arr0 // shallow copy non indipendente cambio una cambio tutte
let arra2 = JSON.parse(JSON.stringify(arr0)) // deep copy
let arra3 = [...arr0] // deep copy

.shift() // equivalente di .push() ma in testa
.unshift() // equivalente di .pop() ma in testa

.some() // controlla che almeno un oggetto rispetti la condzione

.sort() // ordina in base a come voglio io

[2, 1, 3].sort((a, b) => b - a) // decrescente
[2, 3 ,1].sort((a, b) => a + b) // crescente

// sort in automatico ordina in modo crescente e in ordine alfabetico

const mesi = ["gennaio", "febbraio"];

const mesiUtente = ["febbraio", "gennaio"]
mesiUtente.sort((a, b) => mesi.indexOf(a) - mesi.indexOf(b));// ordino in base alla lista precendete
mesiUtente.sort((a, b) => mesi.indexOf(a.toLowerCase()) - mesi.indexOf(b.toLowerCase()));// ordino in base alla lista precendete, indipendemente se é con CAPS o no

num.splice(indice, quanti_rimuoverne_a_partire_da_quell_indice, coso_sostitivo_n, coso_sostitivo_n_1, e_cosi_via) // Rimuove gli elementi da un array e se necessario ne sostituisce uno nuovo al loro posto


// MAP é UN OGGETTO

let mappa = new map() // Collezione di chiave valore

.set(chiave, valore) // imposta
.get() // Ottengo a partire dalla chiave
.has(chiave) // esiste qualcosa con quella chiave (restituirà un boolean)
.delete(chiave) // rimuove la chiave valore
.clear() // Rimuove tutto
.size() // dimensione


// I SET, un array di qualcosa !! NO DUPLICATI

.add()// imposta
.has(chiave) // esiste qualcosa con quella chiave (restituirà un boolean)
.delete(chiave) // rimuove la chiave valore
.clear() // Rimuove tutto
.size() // dimensione
.keys() // restituisce le chiavi
.values() // Restitusice 
.entries() // mi restituisce tutte le entries



// PROGRAMMAZIONE AD OGGETTI


class macchina {
    #altro
    constructor(modello, costo, altro, km){
    this.costo = costo; // pubblioc
    this.modello = modello; // pubblico
    this.#altro = altro; // una volta per convenzione si usava "_"
    this.km = km
    }

    inMoto(){ //Metodo pubblico
        console.log("Broom")
    }
    #attributoprivato(){ // metodo privato
        console.log("Ciao")
    }

    get chilometriPercorsi() { // attributo pubblico / speudo propietà
        return 72498+ 4234;
    }

    set chilometriPercorsi(val){ // assegno un valore / speudo propietà
        this.km = val + this.km
    }
}


const car = new macchina(toyota, 10000, ciao, 100)
car.costo
car.modello
car.inMoto()
macchina.chilometriPercorsi // GET
macchina.chilometriPercorsi = 1234 // SET



// Gestione degli errori


const fn = (num) =>{
    if (num % 2 == 0){
        throw new Error("Il numero è pari, possono essere solo dispari")
    }

    console.log(num)
}

try {
    fn(1)
} catch (error) {
    console.error(error.message) // uso message per non mettere tutto l'errore
    
}


