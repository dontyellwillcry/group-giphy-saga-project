import React from 'react';
import GiphyList from '../GiphyList/GiphyList.jsx';
import GiphyFavorites from '../GiphyFavorites/GiphyFavorites.jsx';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return (
    
    <Router>
      <div>
      <Route path="/favorites" exact>
      <GiphyFavorites />
      </Route>
      
      <Route path="/" exact>
      <Link to="/favorites">Go To Favorite Giphs ⭐️</Link>
      <header>
      <h1>Giphy Search!</h1>
      </header>
      <GiphyList />
      </Route>
      </div>
    </Router>
  );
}

export default App;