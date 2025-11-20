# Code Review - RiserTech Project

**Review Date:** 2025-01-14  
**Project:** RiserTech - Fire & Safety Solutions Website  
**Framework:** Next.js 15 (App Router), TypeScript, Tailwind CSS

---

## 🔴 Critical Issues

### 1. **XSS Vulnerability in Email Template** ⚠️ HIGH PRIORITY
**Location:** `src/lib/email.ts:33-40`

User input is directly inserted into HTML email template without sanitization, making it vulnerable to XSS attacks if the email is viewed in an HTML-capable email client.

```typescript
html: `
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Message:</strong></p>
  <p>${data.message || 'No message provided'}</p>
```

**Recommendation:** Sanitize all user inputs before inserting into HTML. Use a library like `DOMPurify` or escape HTML entities.

### 2. **Missing Rate Limiting** ⚠️ HIGH PRIORITY
**Location:** `app/api/send-enquiry/route.ts`, `app/api/track-visitor/route.ts`

API routes have no rate limiting, making them vulnerable to:
- Spam/abuse attacks
- DoS attacks
- Email bombing (if SMTP enabled)

**Recommendation:** Implement rate limiting using middleware or a library like `@upstash/ratelimit` or `rate-limiter-flexible`.

### 3. **Insecure External API Call** ⚠️ MEDIUM PRIORITY
**Location:** `src/lib/visitor-info.ts:69`

Using HTTP instead of HTTPS for external API call:
```typescript
const response = await fetch(`http://ip-api.com/json/${cleanIP}...`);
```

**Recommendation:** Change to HTTPS: `https://ip-api.com/json/${cleanIP}...`

### 4. **No Request Size Limits** ⚠️ MEDIUM PRIORITY
**Location:** API routes

No limits on request body size, which could lead to memory exhaustion attacks.

**Recommendation:** Add body size limits in Next.js config or middleware.

---

## 🟡 Important Improvements

### 5. **Documentation Mismatch**
**Location:** `QUICK_START.md`

The `QUICK_START.md` file contains content about a "Student Registration System" which doesn't match the RiserTech project. This is confusing and should be updated or removed.

**Recommendation:** Update `QUICK_START.md` with RiserTech-specific quick start instructions, or delete it if not needed.

### 6. **Console.error in Production Code**
**Location:** Multiple files (6 occurrences)

Using `console.error` in production code. Should use a proper logging solution.

**Files:**
- `app/api/send-enquiry/route.ts:31`
- `app/api/track-visitor/route.ts:100`
- `src/lib/email.ts:65`
- `src/lib/logger.ts:45,68`

**Recommendation:** Replace with proper logging utility that can be configured for different environments (e.g., structured logging, log levels).

### 7. **Missing CORS Configuration**
**Location:** API routes

No explicit CORS headers set. While Next.js handles this by default, explicit configuration is recommended for production.

**Recommendation:** Add CORS middleware or configure in `next.config.ts`.

### 8. **Error Information Leakage**
**Location:** `app/api/send-enquiry/route.ts:14`

Validation errors expose internal schema structure:
```typescript
{ success: false, message: 'Invalid form data', errors: validationResult.error.issues }
```

**Recommendation:** Sanitize error messages in production to avoid exposing internal structure.

### 9. **Missing Input Sanitization for Logs**
**Location:** `src/lib/logger.ts`

User input is logged directly without sanitization, which could lead to log injection attacks.

**Recommendation:** Sanitize inputs before logging, especially for fields like `name`, `email`, `message`.

### 10. **No Request Validation for Track Visitor**
**Location:** `app/api/track-visitor/route.ts:81-82`

No validation on incoming request body. Malicious or malformed data could cause issues.

**Recommendation:** Add Zod schema validation similar to the enquiry route.

---

## 🟢 Code Quality Observations

### Positive Aspects ✅

1. **Good Type Safety:** TypeScript is used throughout with proper types
2. **Validation:** Zod schemas are used for form validation
3. **Error Handling:** Try-catch blocks are present in API routes
4. **Modular Structure:** Well-organized component and utility structure
5. **Testing:** Unit tests are included
6. **Environment Variables:** Proper use of environment variables for configuration
7. **Gitignore:** Proper `.gitignore` file excluding sensitive files

### Areas for Enhancement

1. **IP Validation:** The IPv6 regex in `isValidIP` is basic and may not catch all edge cases
2. **Email Template:** Consider using a template engine for better maintainability
3. **Logging Strategy:** Consider structured logging (JSON format) for better log analysis
4. **API Response Consistency:** Standardize API response format across all routes
5. **Type Exports:** Some types could be better organized in the types directory

---

## 📋 Recommended Action Items

### Immediate (Security)
1. ✅ Fix XSS vulnerability in email template
2. ✅ Implement rate limiting on API routes
3. ✅ Change HTTP to HTTPS for external API calls
4. ✅ Add input sanitization for logs

### Short-term (Best Practices)
5. ✅ Update or remove incorrect `QUICK_START.md`
6. ✅ Replace console.error with proper logging
7. ✅ Add request body size limits
8. ✅ Add validation to track-visitor route
9. ✅ Configure CORS explicitly

### Long-term (Enhancements)
10. ✅ Implement structured logging
11. ✅ Add monitoring/alerting
12. ✅ Consider using a template engine for emails
13. ✅ Add API documentation (OpenAPI/Swagger)
14. ✅ Implement request ID tracking for better debugging

---

## 🔍 Security Checklist

- [ ] Input validation: ✅ (Zod schemas)
- [ ] Output encoding: ❌ (Missing in email template)
- [ ] Rate limiting: ❌ (Not implemented)
- [ ] CORS configuration: ⚠️ (Default only)
- [ ] Error handling: ✅ (Present)
- [ ] Secure headers: ⚠️ (Not explicitly set)
- [ ] HTTPS enforcement: ⚠️ (Not enforced)
- [ ] Request size limits: ❌ (Not set)
- [ ] Logging security: ⚠️ (No sanitization)
- [ ] Environment variable security: ✅ (Using .env.local)

---

## 📊 Code Metrics

- **Total Files Reviewed:** ~20 core files
- **Critical Issues:** 4
- **Important Improvements:** 6
- **Linter Errors:** 0 ✅
- **TypeScript Errors:** 0 ✅
- **Test Coverage:** Present (needs verification)

---

## 💡 Additional Recommendations

1. **Add Security Headers:** Consider adding security headers via `next.config.ts`:
   ```typescript
   headers: async () => [
     {
       source: '/:path*',
       headers: [
         { key: 'X-Content-Type-Options', value: 'nosniff' },
         { key: 'X-Frame-Options', value: 'DENY' },
         { key: 'X-XSS-Protection', value: '1; mode=block' },
       ],
     },
   ],
   ```

2. **Add Health Check Endpoint:** Useful for monitoring
   ```typescript
   // app/api/health/route.ts
   export async function GET() {
     return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
   }
   ```

3. **Consider Using Next.js Middleware:** For rate limiting, CORS, and other cross-cutting concerns

4. **Add Request ID:** For better traceability in logs

5. **Environment-based Configuration:** Different configs for dev/staging/prod

---

## ✅ Summary

The codebase is well-structured and follows many best practices. The main concerns are around **security** (XSS, rate limiting) and **production readiness** (logging, error handling). Most issues are straightforward to fix and should be addressed before production deployment.

**Overall Assessment:** Good foundation with room for security and production-readiness improvements.



