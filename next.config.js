/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['~styles'] = path.join(__dirname, '@/app/layout.css');
      }
      return config;
    },
  };
