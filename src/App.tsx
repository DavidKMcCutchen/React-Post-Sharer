import React from "react";
import logo from "./logo.svg";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
        <h2>Mock Social Media Post Sharer using React with TypeScript</h2>
      </header>
      <Posts />
    </div>
  );
}

export default App;
