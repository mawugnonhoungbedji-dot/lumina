import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Allow images from picsum and any other external sources already used in the app
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'picsum.photos' },
        ],
    },
};

export default nextConfig;
