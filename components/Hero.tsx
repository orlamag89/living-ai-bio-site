'use client'

import { ArrowRight, Zap, Globe, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your website that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-lavender-500">
              updates itself
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop manually updating your website. Living AI Bio-Site automatically syncs your social media, 
            handles bookings, and keeps your content fresh 24/7.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a 
              href="#beta-signup" 
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
            >
              Join Beta
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Zap className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium">Auto-updates</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="h-5 w-5 text-lavender-500" />
                <span className="text-sm font-medium">Instant sites</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Smartphone className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium">Mobile-first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
