import React, { useState } from 'react';
import './App.css';
import Direction from './Components/Direction/Direction';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <div className="App">
      <div className="input-box">
        <input type="text" placeholder="From" onBlur={e => setOrigin(e.target.value)} />
        <input type="text" placeholder="To" onBlur={e => setDestination(e.target.value)} />
      </div>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;

//AIzaSyDD68FYCia6hxYVKTwYjILPdW_XtaU5mYM
