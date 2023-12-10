import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    let name = "edwardgasman414";
  return (
    <Link to={`/${name}`} className='flex gap-4 hover:bg-neutral-50 cursor-pointer p-4 rounded-lg max-w-[500px] w-|500px]'>
        <div className='w-12 flex-none'> <img className='rounded-full' alt='contact_image' src='https://data1.ibtimes.co.in/en/full/606792/nihal-bitla.jpg?h=450&l=50&t=40'></img></div>
        <div className='flex flex-col justify-around grow min-w-[42px] sm:w-[45px] lg:w-[100%]'>
            <div className='font-bold truncate'>edwardgasman414</div>
            <div className='truncate'>Can you help me</div>
        </div>
        <div className='flex-none justify-end w-14'>
            <div className='font-semibold text-xs mt-1 text-neutral-500'>8 months</div>
        </div>
    </Link>
  )
}
