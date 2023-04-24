const AuthInputForm = ({ isLoginPage, data, handleValues }) => {
  return (
    <>
      <header>
        <h1 className="my-12 text-2xl font-bold">
          {isLoginPage ? '로그인' : '회원가입'}
        </h1>
      </header>
      {data.map((item) => {
        return (
          <div key={item.id} className="w-10/12 my-2 ">
            <div className="pl-4 mb-2">
              <span className="mr-2 text-slate-600">{item.title}</span>
              <span className="text-sm text-red-600">{item.errorMsg}</span>
            </div>
            <input
              type={item.type}
              name={item.name}
              className={`${
                item.button ? 'w-8/12' : 'w-10/12 lg:w-9/12 '
              }  ml-8 mb-4 p-2 border-b border-solid border-slate-300`}
              onChange={handleValues}
            />
            {item.button ? (
              <button className="p-1 ml-4 text-sm border rounded-md border-slate-400 text-slate-400">
                중복 확인
              </button>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </>
  );
};

export default AuthInputForm;
