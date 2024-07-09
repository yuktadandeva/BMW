window.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.podcast-card');
    const container = document.querySelector('.carousel-movecontainer');
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width

    function moveCarousel(direction) {
        if (direction === 'left') {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else if (direction === 'right') {
            currentIndex = Math.min(currentIndex + 1, cards.length - 1);
        }

        const offset = -currentIndex * cardWidth;
        container.style.transform = `translateX(${offset}px)`;
    }


    // Example usage:
    document.getElementById('action-btn left-slide').addEventListener('click', function() {
        moveCarousel('left');
    });

    document.getElementById('rightButton').addEventListener('click', function() {
        moveCarousel('right');
    });
});

// let index = 0;

// for(let card of cards){
// card.classList.add('.inactivate');
// console.log(card.classList);}

// function moveCard(index){
//    const currentCard = cards[index];
//    currentCard.classList.add('.inactivate');

//    const next = cards[index + 3];
//    next.classList,toggle('activate');
// }

// function left(index){
//     if(index == 0){
//         index = cards.length;
//         moveCard(index);
//     }
//     index= index - 1;
//     moveCard(index);
// }

// function right(index){
//     if(index == cards.length){
//         index = 0;
//         moveCard(index);
//     }
//     index= index + 1;
//     moveCard(index);
// }
// }