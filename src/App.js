import React from 'react';
import PlayersList from './components/PlayerList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import './App.css'

function App() {
  return (
    <div className="App-header" style={{ backgroundColor: 'black' }}>
      <PlayersList />
    </div>
  );
}

export default App;