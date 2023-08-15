/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "streamcoimg-a.akamaihd.net",
        port: "",
      },
    ],
  },
  swcMinify: false,
}

module.exports = nextConfig
