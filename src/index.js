import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Booklist from './components/Booklist';

function App() {
  return (
    <div>
      <Booklist />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
