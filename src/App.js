import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

const maxAttr = 210;
const maxSingleAttr = 90;
const defState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardArr: [],
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  validateText = () => {
    const campos = ['cardName', 'cardDescription', 'cardImage', 'cardRare'];
    return campos.reduce((acc, cur) => {
      if (!acc) return false;
      const { state } = this;
      return state[cur].length > 0;
    }, true);
  };

  validateAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (total > maxAttr) return false;
    const v1 = (cardAttr1 <= maxSingleAttr) && (cardAttr1 >= 0) && (cardAttr1.length > 0);
    const v2 = (cardAttr2 <= maxSingleAttr) && (cardAttr2 >= 0) && (cardAttr2.length > 0);
    const v3 = (cardAttr3 <= maxSingleAttr) && (cardAttr3 >= 0) && (cardAttr3.length > 0);
    return v1 && v2 && v3;
  };

  // true: botão habilitado
  isSaveButtonDisabled = () => {
    const valText = this.validateText();
    const valAttr = this.validateAttr();
    return !(valText && valAttr);
  };

  validValue = (name, value) => {
    switch (name) {
    case 'cardTrunfo':
      return value[1];
    case 'filterTrunfo':
      return value[1];
    default:
      return value[0];
    }
  };

  onInputChange = (event) => {
    const { name, value, checked } = event.target;
    this.setState({
      [name]: this.validValue(name, [value, checked]),
    });
  };

  handleHasTrunfo = () => {
    const { cardTrunfo } = this.state;
    this.setState({
      hasTrunfo: cardTrunfo,
    });
  };

  onSaveButtonClick = () => {
    this.handleHasTrunfo();
    const card = { ...this.state };
    delete card.cardArr;
    delete card.hasTrunfo;
    this.setState((prev) => ({
      cardArr: [...prev.cardArr, card],
    }));
    this.setState({ ...defState });
  };

  verTrunfo = (index) => {
    const { cardArr } = this.state;
    const card = cardArr[index];
    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  delCard = (event) => {
    const cardIndex = event.target.name;
    this.verTrunfo(cardIndex);
    if (cardIndex >= 0) {
      this.setState((prev) => {
        prev.cardArr.splice(cardIndex, 1);
        return ({
          cardArr: prev.cardArr,
        });
      });
    }
  };

  deckFilter = () => {
    const { filterName, filterRare, filterTrunfo, cardArr } = this.state;
    if (filterTrunfo) {
      return cardArr.filter((card) => card.cardTrunfo);
    }
    return cardArr
      .filter((card) => card.cardName.includes(filterName))
      .filter((card) => (filterRare === 'todas' || card.cardRare === filterRare));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, cardArr, filterName, filterRare,
      filterTrunfo } = this.state;
    const deck = this.deckFilter();
    return (
      <>
        <Form
          { ...this.state }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div className="filter">
          <label htmlFor="filterName">
            Nome:
            <input
              id="filterName"
              name="filterName"
              data-testid="name-filter"
              type="text"
              onChange={ this.onInputChange }
              value={ filterName }
              disabled={ filterTrunfo }
            />
          </label>
          <label htmlFor="filterRare">
            Raridade:
            <select
              id="filterRare"
              name="filterRare"
              data-testid="rare-filter"
              onChange={ this.onInputChange }
              value={ filterRare }
              disabled={ filterTrunfo }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="filterTrunfo">
            Super Trunfo
            <input
              id="filterTrunfo"
              name="filterTrunfo"
              data-testid="trunfo-filter"
              type="checkbox"
              checked={ filterTrunfo }
              onChange={ this.onInputChange }
            />
          </label>
        </div>
        {cardArr.length > 0 ? <Deck cards={ deck } delCard={ this.delCard } /> : ''}
      </>
    );
  }
}

export default App;
