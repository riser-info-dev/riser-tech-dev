# Troubleshooting Guide

## Pages Not Loading

If pages are not loading, try these steps:

### 1. Start the Development Server

```bash
npm run dev
```

The server should start on `http://localhost:3000`

### 2. Check if Port 3000 is Available

If port 3000 is already in use, Next.js will automatically use the next available port (3001, 3002, etc.)

### 3. Clear Browser Cache

- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache and cookies
- Try in incognito/private mode

### 4. Check Browser Console

Open browser developer tools (F12) and check for errors in the Console tab.

### 5. Verify All Dependencies are Installed

```bash
npm install
```

### 6. Rebuild the Project

```bash
npm run build
npm start
```

### 7. Check Environment Variables

Make sure `.env.local` file exists (if using SMTP or other features):

```env
ENABLE_SMTP=false
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 8. Common Issues

#### Issue: Blank Page
- Check browser console for JavaScript errors
- Verify all components are properly imported
- Check if there are any hydration errors

#### Issue: 404 Errors
- Verify routes exist in `app/` directory
- Check Next.js router configuration

#### Issue: Styles Not Loading
- Verify Tailwind CSS is configured correctly
- Check `globals.css` is imported in `layout.tsx`

#### Issue: API Routes Not Working
- Verify API routes are in `app/api/` directory
- Check server logs for errors

### 9. Reset Everything

If nothing works, try:

```bash
# Delete node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install

# Delete .next directory
rm -rf .next

# Rebuild
npm run build
npm run dev
```

### 10. Check Logs

Check the terminal where `npm run dev` is running for any error messages.

## Contact

If issues persist, check:
- Node.js version (should be 18+)
- Next.js version compatibility
- All dependencies are installed correctly

