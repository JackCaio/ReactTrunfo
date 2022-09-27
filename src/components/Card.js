import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, preview, delCard, cardIndex } = this.props;

    const delButton = (
      <button
        data-testid="delete-button"
        type="button"
        name={ cardIndex }
        onClick={ delCard }
      >
        Excluir
      </button>
    );
    return (
      <div className="cardPreview">
        <p data-testid="name-card">{cardName}</p>
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
        {preview ? '' : delButton}
      </div>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  preview: true,
  cardIndex: 0,
  delCard: () => {},
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  preview: PropTypes.bool,
  delCard: PropTypes.func,
  cardIndex: PropTypes.number,
};

export default Card;
