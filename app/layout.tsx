import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Intro from '@/components/Intro';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adib Ahmed',
  description:
    'I am Adib Ahmed. A Full-Stack Developer with 2 years of experince.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className='bg-[#fbebe2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] md:h-screen w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#d7d9fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] md:h-screen w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
