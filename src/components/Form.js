import PropTypes from 'prop-types';
import React from 'react';
import './Form.css';

const maxAttr = 210;
class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    const soma = maxAttr - Number(cardAttr1) - Number(cardAttr2) - Number(cardAttr3);
    const trunfoCheck = (
      <label htmlFor="cardTrunfo" style={ { display: 'flex' } }>
        Super Trunfo
        <input
          id="cardTrunfo"
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          style={ { width: 'auto', margin: 0, order: -1, marginRight: 5 } }
        />
      </label>
    );
    return (
      <div className="cardForm">
        <label htmlFor="cardName">
          Nome
          <input
            id="cardName"
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            id="cardDescription"
            name="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="2"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <div className="attr">
          <label htmlFor="cardAttr1">
            Atributo 1
            <input
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            Atributo 2
            <input
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            Atributo 3
            <input
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <p className="somaPontos">{`Pontos Restantes: ${soma}`}</p>
        </div>
        <div className="imagem">
          <label htmlFor="cardImage">
            Imagem
            <input
              id="cardImage"
              name="cardImage"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <label htmlFor="cardRare">
          Raridade
          <select
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <div className="footer">
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : trunfoCheck}
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
