import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>useState error example</h2>
      <div>Count: {count}</div>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </>
  );
};

export default ErrorExample;
