/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: 'tbbd-flight.s3.ap-southeast-1.amazonaws.com',
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: "/**"
      },
    ]
  }
};

export default nextConfig;
