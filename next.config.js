/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatars.slack-edge.com" }, // for slack pfp pictures in team members section
    ],
  },
};

module.exports = nextConfig;
