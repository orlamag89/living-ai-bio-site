import { XCircle } from 'lucide-react'
import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <XCircle className="mx-auto h-16 w-16 text-red-500 mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Your payment was cancelled. No charges were made to your account.
        </p>
        
        <div className="space-y-4">
          <Link href="/" className="btn-primary block w-full">
            Return Home
          </Link>
          
          <p className="text-sm text-gray-500">
            You can try again anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
