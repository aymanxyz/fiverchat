import React from 'react'
import Message from './message'
import { Link ,useParams } from 'react-router-dom'

export default function Chat() {
    const isOpen = useParams().userid;
  return (
    <div className= {`min-w-[100px] h-[100%] w-full sm:flex flex-col border-x-[1px] border-b-[1px] borderzinc-300 rounded-3xl ${isOpen ? '' : 'hidden'}`}>
        <div className='border border-zinc-300 rounded-t-3xl py-6 p-6 shadow-md flex items-center'>
            <Link to='/' className='pr-8 font-bold text-red-950 sm:hidden sm:text-base text-sm'>back</Link>
            <h3 className='lg:text-lg sm:text-sm text-xs font-bold text-gray-700 hover:text-gray-500 cursor-pointer underline'>edwardgasman414</h3>
        </div>
        <div className='overflow-auto min-h-[200px] h-[500px]  flex-1 flex flex-col '>
                <div className='flex flex-1 flex-col justify-end '>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
        </div>
        <div className='flex gap-x-6 py-6 p-6'>
                <input placeholder='Send message...' className=' outline-none py-2 px-4 w-full border border-zinc-300 rounded-lg'></input>
                <button className=' bg-cyan-500 px-4 rounded-xl text-white font-sans font-semibold'>Send</button>
        </div>
    </div>
  )
}
