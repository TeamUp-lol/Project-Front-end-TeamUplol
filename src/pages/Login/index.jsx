import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import { LOGIN_DATA, SOCIAL_IMG } from './components/LOGIN_DATA';

const Index = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    pwd: '',
  });

  const handleValues = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div>
      <LoginPage
        data={LOGIN_DATA}
        socialLoginImg={SOCIAL_IMG}
        handleValues={handleValues}
      />
    </div>
  );
};

export default Index;
