module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: 'build',
  generateEtags: false,
  pageExtensions: ['tsx'],
  target: 'server',
  typescript: {
    ignoreBuildErrors: true,
  },
};