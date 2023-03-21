import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Booklist from './components/Booklist';

import './styles/index.css';

function App() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <Booklist />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
