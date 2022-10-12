import logo from './logo.svg';
import './App.css';
// import Element from './Components/element'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import Props from './Components/prop'
// import MilesAhead from './Components/milesAhead';
// import Clock from './Components/clock';
// import Login from './Components/customer';
// import Car from './Components/car';
// import Game from './States/game';
// import GameRoom from './States/GameRoom';
// import AddGamers from './States/AddGamers'; 
// import Clock from './Lifecycle/Clock2';
// import Shopping from './Hooks/Shopping2';
// import ReadMore from './Hooks/Exercise';
// import Greet from './Hooks/Exercise2';
// import EmployeeInfo from './Requests/EmployeeInfo';
import Request from './Requests/CatFact';
import Content from './StaticData/Content';
import SubContent from './StaticData/SubContent';
import Person from './StaticData/Person';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Element></Element>
        <Header></Header> */}
      </header>
      {/* <MilesAhead></MilesAhead> */}
      
      {/* <Login></Login> */}
      <Request></Request>
      <Content></Content>
      <SubContent></SubContent>
      <Person></Person>
      {/* <Game></Game>
      <AddGamers></AddGamers> */}
      {/* <ReadMore></ReadMore> */}
      {/* <Shopping></Shopping> */}
      {/* <Greet></Greet> */}
      {/* <EmployeeInfo></EmployeeInfo> */}
      {/* <GameRoom></GameRoom> */}
      {/* <Clock></Clock>  */}
       {/* <Props numberProp={13} headerProp="New header"></Props> */}
      <footer className='App-footer'>
      {/* <Footer></Footer> */}
      {/* <Car></Car> */}
      </footer>
    </div>
  );
}

export default App;
