import React from 'react';
import './App.css';
import { STORE } from './store.js';
import List from './List';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lists: STORE.lists,
      cards: STORE.allCards,
    }  
  }
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  
  handleButtonClick = (listId) => {
    let newCard= this.newRandomCard();
    let newList = this.state.lists.map(list => {
      if(list.id === listId) {
        let newList = Object.assign({}, list, { cardIds: [...list.cardIds, newCard.id] });
        return newList
      } else {
        return list;
      } 
    });
    this.setState({
     lists: newList,
     cards: {
       ...this.state.cards, [newCard.id]: newCard
      } 
    })
  }


  handleDelete =(listId, cardId)=>{
    console.log(this.state.cards, 'before')
    console.log('i am deleting', listId, cardId)
    function omit(obj, keyToOmit) {
      return Object.entries(obj).reduce(
        (newObj, [key, value]) =>
            key === keyToOmit ? newObj : {...newObj, [key]: value},
        {}
      );
    }
    let newAllCards = omit(this.state.cards, cardId);
    console.log( newAllCards)
  }
  
  render() {
    
    const storeLists = this.state.lists;
    const list = storeLists.map(list => {
     
      return <List
        key={list.id}
        listId={list.id}
        header={list.header}
        cards={list.cardIds.map(id => this.state.cards[id])}
        addCard={this.handleButtonClick}
        deleteCard={this.handleDelete}
      />
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {list}
        </div>
      </div>
    );
  }
}


