/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig

module.exports = {
  serverRuntimeConfig: {

    host: '192.168.1.66',
  },
};