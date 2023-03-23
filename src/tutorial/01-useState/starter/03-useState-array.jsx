import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleRemoveItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const removeAllPeople = () => {
    setPeople([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      <ul>
        {people.map(({ name, id }) => (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button className='btn' onClick={() => handleRemoveItem(id)}>
              Remove item
            </button>
          </div>
        ))}
      </ul>

      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={removeAllPeople}
      >
        Clear list
      </button>
    </>
  );
};

export default UseStateArray;
