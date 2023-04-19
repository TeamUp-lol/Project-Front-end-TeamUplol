import React from 'react'

const ClanCardTwo = () => {
  return (
    <article className='space-y-2 px-5 py-5 border-b border-slate-300 lg:space-y-0 lg:space-x-3 lg:border lg:border-slate-300 lg:mr-2'>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col w-3/5">
              <h1 className="font-semibold text-xl mb-2">클랜이름</h1>
              <p className='mb-5'>클랜 한줄 소개 클랜 한줄 소개 클랜 한줄 소개 클랜 한줄 소개 클랜 한줄 소개</p>
            </div>
            <img src="src/assets/images/home/Image-clancard.svg" alt="image-logo" className='' />
          </div>
          <div>
            <p>#태그 #태그 #태그</p>
          </div>
      </article>
  )
}

export default ClanCardTwo