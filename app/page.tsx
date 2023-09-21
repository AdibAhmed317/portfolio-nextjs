import About from '@/components/About';
import Intro from '@/components/Intro';
import SectionDevider from '@/components/SectionDevider';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center px-4'>
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
    </main>
  );
}

export const runtime = 'edge';
