/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.usatsimg.com",
      "s3-us-west-2.amazonaws.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
