/** @type {import('next').NextConfig} */



module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'httpstatusdogs.com',
          port: '',
          pathname: '/img/**',
        },
      ],
    },
  }