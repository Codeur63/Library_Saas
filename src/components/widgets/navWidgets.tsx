'use client'

import React, {useState} from 'react'
import Input from '@/components/ui/input';
import { Bell, Logs, Search } from 'lucide-react';
import Image, { StaticImageData } from 'next/image' 
import { motion, AnimatePresence } from 'framer-motion';
import { Binary, BookCheck, BookCopy, BookOpen, BookText, Cpu, GraduationCap, Languages, Library, Notebook, Radio, School, Stethoscope, Users } from 'lucide-react'
import Widgets from './widgets';

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

const NavWidgets = ({image}: {image:string | StaticImageData}) => {
  const [active, setActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className='w-full'>
        <div className='relative flex sm:hidden flex-col gap-4' >
            <div className='flex justify-between items-center p-5'>
                <div className='flex md:hidden gap-2 items-center'>
                    <Image src="/logo-Upac.png" alt="Logo" width={40} height={20} /> 
                    <div>
                        <p className='text-black font-bold text-xl  uppercase'>Upac</p>   
                        <p className='text-gray-300 text-xs'>Université Protestante d'Afrique Centrale</p>
                    </div> 
                </div>
                    <Logs size={20} onClick={()=>{
                        setMenuActive(!menuActive);
                        console.log(menuActive);
                    }} />

            </div>
            <AnimatePresence>
                {menuActive && (
                    <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-5 right-5 top-full mt-2 bg-white shadow-xl border border-gray-100 rounded-lg z-50 p-4"
                    >
                    <p className="text-xs font-bold text-primary mb-3 uppercase tracking-widest">Filtrer par Niveau</p>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.keys(levels).map((niveau) => (
                        <Widgets key={niveau} label={niveau} icons={levels[niveau as keyof typeof levels]} is_active={false}/>
                        ))}
                    </div>
                    <hr className='my-3 opacity-60' />
                    <p className="text-xs font-bold text-primary mb-3 uppercase tracking-widest">Filtrer par Filière</p>
                    <div className="grid grid-cols-2 gap-2">
                        {Object.keys(careers).map((niveau) => (
                        <Widgets key={niveau} label={niveau} icons={careers[niveau as keyof typeof careers]} is_active={false}/>
                        ))} 
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            <div className='px-5 w-full relative'>
                <Input className='w-full bg-neutral px-5' placeholder='search catalog ...'/>
                <div className='bg-white absolute shadow-sm top-1/2 right-5 transform -translate-y-1/2 py-[10px] w-10 flex rounded-full items-center justify-center'>
                <Search size={20} />
                </div> 
            </div>
        </div>
        <div className='hidden sm:flex items-center justify-around bg-white rounded-sm shadow-sm py-[12px] px-5 '>

            <div className='relative flex items-center'>
                <Input className='relative md:min-w-[400px] sm:max-w-[200px] xl:min-w-[500px] px-12 focus-visible:outline-none focus-visible:ring-0 bg-neutral' placeholder='search catalog ... '>
                </Input>
                <div className='bg-white absolute shadow-sm top-1/2 right-1 transform -translate-y-1/2 py-[11px] w-12 flex items-center justify-center'>
                    <Search size={20} />
                </div> 
            </div>

            {/* Menu */}
            <div className='hidden xl:flex gap-10 items-center'>
                <p className={`${active ? 'opacity-100 border-b-2 border-primary' : 'opacity-70'} text-primary cursor-pointer py-2`} onClick={() => setActive(!active)}>Catalog</p> 
                <p className={`${active ? 'opacity-100 border-b-2 border-primary' : 'opacity-70'} text-primary cursor-pointer py-2`} onClick={() => setActive(!active)}>Journal</p> 
                <p className={`${active ? 'opacity-100 border-b-2 border-primary' : 'opacity-70'} text-primary cursor-pointer py-2`} onClick={() => setActive(!active)}>Bibliography</p> 
            </div>


            <div className='flex items-center gap-4'>
                <Bell size={20} className='cursor-pointer' />
                <div className='flex itemss-center gap-4'>
                    <Image src={image} width={40} height={40} alt="logo-Upac" className='rounded-lg'/>
                    <div className='flex flex-col items-start'>
                    <p className='text-gray-300 lowercase text-xs'>Good Morning,</p>
                    <p className='font-bold text-md'>UPAC</p>
                    </div>  
                </div> 
            </div>
        </div>
    </div>
  )
}

export default NavWidgets