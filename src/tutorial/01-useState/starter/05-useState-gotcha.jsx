import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    }, 3000);
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <div>Value: {value}</div>
      <button type='button' onClick={handleClick}>
        {' '}
        Click me
      </button>
    </>
  );
};

export default UseStateGotcha;
