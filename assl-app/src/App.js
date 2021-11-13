import './App.css'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import Routes from './components/Routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
