

'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import Widgets from './widgets/widgets';
import { 
  Binary, BookCheck, BookCopy, BookOpen, BookText, Cpu, 
  GraduationCap, Languages, Library, Notebook, Radio, 
  School, Stethoscope, Users 
} from 'lucide-react';

const CAREERS_DATA = {
  "Theology": <BookCopy size={20} />,           
  "Computer Science": <Binary size={20} />,    
  "Electronics": <Cpu size={20} />,           
  "Telecoms": <Radio size={20} />,            
  "Social Science": <Users size={20} />,       
  "Translation": <Languages size={20} />,      
  "Medicine": <Stethoscope size={20} /> 
};

const LEVELS_DATA = {
  "Niveau 1": <School size={20} />,
  "Niveau 2": <Notebook size={20} />,
  "Niveau 3": <GraduationCap size={20} />,
  "Master 1": <BookCheck size={20} />,
  "Master 2": <BookText size={20} />,
  "Doctorats": <BookOpen size={20} />
};

interface AsideProps {
  is_active: boolean;
}

const Aside = ({ is_active }: AsideProps) => {

  const careersList = useMemo(() => Object.entries(CAREERS_DATA), []);
  const levelsList = useMemo(() => Object.entries(LEVELS_DATA), []);

  return (
    <aside 
      aria-label="Navigation latérale"
      className={`no-scrollbar overflow-y-auto hidden sm:flex flex-col sticky top-0 h-screen bg-neutral rounded-md py-10 transition-all duration-300
      sm:min-w-[250px] xl:min-w-[300px] ${is_active ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
    >
      <div className='flex flex-col gap-10'>    

        {/* Header */}
        <div className='flex gap-3 items-center px-4'>
          <Image 
            src="/logo-Upac.png" 
            alt="Logo University UPAC" 
            width={70} 
            height={30} 
            priority 
            className="object-contain"
          />
          <div>
            <h1 className='text-wrap md:text-lg text-lg font-bold leading-tight'>University UPAC</h1>
            <p className=' text-sm md:text-md opacity-65 font-medium tracking-wide'>Digital Library</p>
          </div>            
        </div>

        <nav className='flex flex-col gap-8' role="navigation">

          <section>
            <h2 className='text-xs uppercase font-semibold text-gray-400 px-10 mb-4 tracking-widest'>Levels</h2>
            <div className='space-y-1 px-5'>
              {levelsList.map(([label, icon]) => (
                <Widgets key={label} label={label} icons={icon} is_active={false} />
              ))}
            </div>                
          </section>


          <section>
            <h2 className='text-xs uppercase font-semibold text-gray-400 px-10 mb-4 tracking-widest'>Careers</h2>              
            <div className='space-y-1 px-5'> 
              {careersList.map(([label, icon]) => (
                <Widgets key={label} label={label} icons={icon} is_active={false} />
              ))}
            </div>
          </section>         


          <nav aria-label="Autres ressources">
            <h2 className='text-xs uppercase font-semibold text-gray-400 px-10 mb-4 tracking-widest'>Other</h2>
            <div className='px-5'>
              <Widgets label='All Books' icons={<Library size={20} />} is_active={false} />
            </div>
          </nav>
        </nav>
      </div> 
    </aside>
  );
};

export default Aside;


{/* <aside className="p-6 bg-secondary/10 border-l-2 border-secondary rounded-r-lg bg-neutral mx-40">
    <h4 className="text-secondary font-bold uppercase tracking-wider text-sm mb-3 bg-gray-400">
        Why it matters
    </h4>
    <p className="text-black/80 text-sm leading-relaxed italic">
        "Legal and economic researchers spend up to 40% of their time simply locating reliable sources. Our platform eliminates these silos."
    </p>
</aside> */}