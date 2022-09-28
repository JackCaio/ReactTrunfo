import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';

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
      <>
        <div className="card">
          <p
            data-testid="name-card"
            style={ {
              order: 0,
              fontSize: '1.3rem',
              fontWeight: 700,
              height: '2rem',
              padding: '0 5px',
              borderRadius: '9px 9px 0 0',
              color: 'white',
              background: '#023031',
              textAlign: 'end',
            } }
          >
            <span />
            {cardName}
          </p>
          <p data-testid="description-card" style={ { order: 2 } }>
            <span>Descrição</span>
            {cardDescription}
          </p>
          <div
            className="attr-container"
            style={ {
              order: 2,
              marginTop: 'auto',
              background: 'white',
              padding: '6px',
              borderRadius: '0 0 9px 9px',
            } }
          >
            <p data-testid="attr1-card">
              <span>Attr1</span>
              <progress id="attr1" value={ cardAttr1 } max="90" />
              <span>{cardAttr1}</span>
            </p>
            <p data-testid="attr2-card">
              <span>Attr2</span>
              <progress id="attr1" value={ cardAttr2 } max="90" />
              <span>{cardAttr2}</span>
            </p>
            <p data-testid="attr3-card">
              <span>Attr3</span>
              <progress id="attr1" value={ cardAttr3 } max="90" />
              <span>{cardAttr3}</span>
            </p>
          </div>
          <div className="img-container" style={ { order: 1 } }>
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </div>
          <p data-testid="rare-card" style={ { order: 0, display: 'none' } }>
            <span>Raridade</span>
            {cardRare}
          </p>
          {cardTrunfo ? (
            <p data-testid="trunfo-card" style={ { order: 9 } }>Super Trunfo</p>) : ''}
        </div>
        {preview || delButton}
      </>
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
