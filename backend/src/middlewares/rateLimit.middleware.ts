import rateLimit from 'express-rate-limit';

// General API protection — generous, just stops abuse/scraping
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // 100 requests per IP per window
  standardHeaders: true,    // sends RateLimit-* headers
  legacyHeaders: false,     // disables old X-RateLimit-* headers
  message: { error: 'Too many requests, please try again later.' },
});

export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 5, //100 requests per IP per window
    standardHeaders: true,    // sends RateLimit-* headers
    legacyHeaders: false,     // disables old X-RateLimit-* headers
    message: { error: 'Too many requests, please try again later.' },
})