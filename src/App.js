import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { useStateValue } from './components/Context/StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
