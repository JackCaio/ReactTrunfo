import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards, delCard, deckFilter } = this.props;
    const markCard = cards.map((card, i) => {
      card.index = i;
      return card;
    });
    const filteredDeck = deckFilter(markCard);
    return (
      <div className="cards">
        {filteredDeck
          .map((card) => (
            <div
              key={ card.index }
              style={ {
                width: '280px',
                display: 'flex',
                flexDirection: 'column',
              } }
            >
              <Card
                { ...card }
                preview={ false }
                delCard={ delCard }
                cardIndex={ card.index }
              />
            </div>
          ))}
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  deckFilter: PropTypes.func.isRequired,
  delCard: PropTypes.func.isRequired,
};

export default Deck;
