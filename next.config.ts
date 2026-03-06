import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Allow images from picsum and any other external sources already used in the app
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'picsum.photos' },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://api.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.picsum.photos https://fastly.picsum.photos https://api.whatsapp.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.emailjs.com; frame-ancestors 'none';",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
