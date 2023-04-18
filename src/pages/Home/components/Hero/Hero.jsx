import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative flex items-center max-w-screen h-72 bg-gradient-to-br from-purple-900 to-purple-500 lg:h-96 ">
        <div className='absolute flex flex-col px-4 py-10 left-1 bottom-2 lg:left-96 lg:bottom-12'>
          <h1 className='font-bold text-white text-2xl z-10 lg:text-6xl mb-3'>같이 롤 할 사람?</h1>
          <p className='font-light text-white text-xl z-10 lg:font-semibold'> 이제 마음 맞는 팀원을 더 쉽게 만나세요 !</p>
        </div>
        <img src="src/assets/images/home/image-hero.svg" alt="image-hero-lux"
        className='absolute right-0 h-72 aspect-w-2 aspect-h-1 lg:max-w-screen lg:h-96 lg:right-72'/>
        <div className="absolute opacity-10 w-full bottom-0 left-0 h-72 lg:h-96 bg-gradient-to-br from-black to-white"></div>
      </div>
    </section>
  )
}

export default Hero