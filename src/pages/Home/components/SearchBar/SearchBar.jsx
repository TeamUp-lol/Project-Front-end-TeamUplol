import React,{ useState, useCallback } from 'react'
import DropdownMenu from '../../../../components/headlessui/DropdownMenu'
import ListBox from '../../../../components/headlessui/ListBox'

const SearchBar = () => {
  const [sortOption, setSortOption] = useState('')

  const handleSortOptionChange = useCallback((e) => {
    setSortOption(e.target.value)
  },[])

  return (
    <section id="searchbar"> 
      <div className="container px-5 mx-auto mb-12 max-w-screen">
        <div className='flex items-center justify-between mb-3'>
          <h1 className='text-2xl font-bold'>클랜목록</h1>
          <div className='flex items-center justify-between w-48 md:justify-center md:w-64 md:space-y-0 md:flex-row md:space-x-4'>
            <label className='text-xs text-zinc-400'>Sort By:</label>
            <ListBox />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center w-1/2 px-2 py-3 border rounded-md border-slate-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-300 duration-200 hover:scale-110">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input 
            type="text" 
            placeholder='클랜을 검색해주세요'
            className='w-full ml-2 focus:outline-none'
            />
          </div>
          <DropdownMenu/>
        </div>
      
      </div>
    </section>
  )
}

export default SearchBar