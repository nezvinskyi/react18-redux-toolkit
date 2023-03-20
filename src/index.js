import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

export const Person = () => {
  return <div>This person</div>;
};

export const Message = () => {
  return <div>This person</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Greeting />
  </StrictMode>
);
