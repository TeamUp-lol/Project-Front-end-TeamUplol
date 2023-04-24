import React from 'react';
import { Link } from 'react-router-dom';
import AuthInputForm from '../../../components/authInputForm/AuthInputForm';

const LoginPage = ({ data, socialLoginImg, handleValues }) => {
  const isLoginPage = true;
  return (
    <div className="relative flex justify-center mx-auto mt-10 p-12 w-96 lg:w-[900px] border border-solid border-slate-300">
      <img
        className="absolute w-16 h-10 right-10 lg:w-24 lg:h-14"
        src="/assets/images/image-whiteLogo.png"
        alt="logo image"
      />
      <section className="flex">
        <form className="flex flex-col items-center w-96 lg:mr-4 ">
          <AuthInputForm
            isLoginPage={isLoginPage}
            data={data}
            handleValues={handleValues}
          />
          <button className="w-56 h-12 mt-5 text-white rounded-lg lg:w-72 bg-violet-600">
            로그인
          </button>
          <Link to="/signUp">
            <button className="w-56 h-12 mt-5 border border-solid rounded-lg lg:w-72 border-slate-300 text-slate-500">
              회원가입
            </button>
          </Link>
          <div className="relative w-72">
            <hr className="w-full mt-12 border border-solid border-slate-300"></hr>
            <p className="absolute text-center bg-white top-9 left-10 w-52 text-slate-500">
              소셜 계정으로 로그인하기
            </p>
          </div>
          <div className="flex mt-8">
            {socialLoginImg &&
              socialLoginImg.map((img) => {
                return (
                  <Link to={'/'} key={img.id}>
                    <img
                      className={img.style}
                      src={`src/assets/images/login/${img.name}`}
                      alt={`${img.alt} image`}
                    />
                  </Link>
                );
              })}
          </div>
          <div className="mt-8 text-slate-600">
            <Link to="/findEmail">아이디</Link>/
            <Link to="/findPassword">비밀번호 찾기</Link>
            &gt;
          </div>
        </form>
        <aside className="flex justify-center hidden border-l pt-14 lg:block">
          <img
            className="mx-6 w-96"
            src="src/assets/images/login/image-hero.png"
            alt="hero image"
          />
        </aside>
      </section>
    </div>
  );
};

export default LoginPage;
