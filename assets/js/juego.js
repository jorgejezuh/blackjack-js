

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'K', 'Q'];

const crearDeck = () => {
    for(let i = 2; i <=10; i++){
        for(tipo of tipos){
            deck.push( i + tipo);
        }
    }

    for(esp of especiales){
        for(tipo of tipos){
            deck.push(esp + tipo);
        }
    }
    deck =  _.shuffle(deck);
    console.log({deck})
    return deck;
}

const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck.'
    }
    const carta = deck.pop();

    return carta;
}

crearDeck();
pedirCarta();