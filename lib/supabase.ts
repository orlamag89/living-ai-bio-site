import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      vendors: {
        Row: {
          id: string
          name: string
          category: string
          ig_handle: string | null
          tiktok_handle: string | null
          paypal_email: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          ig_handle?: string | null
          tiktok_handle?: string | null
          paypal_email: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          ig_handle?: string | null
          tiktok_handle?: string | null
          paypal_email?: string
          created_at?: string
        }
      }
      beta_signups: {
        Row: {
          id: string
          email: string | null
          phone: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email?: string | null
          phone?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          phone?: string | null
          created_at?: string
        }
      }
    }
  }
}
