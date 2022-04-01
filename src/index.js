import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'

import App from './App';

import './index.css';

const roorElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(roorElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)



