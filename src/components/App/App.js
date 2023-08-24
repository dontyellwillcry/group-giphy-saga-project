import React from 'react';
import GiphyList from '../GiphyList/GiphyList.jsx';
import './App.css';

function App(props) {
  return (
    <div>
      <header>
      <h1>Giphy Search!</h1>
      </header>
      <GiphyList />
    </div>
  );
}

export default App;
