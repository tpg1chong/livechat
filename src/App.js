import React, { Component } from 'react';
import logo from './logo.svg';

import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="livechat" className="livechat">
          <div className="wrap">

            <div className="chatbox-wrap">
              <div className="chatbox"></div>
            </div>
            

            <div className="roomchat-wrap">
              <div className="roomchat">
                <button type="button" className=""></button>
              </div>
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default App;