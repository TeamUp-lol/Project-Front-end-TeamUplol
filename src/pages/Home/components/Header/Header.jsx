import React from 'react'

const Header = () => {
  return (
    <section id="header">
      <div className="container max-w-screen px-4 py-12 mx-auto">
        <nav className="flex justify-between items-center max-w-screen">
          <img src="src/assets/images/home/image-logo.svg" alt="TeamUp-lol-logo"
          className='cursor-pointer'/>
          <div className='flex justify-between items-center max-w-1'>
            <button className="hidden mr-2 px-10 py-2 my-0 text-white font-bold tracking-widest bg-slate-900 uppercase rounded-lg hover:bg-white hover:border-2 hover:border-slate-400 hover:text-slate-900 duration-150 lg:block">새 글 쓰기</button>
            <button className="px-10 py-2 my-0 text-white font-bold tracking-widest bg-slate-900 rounded-lg hover:bg-white hover:border-2 hover:border-slate-400 hover:text-slate-900 duration-150">로그인</button>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Header