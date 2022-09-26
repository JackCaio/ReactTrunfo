import React from 'react';
import Card from './components/Card';
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

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
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
      </>
    );
  }
}

export default App;
