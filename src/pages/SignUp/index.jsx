import React from 'react';
import SignUpPage from './components/SignUpPage';
import { SIGN_UP_DATA } from './components/SIGN_UP_DATA';

const index = () => {
  return <SignUpPage data={SIGN_UP_DATA} />;
};

export default index;
