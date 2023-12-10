import React from 'react'
import Contact from './contact'
import { useParams } from 'react-router-dom'

export default function AllMessages() {
  const userid = useParams().userid;
  return (
    <div className={`sm:flex flex-col gap-y-2 h-[100%] w-full sm:w-fit ${userid ? 'hidden' : ''}`}>
        <div className='font-semibold text-lg p-4'>All messages</div>
        <div className='overflow-auto'>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
        </div>
    </div>
  )
}
