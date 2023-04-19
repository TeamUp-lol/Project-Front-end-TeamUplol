import React from 'react'

const ClanCardOne = () => {
  return (
    <article className='lg:w-11/12 max-w-screen mr-4 mx-auto'>
      <div className="p-2 my-4 rounded-2xl border border-slate-300 w-72 lg:w-full">
        <div className="flex flex-col rounded-l-xl">
          <img src="src/assets/images/home/Image-clancard.svg" alt="image-clan-nothing" 
          className='rounded-xl transform hover:scale-105 hover:rounded-xl duration-200'/>
          <div className="p-6 text-center">
            <h2 className='lg:font-bold text-xl lg:text-2xl'>[GM] Clan</h2>
            <p className='mt-4 mb-4 text-base lg:text-xl'>안녕하세요 ! GM길드 입니다.</p>
            <p className=''>Since 23.03.27</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ClanCardOne