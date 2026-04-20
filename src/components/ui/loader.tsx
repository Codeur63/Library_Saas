import React from 'react'

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* Le cercle tournant */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
      
      {/* Petit texte optionnel */}
      <p className="text-xs font-mono font-bold text-primary/60 uppercase tracking-widest animate-pulse">
        Loading Library...
      </p>
    </div>
  )
}
