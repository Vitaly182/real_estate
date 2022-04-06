/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images:{
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
    loader: 'imgix',
    path: ""
  }
}

// module.exports = nextConfig

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // '/search': { page: '/search' },
      // '/about': { page: '/about' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}

