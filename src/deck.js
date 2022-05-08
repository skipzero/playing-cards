const cardGame: string = () => {
  const cardVal: string = ['a','2','3','4','5','6','7','8','9','10','j','q','k'];
  const cardSuit: string = ['♣︎','♦︎', '♥︎', '♠︎'];
  const newDeck: string = cardVal.map((card: string) => {
    return cardSuit.forEach((suit: string) => {
      return card + suit;
    })
  })
  console.log('+++===+++', newDeck)
  const emptyDeck = newDeck;
  return emptyDeck;
}

cardGame()
