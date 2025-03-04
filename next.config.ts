import type { NextConfig } from 'next';
const removeImports = require('next-remove-imports');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 추가 설정 옵션들을 여기에 작성하세요.
};

module.exports = removeImports(nextConfig);
