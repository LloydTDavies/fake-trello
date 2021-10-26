import React from "react";
import "./App.css";
import List from "./Components/List/List";

const fakeCards = ["Do A", "Do B"];

function App() {
  return (
    <div className="App">
      <header className="App-header">Fake Trello</header>
      <main>
        <div className="board">
          <List name="To-do" cards={fakeCards} />
          <List name="Doing" cards={[]} />
        </div>
      </main>
    </div>
  );
}

export default App;
