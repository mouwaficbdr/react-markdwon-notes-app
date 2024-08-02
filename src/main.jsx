import React from 'react';
import ReactDOM from 'react-dom'; // Utilise 'react-dom' pour React 17
import App from './App';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
