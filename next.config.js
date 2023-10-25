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
        {
          protocol: "https",
          hostname: "www.paodeacucar.com",
          port: "",
          pathname: "/img/**"
      
        },
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
          port: "",
          pathname: "/u/**"
      
        },
      ],
    },
  }