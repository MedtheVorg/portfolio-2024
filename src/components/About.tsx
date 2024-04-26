import Image from 'next/image';
import logo from '@/public/ML.png';
import Skills from './ui/skills';
import SocialLink from './ui/social-link';
import { FileText } from 'lucide-react';

export default function About() {
    return (
        <section
            id='about'
            className='text-white bg-white/5 p-8 md:p-16 md:py-32  '
        >
            <div className='md:max-w-screen-xl mx-auto'>
                <h2 className='text-2xl md:text-4xl font-semibold mb-16 text-left underline underline-offset-[16px]'>
                    👋 About me
                </h2>
                <div className=''>
                    <div className='flex items-center justify-center flex-col'>
                        <Image
                            src={logo}
                            alt='logo'
                            className='size-48 rounded-md object-cover'
                        />
                        {/* languages */}
                        <div className='my-8'>
                            <Skills />
                        </div>
                    </div>
                    <div className='md:col-span-2'>
                        <p className='text-lg text-left tracking-wide md:text-xl md:text-justify leading-loose'>
                            Hello! I am mohamed. <br /> a pragmatic Full Stack
                            JavaScript developer based in Morocco, My expertise
                            lies in JavaScript and full-stack web development.
                            With a strong believe in continuous learning I seek
                            to expand my knowledge and skills in all things
                            related to JavaScript and web development. As well
                            as staying up to date with the latest technologies
                            and best practices to enhance my capabilities to
                            contribute effectively to my team&apos;s success and
                            grow professionally.
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-xl capitalize mb-6'>my resume :</h3>
                        <div className='flex gap-x-8'>
                            <SocialLink
                                Icon={FileText}
                                title='English Version'
                                url='https://raw.githubusercontent.com/MedtheVorg/portfolio-2024/8c8d275442f0e4731e0682b57e9f0f538605b009/src/public/Mohamed_lemaallaoui_CV_English.pdf'
                            />
                            <SocialLink
                                Icon={FileText}
                                title='French Version'
                                url='https://raw.githubusercontent.com/MedtheVorg/portfolio-2024/8c8d275442f0e4731e0682b57e9f0f538605b009/src/public/mohamed%20lemaallaoui_CV_french.pdf'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
