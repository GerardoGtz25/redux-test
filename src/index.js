import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux'
import { Porvider } from 'react-redux'

import reducers from './reducers'


const store =  createStore(
  reducers, // Todos los reduces
  {}  // Estado inicial
)


ReactDOM.render(
  <Porvider store={ store }>
    <App />
  </Porvider>, 
  document.getElementById('root')
);

