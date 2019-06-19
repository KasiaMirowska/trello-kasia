import React from 'react';
import './App.css';
import { STORE } from './store.js';
import List from './List';


export default function App() {
  const storeLists = STORE.lists;

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
          {storeLists.map(list => {
              console.log(list);
              return <List
                      key={list.id}
                      header={list.header}
                      cards={list.cardIds.map(id => STORE.allCards[id])}
                    />
            })}
      </div>
    </div>
  );
}


