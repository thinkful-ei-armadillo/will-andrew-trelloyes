import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './STORE';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  state = this.props.store

  handleDeleteCard = (itemId, listId) => {
    console.log('Delete click working')
    const list = this.state.lists.filter(element => element.id === listId)
    const itemList = list[0].cardIds.filter(element => element !== itemId)
    console.log(itemList)
    console.log(list)
    // this.setState({store})
    

  }

  handleAddRandomCard = () => {

  }

  render() {

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.handleAddRandomCard}
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
