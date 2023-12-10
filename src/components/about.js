import React from 'react'

export default function About() {
  return (
    <div className='w-[400px] hidden lg:block'>
        <div>About <span className='font-bold underline'> UserName598</span></div>
        <div className='flex justify-between mt-2'>
            <div>From</div>
            <div className='font-semibold'>Romania</div>
        </div>
        <div className='flex justify-between mt-2'>
            <div>On Fiverr sice</div>
            <div className='font-semibold'>Apr 2023</div>
        </div>
    </div>
  )
}
