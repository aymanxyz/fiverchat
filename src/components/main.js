import React from 'react'
import AllMessages from './allMessages'
import Chat from './chat'
import About from './about'
import Header from './header'

export default function Main() {
  return (
    <div className='h-screen'>
        <Header/>
        <div className='h-[calc(100vh-80px)] flex px-6 py-8 gap-x-4'>
            <AllMessages/>
            <Chat/>
            <About/>
        </div>
    </div>
    
  )
}
