import React from 'react'
import ClanCardOne from './ClanCardOne'

const ListNew = () => {
  return (
    <section id="list-new">
      <div className="container max-w-screen px-5 py-12 mx-auto">
        <h1 className="font-medium text-3xl lg:font-bold lg:text-5xl">따끈 따끈 신규 클랜</h1> 
        <div className="flex flex-row">
          <ClanCardOne />
          <ClanCardOne />
          <ClanCardOne />
          <ClanCardOne />
        </div>
      </div>
    </section>
  )
}

export default ListNew