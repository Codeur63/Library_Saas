'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
  image: string | StaticImageData;
  etiquette?: string; 
  title: string; 
  author?: string;
  className?: string; 
  onClick?: () => void; 
  date?: string;
  download?: boolean;
}

const Card = ({ image, etiquette, title, author, date, className = "", onClick, download }: CardProps) => {
  return (
    <article 
      onClick={onClick}
      className={`group cursor-pointer flex flex-col bg-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 ${className} w-full max-w-sm mx-auto`}
    >
      <div className='relative w-full aspect-[4/4] sm:aspect-[4/3] bg-neutral-100 overflow-hidden'>

          <Image 
          src={image}
          alt=""
          fill
          className='object-cover blur-xl opacity-20 scale-110 grayscale'
        />
        
        {etiquette && (
          <span className='absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-md text-[10px] uppercase z-10 shadow-sm border border-gray-100'>
            {etiquette}
          </span>
        )}

        <Image 
          src={image}
          alt={`Document : ${title}`} 
          fill
          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 300px"
          className='object-contain p-2 grayscale transition-transform duration-500 group-hover:scale-105'
          loading="lazy"
          {...(typeof image === 'string' ? {} : { placeholder: 'blur' })}
          onClick={()=>console.log('click Image')}
        />
      </div>

      <div className='flex flex-col flex-1 p-4'>
        <header>
          <h3 
            className='text-lg font-bold leading-tight text-primary line-clamp-2 min-h-[1rem] group-hover:text-secondary transition-colors' 
            title={title}
          >
            {title}
          </h3>
        </header>
        
        <div className='mt-auto pt-3 flex justify-between md:flex-col gap-1'>
          <p className='text-sm text-gray-600 font-medium line-clamp-1'>{author}</p>
          <time dateTime={date} className='text-xs text-gray-400'>
            {date}
          </time>
        </div>

        {download && (
          <div className='mt-4'>
            <button 
              type="button"
              aria-label={`Télécharger ${title}`}
              className='bg-primary text-white text-sm font-bold py-2.5 rounded-lg w-full hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-2'
            >
              <span>Télécharger</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </button>
          </div>
        )}
      </div>
    </article>
  )
}

export default Card
