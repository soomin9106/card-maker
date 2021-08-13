import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import Card from './service/card_data';

const authService = new AuthService();
const cards = new Card();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cards={cards}/>
  </React.StrictMode>,
  document.getElementById('root')
);

