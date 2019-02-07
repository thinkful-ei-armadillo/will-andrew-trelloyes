import React, { Component } from "react";
import List from "./List";
import "./App.css";

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  state = this.props.store;

  handleDeleteCard = (listId, itemId) => {
    const updatedList = [...this.state.lists];
    for (let i = 0; updatedList.length; i++) {
      if (updatedList[i].id === listId) {
        updatedList[i].cardIds = updatedList[i].cardIds.filter(
          element => element !== itemId
        );
        break;
      }
    }
    this.setState({ lists: updatedList });
  };

  handleAddRandomCard = () => {};

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
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
