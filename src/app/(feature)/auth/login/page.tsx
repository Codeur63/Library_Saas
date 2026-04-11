'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';


const page = () => {
  return (
        <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
          
          {/* Background : Dégradé doux et formes organiques */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-white to-blue-600/10" />
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
          </div>
    
          <div className="relative z-10 w-full max-w-md px-6 py-12">
            
            {/* Header : Logo & Brand */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-xl shadow-emerald-500/10 border border-emerald-50 transition-transform hover:scale-105">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase italic">
                  University <span className="text-emerald-600">UPAC</span>
                </h1>
                <p className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                  Academic Library
                </p>
              </div>
            </motion.div>
    
            {/* Card : Authentification */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden"
            >
              {/* Accent border top */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-blue-500" />
              
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    Accès Sécurisé
                  </h2>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    Veuillez utiliser vos identifiants institutionnels pour accéder aux ressources.
                  </p>
                </div>
    
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <Input 
                      type="email"
                      label="Email Institutionnel"
                      placeholder="nom@upac-univ.fr" 
                      className="bg-slate-50 border-slate-100 focus:bg-white transition-all h-12"
                    />
                    <Input 
                      type="password"
                      label="Mot de passe"
                      placeholder="••••••••" 
                      className="bg-slate-50 border-slate-100 focus:bg-white transition-all h-12"
                    />
                  </div>
    
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      Se souvenir de moi
                    </label>
                    <button type="button" className="font-semibold text-emerald-600 hover:text-emerald-700">
                      Oublié ?
                    </button>
                  </div>
    
                  <button 
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-slate-200 active:scale-[0.98]"
                  >
                    Se connecter
                  </button>
                </form>
              </div>
    
              {/* Footer Card */}
              <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center text-sm">
                <span className="text-slate-400">Besoin d'aide ?</span>
                <button className="flex items-center gap-1.5 font-bold text-slate-700 hover:text-emerald-600 transition-colors">
                  <HelpCircle className="w-4 h-4" />
                  Centre d'assistance
                </button>
              </div>
            </motion.div>
    
            {/* Footer externe */}
            <p className="mt-8 text-center text-slate-400 text-xs tracking-wide">
              &copy; 2026 University UPAC. Tous droits réservés.
            </p>
          </div>
        </main>
  )
}

export default page