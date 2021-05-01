// Snack 1
/* Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata.  */

/* const brand = [
    {
        nome: "Sony",
    },
    {
        nome: "Msi"
    },
    {
        nome: "Acer"
    },
    {
        nome: "Gucci"
    },
    {
        nome: "Prada"
    },
    {
        nome: "Balenciaga"
    },
    {
        nome: "McQueen"
    },
    {
        nome: "Versace"
    },
    {
        nome: "Ferrari"
    },
    {
        nome: "Lamborghini"
    },
]

const newBrand = brand.map((element) => {
    return{
        ...element,
        nome: element.nome.toLowerCase(),
        foundation: yearRandom(1900, 2000)
    }
})

function yearRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min) +1;
}

console.log(newBrand);
 */





/* // Snack 2
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array. */

/* const auto = [
    {
        marca: "Ferrari",
        modello:"Enzo",
        alimentazione: "benzina",
    },
    {
        marca: "Lamborghini",
        modello: "Urus",
        alimentazione: "benzina",
    },
    {
        marca: "Audi",
        modello: "a3",
        alimentazione: "diesel",
    },
    {
        marca: "Porsche",
        modello: "Carrera",
        alimentazione: "benzina",
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "diesel",
    },
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "metano",
    },
    {
        marca: "ford",
        modello: "focus",
        alimentazione: "gpl",
    },
    {
        marca: "renault",
        modello: "clio",
        alimentazione: "gpl",
    },
    {
        marca: "toyota",
        modello: "yaris",
        alimentazione: "elettrico",
    },
    {
        marca: "toyota",
        modello: "auris",
        alimentazione: "elettrico",
    },
]

const benzina = auto.filter((element, index)=>{
    return element.alimentazione == "benzina"
})

const diesel = auto.filter((element, index)=>{
    return element.alimentazione == "diesel"
})

const altri = auto.filter((element, index)=>{
    return element.alimentazione !== "diesel" && element.alimentazione !== "benzina"
})

console.log(benzina);
console.log(diesel);
console.log(altri);
 */

//SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

/* const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]


const mammiferi = animali.filter((element) => {
    return element.classe === "mammiferi"
})

console.log(animali);
console.log(mammiferi); */




// SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

/* const persone =[
    {
        nome: "alfonso",
        cognome: "buononato",
        eta: 24,
    },
    {
        nome: "nicola",
        cognome: "de nicola",
        eta: 22,
    },
    {
        nome: "pasquale",
        cognome: "de pasquale",
        eta: 12,
    },
    {
        nome: "giuseppe",
        cognome: "di giuseppe",
        eta: 29,
    },
    {
        nome: "vito",
        cognome: "de pasquale",
        eta: 31,
    },
    {
        nome: "andrea",
        cognome: "montanaro",
        eta: 17,
    },
    {
        nome: "giulia",
        cognome: "andreucci",
        eta: 19,
    },
    {
        nome: "antonio",
        cognome: "antonini",
        eta: 15,
    }
]

const newArray = persone.map((element, index) => {
    if(element.eta >= 18){
        return {... element,
            autorizzazione: "puo guidare"          
        }
    }else{
        return{
            ...element,
            autorizzazione: "non puo guidare"
        }
    }
})

console.log(persone);
console.log(newArray); */




// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.

/* const pc = [
    {
        nome: "lentissimo",
        marca: "hp",
        prezzo: 100,
        prezzoScontato: 50,
        hasWindows: true,
    },
    {
        nome: "lento",
        marca: "asus",
        prezzo: 150,
        prezzoScontato: 100,
        hasWindows: true,
    },
    {
        nome: "medio-lento",
        marca: "hp",
        prezzo: 200,
        prezzoScontato: 150,
        hasWindows: false,
    },
    {
        nome:"medio",
        marca: "asus",
        prezzo: 250,
        prezzoScontato: 200,
        hasWindows: true
    },
    {
        nome:"medio-veloce",
        marca: "msi",
        prezzo: 300,
        prezzoScontato: 250,
        hasWindows: true
    },
    {
        nome: "veloce",
        marca: "apple",
        prezzo: 500,
        prezzoScontato: 450,
        hasWindows: false
    },
    {
        nome: "velocissimo",
        marca: "apple",
        prezzo: 700,
        prezzoScontato:650,
        hasWindows: false
    },
    {
        nome: "super veloce",
        marca: "asus",
        prezzo: 1000,
        prezzoScontato: 800,
        hasWindows: true
    },
]


const pcScontati = [];
pc.forEach((element) =>{
    if(element.hasWindows == true){
        pcScontati.push( {
            ...element,
            sconto: element.prezzo - element.prezzoScontato
        }
    )}

})

console.log(pcScontati); */



/* SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */

/* const nomi = ["Alfonso", "MICHELE", "pasquale"];

const nomiModificati = nomi.map((element, index) => {
    return element[0].toUpperCase() + element.toLowerCase().slice(1)
})
console.log(nomiModificati); */


/* SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva. */

/* const finestra = {
    tab: ["Facebook", "GitHub", "Gmail"],
    activeTab: 0
}

finestra.tab.splice(finestra.activeTab, 1)

finestra.activeTab++

console.log(finestra);
 */


/* SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'] */

/* const nomi = ["caio", "SEMpronio", "TizIo"]

const newNomi = nomi.map((element) => {
    return element[0].toUpperCase() + element.toLowerCase().slice(1)
})

console.log(newNomi); */

/* SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero */

const app = new Vue({
    el:"#app",
    data: {
        rubrica: [
            {
                nome: "alfonso",
                cognome: "buononato",
                numero: 330030303,
                attivo: true,
            },
            {
                nome: "carlo",
                cognome: "buononato",
                numero: 330030303,
                attivo: false,
            },
            {
                nome: "alfon",
                cognome: "nonato",
                numero: 33340030303,
                attivo: true,
            },
            {
                nome: "alfo",
                cognome: "nato",
                numero: 332230303,
                attivo: false,
            },
        ],
        indexCognome:0,
    },
    methods: {
        boh(index){
            console.log(this.rubrica[index].cognome);
        }
    }
})

