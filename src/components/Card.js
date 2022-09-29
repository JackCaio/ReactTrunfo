import PropTypes from 'prop-types';
import React from 'react';
import placeholder from '../img/img.png';
import './Card.css';
import Progress from './Progress';

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
        style={ { marginTop: '15px' } }
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
              overflow: 'hidden',
            } }
          >
            <span />
            {cardName}
          </p>
          <p
            data-testid="description-card"
            style={ {
              order: 2,
              height: '65px',
              overflow: 'hidden',
              overflowWrap: 'break-word',
              fontSize: '12px',
            } }
          >
            {cardDescription}
          </p>
          <div
            className="attr-container"
            style={ {
              order: 2,
              marginTop: 'auto',
              background: 'white',
              borderRadius: '0 0 9px 9px',
            } }
          >
            <div className="card-attr" data-testid="attr1-card">
              <span>Attr1</span>
              <Progress value={ cardAttr1 } max="90" color="green" />
              <span>{cardAttr1}</span>
            </div>
            <div className="card-attr" data-testid="attr2-card">
              <span>Attr2</span>
              <Progress value={ cardAttr2 } max="90" color="blue" />
              <span>{cardAttr2}</span>
            </div>
            <div className="card-attr" data-testid="attr3-card">
              <span>Attr3</span>
              <Progress value={ cardAttr3 } max="90" color="red" />
              <span>{cardAttr3}</span>
            </div>
          </div>
          <div className="img-container" style={ { order: 1, height: '40%' } }>
            <img
              data-testid="image-card"
              src={ cardImage || placeholder }
              alt={ cardName }
              style={ { height: '100%' } }
            />
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
