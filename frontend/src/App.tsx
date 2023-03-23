import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from '../public/CollegeBasketballTeams.json'


const TeamNames = teams["teams"]
//Welcome & Description
function Welcome(){
  return (
  <div className='centertext'>
  <h1>Welcome</h1>
  <h2>NCAA Basketball Team database</h2>
  </div>
  );
}

function Description(){
  return (
  <div className='centertext'>
      <p>The college basketball team database includes NCAA basketball teams and information about them. Explore the cards below to learn more about your favorite teams.</p>
  </div>
  );
}

//Returns each team
class Team extends React.Component <any,any> {
  render() {
    
    const oneTeam = this.props
    
    return(
        <div className='card'>
          <div className='container'>
          <h1>School: {oneTeam.school}</h1>
          <h2>Mascot: {oneTeam.name}</h2>
          <h2>Location: {oneTeam.city}, {oneTeam.state}</h2>
          </div>
        </div>
    )
  }
}
//Returns team list
function TeamList() {
  return (
    <div className='cards'>
      {TeamNames.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  );
}

function App(){
  return(
    <div>
    <Welcome/>
    <Description/>
    <TeamList/>
    </div>
  );
}


export default App;
