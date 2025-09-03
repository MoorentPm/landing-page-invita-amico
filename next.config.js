/** @type {import('next').NextConfig} */

// IMPORTANTE: Sostituisci 'landing-page-invita-amico' con il nome del tuo repository
const repoName = 'landing-page-invita-amico'; 

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

