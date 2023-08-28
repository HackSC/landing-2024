/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatars.slack-edge.com" }, // for slack pfp pictures in team members section
    ],
  },
  redirects: async () => [
    { source: "/businesscard", destination: "/", permanent: true },
  ],
};

module.exports = nextConfig;
