import React from 'react'

const SearchBar = () => {
  return (
    <section id="searchbar"> 
      <div className="container max-w-screen px-5 mb-12 mx-auto">
        <div className='flex justify-between items-center mb-3 px-2'>
          <h1 className='font-bold text-2xl'>클랜목록</h1>
          {/* <ListBox /> */}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center  border border-slate-300 rounded-md w-1/2 px-2 py-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-300 duration-200 hover:scale-110">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input 
            type="text" 
            placeholder='클랜을 검색해주세요'
            className='w-full ml-2 focus:outline-none'
            />
          </div>
          {/* <DropdownMenu /> */}
        </div>
      
      </div>
    </section>
  )
}

export default SearchBar