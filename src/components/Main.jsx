import React from 'react'
import bgImage from '../assets/bg-portfolio.jpg'
import { TypeAnimation } from 'react-type-animation'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={bgImage}
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
        <div className='max-w-[700px] content-center flex-wrap m-auto h-full w-full flex flex-col justify-center lg:items-start'>
          <h1 className='text-white text-white-700 sm:text-5xl text-4xl font-semibold'>
            I'm Lisandra Camps
          </h1>
          <h2 className='text-white text-white-600 first-line:sm:text-3xl text-2xl p-4 font-medium'>
            I'm a
            <TypeAnimation
              sequence={[
                'Front Developer',
                1000, // Waits 1s
                'Coder',
                2000, // Waits 2s
                'Backend Developer',
                () => {
                  console.log('Sequence completed') // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: '1em',
                paddingLeft: '5px',
                display: 'inline-block',
                color: 'white',
              }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <BsFacebook size={20} className='cursor-pointer text-white' />
            <BsTwitter size={20} className='cursor-pointer text-white' />
            <BsInstagram size={20} className='cursor-pointer text-white' />
            <BsLinkedin size={20}className='cursor-pointer text-white'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
