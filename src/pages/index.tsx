/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import { cva } from '@/utils/style';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const button = cva('flex ');
export default function Home() {
  return (
    <main>
      <h1>NEXTJS HELLP WORLD</h1>
    </main>
  );
}
