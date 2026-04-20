import { ArrowLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Url = ({label,is_active}: {label:string,is_active?:boolean}) => {
  return (
    <div className='hidden sm:flex items-center gap-2 my-5'>
        <p className={`${is_active ? 'text-md text-gray-400 hover:text-black hover:opacity-50 text-primary font-bold' : 'text-md text-gray-400'} cursor-pointer`}>{label}</p>   
        <ChevronRight size={20} className='text-gray-300'/>
    </div>
  )
}

export default Url