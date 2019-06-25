import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const mystyle = {border: 'solid 1 black', maxWidth:`100vw`}
  const mystyle2 = {color: 'red'}
  return (
    <div style={{ border: 'solid 1 black', maxWidth:`100vw` }}>
        	<h1 className ="title red" style={mystyle2}>My title</h1>
          <img src="01.jpg" />
	        <img src="./public/00.jpg" />
    </div>
  );
}

export default App;
