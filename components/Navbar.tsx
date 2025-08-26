'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-teal-500" />
            <span className="text-xl font-bold text-gray-900">Living AI Bio-Site</span>
          </Link>
          
          <Link 
            href="#beta-signup" 
            className="btn-primary"
          >
            Join Beta
          </Link>
        </div>
      </div>
    </nav>
  )
}
