import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="deck">
        {cards.map((card, i) => <Card key={ i } { ...card } />)}
      </div>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf([
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    }),
  ]).isRequired,
};

export default Deck;
