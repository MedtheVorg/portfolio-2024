import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
    return (
        <main className='flex flex-col h-[100vh]'>
            <Hero />
            {/* <About />
            <Projects /> */}
            <Footer />
        </main>
    );
}
