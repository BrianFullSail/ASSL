import './App.css'
import React, { useEffect, useState } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import Routes from './components/Routes'


function App() {
  const [loggedIn, setLogin] = useState(false)
  const query = new URLSearchParams(window.location.search)

  useEffect(() => {
    if (query.get('auth_token')) {
    setLogin(true)
    }
  }, [])

  function showNav(){
    if(loggedIn === true){
      return <Nav />
    }
    return false
  }
  
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        {showNav()}
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
