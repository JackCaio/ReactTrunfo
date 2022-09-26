import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
    };
  }

  validateText = () => {
    const campos = ['cardName', 'cardDescription', 'cardImage', 'cardRare'];
    return campos.reduce((acc, cur) => {
      if (acc) return true;
      const { state } = this;
      return state[cur].length === 0;
    }, false);
  };

  isSaveButtonDisabled = () => this.validateText();

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

  onSaveButtonClick = () => true;

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
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
