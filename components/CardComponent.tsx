import React from 'react'

interface cardProps{
    title:string 
    text?:string
    click:()=>void 
    label:string
}


function CardComponent({
    title,
    text,
    click,
    label
}:cardProps) {
  return (
    <div className='shadow-md flex flex-col justify-center pl-10 py-5 space-y-4 bg-gray-100'>
        <span className='text-xl mb-5 font-bold'>{title}</span>
        <span className='text-sm text-black'>{text}</span>
        <button className='w-2/5 bg-blue-600 text-white py-2 rounded-md'>{label}</button>
    </div>
  )
}

export default CardComponent