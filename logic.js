window.addEventListener('DOMContentLoaded', bindEvents)

function bindEvents(){
const cards = document.querySelectorAll('.podcast-card');
console.log(cards, cards.length);
let index = 0;

for(let card of cards){
card.classList.add('.inactivate');
console.log(card.classList);}

function moveCard(index){
   const currentCard = cards[index];
   currentCard.classList.add('.inactivate');

   const next = cards[index + 3];
   next.classList,toggle('activate');
}

function left(index){
    if(index == 0){
        index = cards.length;
        moveCard(index);
    }
    index= index - 1;
    moveCard(index);
}

function right(index){
    if(index == cards.length){
        index = 0;
        moveCard(index);
    }
    index= index + 1;
    moveCard(index);
}
}