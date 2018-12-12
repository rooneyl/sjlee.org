import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import MainPage from './components/MainPage';
import SocialLink from './components/SocialLink';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <SocialLink />
      </div>
    );
  }
}

export default App;
