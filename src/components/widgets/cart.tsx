// import Image, { StaticImageData } from 'next/image'
// import React from 'react'

// const Cart = ({image, etiquette, title, subtitle}: {image: string | StaticImageData, etiquette:string, title:string, subtitle:string}) => {
//   return (
//     <div>
//         <div className='relative bg-neutral rounded-md inline-block'>
//             {/* Etiquette  */}
//             <div className='absolute top-5 left-5 bg-white text-black font-bold px-2 py-1 rounded-sm text-xs uppercase z-10'>{etiquette} </div> 

//             {/* Image */}
//             <Image 
//                 src='/livre1.jpg'
//                 alt='Bibliothèque'
//                 width={200}
//                 height={200}
//                 className='bg-gray-400 bg-gradient-to-t from-primary via-primary to-gray-400 '
//             />

//             {/* Titre et sous-titre */}
//             <div className='p-4'>
//                 <h3 className='text-lg font-bold'>{title}</h3>
//                 <p className='text-sm text-gray-600'>{subtitle}</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Cart

import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
  image: string | StaticImageData;
  etiquette?: string; 
  title?: string;
  subtitle?: string;
  className?: string; 
  onClick?: () => void; 
  date?: string
}

const Card = ({ image, etiquette, title, subtitle, date, className = "", onClick }: CardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden rounded-md  transition-all hover:shadow-lg ${className} max-w-[300px] mx-auto`}

    >
      <div className='relative w-full aspect-square bg-neutral'>
        {/* Étiquette conditionnelle */}
        {etiquette && (
          <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-black font-bold px-2 py-1 rounded-sm text-[10px] uppercase z-10 shadow-sm'>
            {etiquette}
          </div>
        )}

        {/* Image dynamique avec object-fit */}
         {/* Image dynamique avec object-fit */}
        <Image 
          src={image}
          alt="Image"
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-cover grayscale transition-all duration-500 group-hover:grayscale-0 '
        />
      </div>

      {/* Contenu */}
      <div className='p-4 bg-white'>
        <h3 className='text-lg font-bold truncate' title={title}>{title}</h3>
        <p className='text-sm text-gray-600 line-clamp-2'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Card
