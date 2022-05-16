import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Auth0Provider
                domain='http://service.plorus.com:8080'
                clientId='foo'
                redirectUri={window.location.origin}
                scope="email profile">
             <App />
          </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
