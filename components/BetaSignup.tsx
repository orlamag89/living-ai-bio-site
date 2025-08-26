'use client'

import { useState } from 'react'
import { Mail, Phone, CheckCircle } from 'lucide-react'

export default function BetaSignup() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // TODO: Replace with actual Supabase integration
      // const { data, error } = await supabase
      //   .from('beta_signups')
      //   .insert([{ email, phone }])
      
      // For MVP, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      setEmail('')
      setPhone('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="beta-signup" className="py-20 bg-white">
        <div className="mx-auto max-w-2xl text-center px-6">
          <CheckCircle className="mx-auto h-16 w-16 text-teal-500 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            You're on the list! 🎉
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We'll notify you as soon as we launch. In the meantime, 
            follow us on social media for updates.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Add Another Email
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="beta-signup" className="py-20 bg-white">
      <div className="mx-auto max-w-2xl text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join the Beta Waitlist
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Be among the first to experience the future of vendor websites. 
          Get early access and special pricing.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="flex-1">
              <label htmlFor="phone" className="sr-only">Phone (optional)</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone (optional)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Joining...' : 'Join Beta Waitlist'}
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
