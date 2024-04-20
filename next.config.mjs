/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'skillicons.dev',
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
