import NavWidgets from '@/components/widgets/navWidgets'
import Url from '@/components/widgets/url';
import React from 'react'
import Cart from '@/components/widgets/cart';

const Acceuil = () => {
  return (
    <main className=''>
            <div>
                <NavWidgets image='' />
            </div>
        <div className='max-w-7xl mx-auto'>
            <div>
                <div className='flex justify-start my-'>
                    <Url is_active={true} label="Accueil" />
                </div>
            </div>
            <div>
                <Cart image='/livre1.jpg'  etiquette='Nouveau'  title='Bonjour Monsieur' subtitle='Memoire 2025 du mont cameroun'/>
            </div>
        </div>
    </main>
  )
}

export default Acceuil;