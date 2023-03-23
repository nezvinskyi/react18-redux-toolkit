import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [user, setUser] = useState('');

  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name: user };

    const userExists = (name) =>
      users.some((user) => user.name.toLowerCase() === name.toLowerCase());

    if (!userExists(user)) {
      setUsers([...users, newUser]);
      setUser('');
    }
  };

  const removeItem = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>
      <div>
        {users.map(({ id, name }) => {
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button className='btn' onClick={() => removeItem(id)}>
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
