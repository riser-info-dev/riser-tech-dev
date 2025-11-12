# RiserTech - Fire & Safety Solutions Website

A modern, responsive website for fire and safety solutions company built with Next.js 15, TypeScript, and Tailwind CSS.
echo "# riser-tech-dev"
## Features

- 🎨 Modern 2026 design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 📧 Enquiry form with SMTP email support
- 📊 Visitor tracking with daily log files
- 🍪 GDPR-compliant cookie consent
- ⚡ Fast performance with Next.js 15
- 🧪 Unit tests included
- ♿ Accessibility focused
- 🌙 Dark mode support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer (SMTP)
- **Icons**: Lucide React
- **Testing**: Jest

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd riser-tech
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
# SMTP Configuration (Optional - Set ENABLE_SMTP=false to disable)
ENABLE_SMTP=true
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@risertech.com
SMTP_TO=info@risertech.com

# IP Geolocation (Optional)
IP_GEOLOCATION_ENABLED=true

# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
riser-tech/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   └── cookie-policy/     # Cookie policy page
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # UI components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── features/     # Feature components
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript types
│   └── __tests__/        # Unit tests
├── logs/                 # Visitor and enquiry logs
└── public/               # Static assets
```

## Features Explained

### Visitor Tracking

Visitor data is logged to daily text files in the `logs/` directory. Each log file is named `visitors-YYYY-MM-DD.log` and contains:
- IP address
- Location (if enabled)
- Browser information
- Operating system
- Device type
- Page visited
- Referrer
- Timestamp

### Enquiry Form

The enquiry form sends emails via SMTP when enabled. If SMTP is disabled, enquiries are logged to `logs/enquiries-YYYY-MM-DD.log` files.

### Cookie Consent

GDPR-compliant cookie consent banner that stores user preferences in localStorage.

## Running Tests

```bash
npm test
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ENABLE_SMTP` | Enable/disable SMTP email | No (default: false) |
| `SMTP_HOST` | SMTP server host | Yes (if SMTP enabled) |
| `SMTP_PORT` | SMTP server port | Yes (if SMTP enabled) |
| `SMTP_USER` | SMTP username | Yes (if SMTP enabled) |
| `SMTP_PASS` | SMTP password | Yes (if SMTP enabled) |
| `SMTP_FROM` | From email address | No |
| `SMTP_TO` | To email address | No |
| `IP_GEOLOCATION_ENABLED` | Enable IP geolocation | No (default: false) |

## Free SMTP Options

- **Gmail**: Free, 500 emails/day limit
- **Outlook**: Free, 300 emails/day limit
- **SendGrid**: Free tier (100 emails/day)
- **Resend**: Free tier (3,000 emails/month)

## License

This project is private and proprietary.

## Support

For support, email info@risertech.com or call +1 234 468 85.
