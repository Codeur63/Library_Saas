'use client';

import React from 'react'

const Widgets = ({icons,label,is_active}: {icons: React.ReactNode, label: string, is_active: boolean}) => {
  return (
    <div>
        <div className={`w-full flex flex-row gap-4 items-center rounded-md py-3 cursor-pointer ${is_active ? 'border-b-2 border-primary' : ''} hover:border-b-2 hover:border-primary transition-all duration-300 ease-in`}>
            <div className='text-primary w-7 h-5'>{icons}</div> 
            <div className={`${is_active ? 'opacity-90' : ''} text-xs tracking-wide uppercase text-primary opacity-50`}>{label}</div>
        </div>
    </div>
  )
}

export default Widgets;