import React, {Component} from 'react';
import './App.css';
import missions from './missions';
import Launch from "./Launch";

class App extends Component{
  render() {
    return (
        <div className="App">
          <h1 className='title'>SpaceX Launches 2021</h1>
          <div className='launches'>
            <div className='container'>
              {missions.map((mission, index) => (
                  <div>
                    <Launch mission={mission}/>
                  </div>
              ))}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
