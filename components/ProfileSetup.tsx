'use client'

import { useState } from 'react'
import { Save, CheckCircle, Instagram, Video, Mail } from 'lucide-react'

export default function ProfileSetup() {
  const [profile, setProfile] = useState({
    name: '',
    category: '',
    igHandle: '',
    tiktokHandle: '',
    paypalEmail: ''
  })
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      // TODO: Replace with actual Supabase integration
      // const { data, error } = await supabase
      //   .from('vendors')
      //   .upsert([profile])
      
      // For MVP, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    } catch (err) {
      console.error('Error saving profile:', err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Set Up Your Profile
        </h1>
        <p className="text-lg text-gray-600">
          Configure your vendor profile to generate your auto-updating micro-site.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Vendor Name *
              </label>
              <input
                type="text"
                id="name"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Your business name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                value={profile.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                <option value="photography">Photography</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
                <option value="fitness">Fitness</option>
                <option value="beauty">Beauty</option>
                <option value="food">Food & Catering</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="igHandle" className="block text-sm font-medium text-gray-700 mb-2">
                <Instagram className="inline h-4 w-4 mr-2" />
                Instagram Handle
              </label>
              <input
                type="text"
                id="igHandle"
                value={profile.igHandle}
                onChange={(e) => handleInputChange('igHandle', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="@username"
              />
            </div>
            
            <div>
              <label htmlFor="tiktokHandle" className="block text-sm font-medium text-gray-700 mb-2">
                <Video className="inline h-4 w-4 mr-2" />
                TikTok Handle
              </label>
              <input
                type="text"
                id="tiktokHandle"
                value={profile.tiktokHandle}
                onChange={(e) => handleInputChange('tiktokHandle', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="@username"
              />
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment</h2>
          
          <div>
            <label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-2" />
              PayPal Email *
            </label>
            <input
              type="email"
              id="paypalEmail"
              value={profile.paypalEmail}
              onChange={(e) => handleInputChange('paypalEmail', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSaving}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="h-5 w-5" />
                <span>Save Profile</span>
              </>
            )}
          </button>
          
          {isSaved && (
            <div className="flex items-center space-x-2 text-teal-600">
              <CheckCircle className="h-5 w-5" />
              <span>Profile saved!</span>
            </div>
          )}
        </div>
      </form>

      {profile.name && (
        <div className="mt-8 card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview Your Site</h3>
          <p className="text-gray-600 mb-4">
            Your micro-site will be available at:
          </p>
          <code className="block bg-gray-100 px-4 py-2 rounded-lg text-sm font-mono">
            {process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/{profile.name.toLowerCase().replace(/\s+/g, '-')}
          </code>
          <p className="text-sm text-gray-500 mt-2">
            * Site will be generated after you save your profile
          </p>
        </div>
      )}
    </div>
  )
}
