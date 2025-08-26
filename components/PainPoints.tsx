'use client'

import { Clock, Calendar, Smartphone, TrendingUp } from 'lucide-react'

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tired of these website headaches?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We get it. Running a business is hard enough without website maintenance.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Clock className="h-5 w-5 flex-none text-teal-500" />
                Manual Updates
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Spending hours updating your website every time you post on Instagram or TikTok? 
                  That's time you could be spending on your business.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Calendar className="h-5 w-5 flex-none text-lavender-500" />
                Booking Chaos
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Juggling DMs, emails, and phone calls for bookings? 
                  Your customers want instant, professional booking experiences.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Smartphone className="h-5 w-5 flex-none text-teal-500" />
                Mobile Nightmares
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Your website looks great on desktop but breaks on mobile? 
                  Most of your customers are on their phones.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <TrendingUp className="h-5 w-5 flex-none text-lavender-500" />
                Growth Stuck
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Your business is growing but your website isn't keeping up? 
                  You're losing customers to competitors with better online presence.
                </p>
              </dd>
            </div>
          </dl>
        </div>
        
        <div className="mt-16 text-center">
          <div className="card inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Living AI Bio-Site Solution
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We automatically sync your social media, handle bookings, and keep your content fresh. 
              You focus on your business, we handle your website.
            </p>
            <a href="#beta-signup" className="btn-secondary">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
