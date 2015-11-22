import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}

main();
