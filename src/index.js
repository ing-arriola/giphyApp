import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React antes de V18
//ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);