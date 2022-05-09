const cardGame = () => {

  const cardVal = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
  const cardSuit = ['♣︎', '♦︎', '♥︎', '♠︎'];
  let newDeck = cardSuit.map((suit) => {
    return cardVal.map((card) => {
      return {
        card,
        suit
      }
    })
  })

  const shuffledDeck = (newDeck) => {
    newDeck = newDeck.flat();

    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = newDeck[i];
      newDeck[i] = newDeck[j];
      newDeck[j] = temp;
    }
    return newDeck;
  }
  console.log('+++===+++', shuffledDeck(newDeck));
}

cardGame()
