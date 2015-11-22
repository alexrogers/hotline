import React from 'react';
import OptionList from '../option_list/option_list';
require('./app.scss');

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <h1 className="header-text">Holy Hotlines</h1>
          <OptionList />
          <h3 className="footer-text">Lines are open 24/7</h3>
        </div>
      </div>
    );
  }
}

export default App;
