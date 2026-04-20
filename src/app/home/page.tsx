import Url from '@/components/widgets/url';
import React from 'react'
import Cart from '@/components/widgets/cart';
import Image from 'next/image';
import { EyeIcon, ArrowRight } from 'lucide-react';
import Livre2 from '../../../public/livre2.jpg';
import Biblothèque from '../../../public/biblotheque1.jpg';

const Acceuil = () => {
  return (
    <div className="no-scrollbar px-5 sm:px-10 "> 
       <section>
            <div className='max-w-7xl mx-auto flex gap-6 flex-col pb-10'>
                <nav aria-label="Breadcrumb" className=' mt-4'>
                    <Url is_active={true} label="Accueil" />
                </nav>

             <section className=''>
                 <h1 className='flex flex-col'>
                     <span className='md:text-5xl text-4xl font-extrabold text-primary capitalize tracking-tight'>
                         Find 
                     </span>
                     <span className='md:text-3xl text-2xl font-bold text-gray-600 capitalize'>
                         Your Education
                     </span>
                 </h1>
                 <p className='md:text-lg text-base text-gray-500 mt-2 max-w-2xl italic'>
                     Curated academic assets for your learning journey in Central Africa.
                 </p>   
             </section>

             <section className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
                
                 {/* Banner principal - Prise de 3 colonnes sur 4 */}
                 <div className='xl:col-span-3 relative w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl'>
                     <Image 
                        src={Livre2}
                        alt="Comparative activity economics book cover"
                        fill
                        priority // Boost la performance LCP
                        className='object-cover'
                    />
                    {/* Gradient Overlay mieux géré */}
                    <div className='absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent' />

                    <div className='absolute bottom-0 p-6 md:p-10 text-white w-full'>
                        <div className='max-w-[700px] space-y-4'>
                            <h2 className='text-2xl md:text-4xl font-bold leading-tight'>
                                Comparative activity economics in Afrique Centrale
                            </h2>
                            <p className='text-sm md:text-lg font-light opacity-90 line-clamp-3 md:line-clamp-none'>
                                Explore the evolving landscape of global jurisprudence and the intersection of traditional ethics with digital sovereignty.
                            </p>
                        </div>
                        <div className='flex flex-wrap items-center gap-4 mt-8'>
                            <button className='bg-white text-primary px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg'>
                                Download
                            </button>
                            <button className='flex items-center gap-2 font-semibold hover:text-secondary transition-colors'> 
                                <EyeIcon size={22}/>
                                <span>Read more</span>
                            </button> 
                        </div>
                    </div>
                </div>

                {/* Sidebar Aside - Prise de 1 colonne (Visible uniquement sur Desktop) */}
                <aside className='hidden xl:flex relative flex-col justify-end p-6 bg-primary rounded-2xl overflow-hidden shadow-lg'>
                    <Image
                        src={Biblothèque}
                        alt="Library archives"
                        fill
                        className='object-cover opacity-30 grayscale'
                    /> 
                    <div className='relative z-10 space-y-4'>
                        <h3 className='font-bold text-white text-lg leading-relaxed'>
                            Digitalizing critical jurisprudence for a sovereign future.
                        </h3>
                        <p className='text-white/80 text-sm italic'>
                            Bridging the gap between physical archives and real-time analysis.
                        </p>
                        <button className='text-white flex items-center gap-2 font-bold text-sm bg-white/10 w-full justify-center py-2 rounded-md hover:bg-white/20 transition-all'> 
                            Explore more <ArrowRight size={16}/>
                        </button> 
                    </div>
                </aside>                 
            </section>


            <section className=' mt-6'>
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-2xl font-bold text-primary'>Academic Resources</h2>
                    <span className='text-sm text-gray-400'>Browse all</span>
                </div>
                <hr className='mb-8 border-primary/20' />  

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8">
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                    <Cart 
                        image='/livre1.jpg' 
                        etiquette='Nouveau' 
                        title='Bonjour Monsieur Je vais bien' 
                        author='Dr. Abigael' 
                        download={true} 
                        date='2025-10-15'
                    />
                </div>    
            </section>
        </div>
       </section>
    </div>
  )
}

export default Acceuil;