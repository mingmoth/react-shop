import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const roorElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(roorElement)

root.render(<App />)



