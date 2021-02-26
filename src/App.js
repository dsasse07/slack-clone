import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from './firebase'


function App() {

  const [isDark, setisDark] = useState(false)
  const [channels, setChannels] = useState([])
  const [user, setUser] = useState(  JSON.parse( localStorage.getItem("user") ))
  
  useEffect( () => {
    getChannels()
  }, [])

  useEffect( () => {
    localStorage.setItem("user", JSON.stringify(user) )
  }, [user] )

  const getChannels = () => {
    db.collection("channels").onSnapshot(snapshot => {
      setChannels(snapshot.docs.map( doc => {
        return {id:doc.id , name: doc.data().name}
      }))
    })
  }

  function handleLogin(userData){
    setUser(userData)
  }

  function handleLogout(){
    auth.signOut().then( response => {
      setUser(null)
      localStorage.removeItem("user")
    })
  }

  return ( 
    <div className="App"> 
      <Router>
        { 
        !user ?
          <Login onLogin={handleLogin}/>
        :
          <Container>
            <Header onToggleDark={setisDark} isDark={isDark} user={user} onLogout={handleLogout}/>
            <Main>
              <Sidebar channels={channels}/>
                <Switch>
                  <Route path="/channels/:id">
                    <Chat user={user}/>
                  </Route>
                  <Route path="/">
                    Select or Create Channel
                  </Route>
                </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 260px auto;
`