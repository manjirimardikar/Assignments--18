import { useContext } from 'react';
import './App.css';
import Login from './Components/Login';
import { Auth } from './Components/Contex';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  const {islogin} = useContext(Auth)
  return (
    <div className="App">
  
      {
        islogin ? (
          <>
          <Nav/>
        <Home/>
          </>
        ):
        (<Login/>)
      }

    </div>
  );
}

export default App;