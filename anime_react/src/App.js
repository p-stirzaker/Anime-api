import logo from './logo.svg';
import './App.css';
import Element from './Components/element'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Props from './Components/prop'
import MilesAhead from './Components/milesAhead';
import Clock from './Components/clock';
import Login from './Components/customer';
import Car from './Components/car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Element></Element>
        <Header></Header>
      </header>
      <MilesAhead></MilesAhead>
      
      <Login></Login>
      <Clock></Clock> */}
       <Props numberProp={13} headerProp="New header"></Props>
      <footer className='App-footer'>
      <Footer></Footer>
      <Car></Car>
      </footer>
    </div>
  );
}

export default App;
