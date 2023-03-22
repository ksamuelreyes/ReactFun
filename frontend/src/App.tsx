import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from '../public/CollegeBasketballTeams.json'
// import ReactDOM from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const TeamNames = [{name: "Kansas", members: "Player1", color: "Blue"},
//                   {name:"Duke",members:"Player2",color:"Blue"},
//                   {name:"Louisville",members:"Donovan Mitchell",color:"Red"}];

const TeamNames = teams["teams"]

function Welcome(){
  return (<h1>College Teams</h1>);
}


class Team extends React.Component <any,any> {
  render() {
    
    const oneTeam = this.props
    
    return(
      <div>
        <h1>{oneTeam.school}</h1>
        <h2>{oneTeam.name}</h2>
        {/* <h2>{oneTeam.color}</h2> */}
      </div>
    )
  }
}

function TeamList() {
  return (
    <div>
      {TeamNames.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  );
}

function App(){
  return(
    <div>
    <Welcome/>
    <TeamList/>
    </div>
  );
}

// ReactDOM.render(
//  <App/>,
//  document.getElementById('mountNode'),
// );

export default App;
