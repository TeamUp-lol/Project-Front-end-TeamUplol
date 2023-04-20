import React from 'react';
import AuthInputForm from './../../../components/authInputForm/AuthInputForm';

const SignUpPage = ({ data }) => {
  const isLoginPage = false;

  return (
    <div className="relative flex justify-center mt-16 w-96 lg:w-[600px] mx-auto py-14 border-solid border border-slate-300">
      <img
        className="absolute w-16 h-10 right-10 lg:w-24 lg:h-14"
        src="/assets/images/image-whiteLogo.png"
        alt="logo"
      />
      <form className="flex flex-col justify-center items-center w-[600px] ">
        <AuthInputForm isLoginPage={isLoginPage} data={data} />
        <button
          disabled
          className="w-48 h-12 mt-5 text-white rounded-lg disabled:opacity-50 lg:w-60 bg-violet-600"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
