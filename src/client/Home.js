import React from 'react';
import { Link } from 'react-router-dom';

import logo from './react.svg';
import './Home.css';

class Home extends React.Component {
  static async getInitialProps({ req, res, match}) {
    // console.log('store ', store)
    return {  };
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <ul className="Home-resources">
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/detail/5`}>Detail</Link>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
