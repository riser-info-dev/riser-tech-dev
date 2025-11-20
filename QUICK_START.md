# Quick Start Guide - RiserTech Website

## 🚀 Quick Setup (3 Minutes)

### 1. Install Dependencies (1 minute)
```bash
npm install
```

### 2. Configure Environment Variables (1 minute)
Create a `.env.local` file in the root directory:

```env
# SMTP Configuration (Optional - Set ENABLE_SMTP=false to disable)
ENABLE_SMTP=false
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@risertech.com
SMTP_TO=info@risertech.com

# IP Geolocation (Optional)
IP_GEOLOCATION_ENABLED=false

# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server (1 minute)
```bash
npm run dev
```

## ✅ That's It!

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website!

## 📝 Important Notes

1. **SMTP is Optional**: The site works without SMTP. Enquiries will be logged to files in the `logs/` directory
2. **Port**: The app runs on `http://localhost:3000` by default
3. **Logs**: Visitor and enquiry logs are automatically created in the `logs/` directory

## 🐛 Troubleshooting

- **Port already in use?** Next.js will automatically use the next available port (3001, 3002, etc.)
- **Dependencies not installing?** Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- **Build errors?** Make sure you're using Node.js 18 or higher

For detailed setup and configuration, see `README.md` or `SETUP_GUIDE.md`
