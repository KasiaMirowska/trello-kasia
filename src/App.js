import React from 'react';
import './App.css';
import STORE from './store.js';
import AllLists from './AllLists';
import List from './List';
import Card from './Card'

export default function App() {
  const storeLists = STORE.lists;
  storeLists.map((list) => {
    return <List
             key={list.id}
             header={list.header}
             cards={list.cardIds.map(id => STORE.allCards[id])}
           />
}) 
  console.log(storeLists);
  return (
    <div className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <main>
      <List />
    </main>
    </div>
  );
}


