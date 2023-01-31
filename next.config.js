module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
  compiler:{
    styledComponents: true
  }
}