import React from "react";
import './App.css';
import Header from "./components/header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    // the below app is BEM class notation
    <div className="app">

        <Header />

        <TinderCards />

        <SwipeButtons />
    </div>
  );
}

export default App;
