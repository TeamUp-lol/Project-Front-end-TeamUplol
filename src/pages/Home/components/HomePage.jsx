import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import ListNew from './ClanList/New/ListNew'
import SearchBar from './SearchBar/SearchBar'
import ListAll from './ClanList/All/ListAll'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ListNew />
      <SearchBar />
      <ListAll />
    </div>
  )
}

export default HomePage