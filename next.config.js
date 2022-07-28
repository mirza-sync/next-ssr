const withPWA = require('next-pwa')
const prod = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa:{
    disable: prod ? false : true,
    dest: 'public'
  },
  images: {
    //Change domain as necessary
    domains: ['picsum.photos'],
  },
}

module.exports =  withPWA(nextConfig)
