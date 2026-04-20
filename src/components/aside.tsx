'use client';

import Image from 'next/image'
import React from 'react'
import Widgets from './widgets/widgets'
import { Binary, BookCheck, BookCopy, BookOpen, BookText, Cpu, GraduationCap, Languages, Library, Notebook, Radio, School, Stethoscope, Users } from 'lucide-react'

const careers = {
  "theology": <BookCopy size={20} />,           
  "computer Science": <Binary size={20} />,    
  "electronics": <Cpu size={20} />,           
  "telecoms": <Radio size={20} />,            
  "social Science": <Users size={20} />,       
  "translation": <Languages size={20} />,      
  "Medecine": <Stethoscope size={20} /> 
}

const levels = {
    "Niveau 1": <School size={20} />,
    "Niveau 2": <Notebook size={20} />,
    "Niveau 3": <GraduationCap size={20} />,
    "Master 1": <BookCheck size={20} />,
    "Master 2": <BookText size={20} />,
    "Doctorats": <BookOpen size={20} />
}

const Aside = ({is_active}: {is_active: boolean}) => {
  return (
    <section className={`hidden sm:block sm:w-full sm:min-w-[250px]  xl:min-w-[300px] min-h-screen bg-neutral rounded-md overflow-x-auto  py-10 ${is_active ? 'block' : 'hidden'}`}>
        <div className='flex flex-col gap-10'>       
            <div className='flex gap-2 items-center px-1 md:px-4'>
                <Image src="/logo-Upac.png" alt="Logo" width={70} height={30} />
                <div>
                <p className='text-wrap xl:text-lg text-md font-semibold '>University UPAC</p>
                <span className='text-sm opacity-65 tracking-wider'>Digital Library</span>
                </div>            
            </div>

            {/* Level */}

            <div className='flex flex-col gap-4'>
                <p className='text-gray-400 px-10'>Levels</p>
                <div className='space-y-2 px-5'>
                    {Object.values(levels).map((level, index) => (
                        <Widgets key={index} label={Object.keys(levels)[index]} icons={level} is_active={false} />
                    ))}
                </div>                
            </div>

            {/* careers  */}
            <div className='flex flex-col gap-4'>
                <p className='text-gray-400 px-10 '>Careers</p>              
                <div className='space-y-2 px-5'> 
                    {Object.values(careers).map((career, index) => (
                        <Widgets key={index} label={Object.keys(careers)[index]} icons={career} is_active={false} />
                    ))}
                </div>

            </div>         

            {/* Other  */}
            <div className='flex flex-col gap-4'>
                <p className='text-gray-400 px-10'>Other</p>
                <div className='px-5'>
                    <Widgets label='All Books' icons={<Library size={20} />} is_active={false} />
                </div>
            </div>
        </div> 

    </section>
  )
}

export default Aside 