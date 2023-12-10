import React from 'react'
import Header from './header'
import Chat from './chat'

export default function MobileChat() {
  return (
    <div className='h-screen'>
        <Header/>
        <div className='h-fit sm:h-[calc(100%-80px)] flex px-6 py-8 gap-x-4'>
            <Chat/>
        </div>
    </div>
  )
}
