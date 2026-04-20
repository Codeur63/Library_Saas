'use client';

import Input from '@/components/ui/input';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Register() {
  return (
    <div className='relative bg-neutral overflow-hidden'>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-white to-blue-600/5" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="hidden md:absolute inset-0 md:flex items-center justify-center">
        <p className='font-bold text-[400px] opacity-50 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600'>UPAC</p>   
      </div> 

      <div className='relative min-h-screen flex flex-col gap-8 justify-center items-center p-4'>
        <div className='text-center space-y-1'>
          <p className='text-primary font-mono font-black tracking-tighter md:text-3xl xl:text-5xl text-2xl uppercase'>
            University UPAC 
          </p> 
          <p className='text-primary/60 font-bold tracking-[0.2em] text-xs md:text-sm uppercase opacity-70'>
            Academic Library
          </p>  
        </div>

        <div className='w-full max-w-[500px] rounded-md bg-white md:bg-opacity-80 shadow-xl shadow-primary/5 border-l-[5px] border-primary overflow-hidden '>
          <div className='md:px-12 px-8 py-14 flex flex-col gap-10'>
            
            <div className='space-y-3'>
              <h1 className='font-bold text-2xl text-primary tracking-tight'>Access Ledger</h1>  
              <p className='text-gray-500 text-sm leading-relaxed'>
                Please authenticate with your <span className="font-semibold text-primary/80">institutional credentials</span> to access the library.
              </p>
            </div>

            <form onSubmit={(e)=>e.preventDefault()}>
              <div className='flex flex-col gap-5'>                
                <Input 
                  className='bg-gray-50 border-gray-200 focus:bg-white transition-all' 
                  placeholder='ex. email@upac.edu' 
                  label='Institutional Email'
                  type="email"
                />
                <Input 
                  className='bg-gray-50 border-gray-200 focus:bg-white transition-all' 
                  placeholder='••••••••' 
                  label='Password'
                  type="password"
                />
                <Input 
                  className='bg-gray-50 border-gray-200 focus:bg-white transition-all' 
                  placeholder='••••••••' 
                  label='Confirm Password'
                  type="password"
                />
                <button type="submit" className=" w-full mt-2 bg-primary text-white py-3 rounded-md font-bold uppercase tracking-wider hover:bg-black/90 transition-colors ease-linear">
                  Sign Up
                </button>
              </div>
            </form>

            <div className='pt-6 border-t border-gray-100 flex justify-between items-center text-xs font-bold  tracking-widest'>
                <Link href="/auth/login" className='text-primary cursor-pointer hover:underline underline-offset-4 transition-all text-[12px] '>
                  Sign In
                </Link> 
                <p className='text-primary cursor-pointer hover:underline underline-offset-4 transition-all'>
                  Help Center
                </p>
            </div> 
          </div> 
        </div> 
      </div>
    </div>
  )
}

export default Register;
