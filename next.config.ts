import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Allow images from picsum and any other external sources already used in the app
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'picsum.photos' },
        ],
    },
};

export default nextConfig;
