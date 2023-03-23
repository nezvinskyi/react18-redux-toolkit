import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    // if (showAlert) {
    //   setShowAlert(false);
    //   return;
    // }
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <button className='btn' onClick={toggleAlert}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>;
};

export default ToggleChallenge;
