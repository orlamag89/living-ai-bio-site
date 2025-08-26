'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Sparkles, LogOut, Settings, Home } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // TODO: Replace with actual Supabase auth check
    // const { data: { user } } = await supabase.auth.getUser()
    // setIsAuthenticated(!!user)
    
    // For MVP, simulate authentication
    setTimeout(() => {
      setIsAuthenticated(true)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleLogout = async () => {
    // TODO: Replace with actual Supabase logout
    // await supabase.auth.signOut()
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    router.push('/')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-teal-500" />
              <span className="text-xl font-bold text-gray-900">Living AI Bio-Site</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
