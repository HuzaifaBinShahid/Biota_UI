/** @type {import('next').Config} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/biota-api/:path*",
        destination: "https://9ecbabcbf3dc.ngrok-free.app/:path*",
      },
    ];
  },
};

export default nextConfig;
