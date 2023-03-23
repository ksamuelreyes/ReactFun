import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from '../public/CollegeBasketballTeams.json'


const TeamNames = teams["teams"]

function Welcome(){
  return (
  <div className='centertext'>
  <h1>College Teams</h1>
  <h2>Welcome to the college basketball team database</h2>
  </div>
  );
}


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
    <TeamList/>
    </div>
  );
}


export default App;
