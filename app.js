document.addEventListener('DOMContentLoaded', () => {

  // Card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ]

  const grid = document.querySelector('.grid');
  let cardChosen = [];
  let cardChosenId = [];

  // Create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      // Create the image element for each card
      let card = document.createElement('img');
      // Set atributes
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);

      // Add event listener for flipcard
      //card.addEventListener('click', flipcard)

      grid.appendChild(card)
    }
  };

  // Check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
  };

  // Flip the card
  function flipcard() {
    let cardId = this.getAttribute('data-id');

    cardChosen.push(cardArray[cardId].name);

    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    // Check card chosen array
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  };

  createBoard();
});