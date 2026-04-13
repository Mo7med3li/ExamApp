import createNextIntlPlugin from "next-intl/plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "exam.elevateegy.com",
      "exam-app.elevate-bootcamp.cloud",
      "www.elevate-bootcamp.cloud",
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
