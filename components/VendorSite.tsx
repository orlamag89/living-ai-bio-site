'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Calendar, CreditCard, Instagram, Video, Heart } from 'lucide-react'

interface Vendor {
  id: string
  name: string
  category: string
  igHandle: string
  tiktokHandle: string
  paypalEmail: string
  created_at: string
}

interface VendorSiteProps {
  username: string
}

export default function VendorSite({ username }: VendorSiteProps) {
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showBooking, setShowBooking] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    // TODO: Replace with actual Supabase query
    // const { data, error } = await supabase
    //   .from('vendors')
    //   .select('*')
    //   .eq('name', username.replace(/-/g, ' '))
    //   .single()
    
    // For MVP, simulate vendor data
    setTimeout(() => {
      setVendor({
        id: '1',
        name: username.replace(/-/g, ' '),
        category: 'Photography',
        igHandle: '@examplephotographer',
        tiktokHandle: '@examplephotographer',
        paypalEmail: 'example@email.com',
        created_at: new Date().toISOString()
      })
      setIsLoading(false)
    }, 1000)
  }, [username])

  const handlePayment = () => {
    // TODO: Replace with actual payment integration
    alert('Payment integration coming soon!')
  }

  const handleBooking = () => {
    setShowBooking(true)
    // TODO: Integrate with Google Calendar API
  }

  const handleChat = () => {
    setShowChat(true)
    // TODO: Integrate with AI chat system
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading vendor site...</p>
        </div>
      </div>
    )
  }

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vendor Not Found</h1>
          <p className="text-gray-600">This vendor profile doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{vendor.name}</h1>
            <p className="text-lg text-gray-600 capitalize">{vendor.category}</p>
            
            <div className="flex items-center justify-center space-x-6 mt-4">
              {vendor.igHandle && (
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-teal-500">
                  <Instagram className="h-5 w-5" />
                  <span>{vendor.igHandle}</span>
                </a>
              )}
              {vendor.tiktokHandle && (
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-lavender-500">
                  <Video className="h-5 w-5" />
                  <span>{vendor.tiktokHandle}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={handleChat}
            className="card text-center hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <MessageCircle className="h-8 w-8 text-teal-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">Chat with me</h3>
            <p className="text-sm text-gray-600">Get instant answers about my services</p>
          </button>
          
          <button
            onClick={handleBooking}
            className="card text-center hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <Calendar className="h-8 w-8 text-lavender-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Booking</h3>
            <p className="text-sm text-gray-600">Book a session in seconds</p>
          </button>
          
          <button
            onClick={handlePayment}
            className="card text-center hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <CreditCard className="h-8 w-8 text-teal-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay/Deposit</h3>
            <p className="text-sm text-gray-600">Secure payment integration</p>
          </button>
        </div>

        {/* Social Media Posts */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Latest Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instagram Post */}
            {vendor.igHandle && (
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 h-48 flex items-center justify-center">
                  <Instagram className="h-16 w-16 text-white" />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Instagram className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium text-gray-900">{vendor.igHandle}</span>
                  </div>
                  <p className="text-sm text-gray-600">Latest Instagram post preview</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>123</span>
                    </span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* TikTok Post */}
            {vendor.tiktokHandle && (
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-br from-pink-400 to-red-400 h-48 flex items-center justify-center">
                  <Video className="h-16 w-16 text-white" />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="h-4 w-4 text-pink-500" />
                    <span className="text-sm font-medium text-gray-900">{vendor.tiktokHandle}</span>
                  </div>
                  <p className="text-sm text-gray-600">Latest TikTok video preview</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>456</span>
                    </span>
                    <span>1 hour ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              * Posts automatically sync from your social media accounts
            </p>
          </div>
        </div>
      </main>

      {/* Modals */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Book a Session</h3>
            <p className="text-gray-600 mb-4">
              Available time slots (mock data for MVP):
            </p>
            <div className="space-y-2 mb-6">
              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time) => (
                <button
                  key={time}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  {time} - Available
                </button>
              ))}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowBooking(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Google Calendar integration coming soon!')
                  setShowBooking(false)
                }}
                className="flex-1 btn-primary"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Chat with {vendor.name}</h3>
            <p className="text-gray-600 mb-4">
              AI chat assistant coming soon! This will help answer questions about services, pricing, and availability.
            </p>
            <button
              onClick={() => setShowChat(false)}
              className="w-full btn-primary"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
