'use client'

import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-teal-500" />
            <span className="text-xl font-bold">Living AI Bio-Site</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md">
            Your website that updates itself. Auto-updating micro-sites for small service vendors.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Living AI Bio-Site. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
