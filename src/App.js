import React from 'react';
import PlayersList from './components/PlayerList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black' }}>
      <PlayersList />
    </div>
  );
}

export default App;