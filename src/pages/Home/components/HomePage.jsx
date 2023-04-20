import React,{ useEffect, useState } from 'react'

import Header from './Header/Header'
import Hero from './Hero/Hero'
import ListNew from './ClanList/New/ListNew'
import SearchBar from './SearchBar/SearchBar'
import ListAll from './ClanList/All/ListAll'

import useGetClanList from '../../../hooks/useGetClanList'

const HomePage = () => {
  const clanList = useGetClanList()

  return (
    <div>
      <Header />
      <Hero />
      <ListNew />
      <SearchBar />
      <ListAll clanList={clanList}/>
    </div>
  )
}

export default HomePage