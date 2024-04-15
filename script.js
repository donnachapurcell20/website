// Flip cards
function flipCard(card) {
    card.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
}

function unflipCard(card) {
    card.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
}

document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            flipCard(card);
        });
        card.addEventListener('mouseout', function() {
            unflipCard(card);
        });
    });
});
