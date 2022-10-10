import logo from './logo.svg';
import './App.css';
// import Element from './Components/element'
// import Header from './Components/Header'
import Footer from './Components/Footer'
import Props from './Components/prop'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Element></Element>
        <Header></Header> */}
      </header>
      <Props numberProp={13} headerProp="New header"></Props>
      <footer className='App-footer'>
      <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
