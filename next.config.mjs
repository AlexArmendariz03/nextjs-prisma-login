/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.externals = config.externals || [];
    if (isServer) {
      config.externals.push(
        /^(pg|sqlite3|sequelize)$/
      );
    }
    return config;
  }
};

export default nextConfig;
