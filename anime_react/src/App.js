import logo from './logo.svg';
import './App.css';
import Params from './routing/Params';
import History from './routing/History';
// import Clock from './Lifecycle/Clock2';
// import Request from './Requests/CatFact';


import {
  BrowserRouter, 
  Routes as Switch,
  Route,
  Link
} from 'react-router-dom'



function App() {
  return (
    <div>
      <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="help">Help</Link>
        <Link to="home">Home</Link>
        <Link to="Test">Test</Link>
        <Link to="12345qwerty">Rubbish</Link>
      </header>

      <Switch> {/* Many Route */}
        <Route path="/home" element={<h1>Home</h1>}/>
        <Route path="/help" element={<History/>}/>
        <Route path="/test/:id" element={<Params/>}/>
        <Route path="*" element={<h1>235Wild663</h1>}/>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
