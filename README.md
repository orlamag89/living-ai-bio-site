# Living AI Bio-Site

**Your website that updates itself** - Auto-updating micro-sites for small service vendors.

## 🚀 Features

- **Landing Page**: Hero section, pain points explanation, and beta signup form
- **Vendor Dashboard**: Profile setup and management
- **Auto-Generated Micro-Sites**: Dynamic pages for each vendor at `/[username]`
- **Social Media Integration**: Instagram and TikTok post displays (placeholder for MVP)
- **Instant Booking**: Calendar integration (mocked for MVP)
- **Payment Integration**: Payment/deposit system (placeholder for MVP)
- **AI Chat**: Customer support chat (placeholder for MVP)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (React, App Router)
- **Styling**: TailwindCSS
- **UI Components**: Custom components with Tailwind
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (email/phone)
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Git

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd living-ai-bio-site
npm install
```

### 2. Environment Setup


Copy the example environment file and fill in your Supabase credentials:

```bash
cp env.local .env.local
```

Edit `.env.local` with your actual values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Go to SQL Editor
4. Run the contents of `supabase-schema.sql` to create your tables

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

### Tables

**`vendors`**
- `id` (UUID, Primary Key)
- `name` (VARCHAR, Unique)
- `category` (VARCHAR)
- `ig_handle` (VARCHAR, Optional)
- `tiktok_handle` (VARCHAR, Optional)
- `paypal_email` (VARCHAR)
- `created_at` (TIMESTAMP)

**`beta_signups`**
- `id` (UUID, Primary Key)
- `email` (VARCHAR, Optional)
- `phone` (VARCHAR, Optional)
- `created_at` (TIMESTAMP)

## 🔧 Project Structure

```
living-ai-bio-site/
├── app/                    # Next.js App Router
│   ├── [username]/        # Dynamic vendor pages
│   ├── dashboard/         # Vendor dashboard
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Navbar.tsx        # Navigation
│   ├── Hero.tsx          # Landing hero section
│   ├── PainPoints.tsx    # Pain points section
│   ├── BetaSignup.tsx    # Beta signup form
│   ├── Footer.tsx        # Footer
│   ├── DashboardLayout.tsx # Dashboard wrapper
│   ├── ProfileSetup.tsx  # Vendor profile form
│   └── VendorSite.tsx    # Vendor micro-site
├── lib/                  # Utilities
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Helper functions
├── supabase-schema.sql   # Database schema
└── package.json          # Dependencies
```

## 🎯 MVP Placeholders

The following features are mocked/placeholder for the MVP and will be integrated later:

- **Instagram/TikTok API**: Currently shows placeholder post previews
- **Google Calendar**: Mocked booking slots
- **AI Chat**: Placeholder chat modal
- **Payment System**: Generic payment button (no actual processing)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXT_PUBLIC_APP_URL` | Your app's public URL | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using Next.js, TailwindCSS, and Supabase**
