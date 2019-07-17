import React from 'react';
import './App.css';
import Header from "./components/heaader"
import Finder from './components/finder'
import Pokedex from './components/pokedex'

function App() {
  return (
    <div className="App">
      <Header />
      <Finder />
      <Pokedex />
    </div>
  );
}

export default App;
