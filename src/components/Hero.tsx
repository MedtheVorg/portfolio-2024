import { FileText, Github, Linkedin } from 'lucide-react';
import SocialLink from './ui/social-link';
import KeyboardIcon from './ui/keyboard';
import { FaJs, FaLaravel, FaReact } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';
export default function Hero() {
    return (
        <section
            className=' flex-1 text-white flex flex-col  items-center justify-start px-2 sm:px-0'
            id='home'
        >
            <KeyboardIcon className='md:size-[300px] animate-levitate' />
            <div className='p-4  '>
                <h1 className='text-4xl sm:text-8xl text-left drop-shadow-lightShadow   font-bold  mb-4'>
                    hi, I&apos;m Mohamed
                </h1>
                <p className='text-xl md:text-3xl my-4 mb-8 text-left     rounded-md '>
                    a Full Stack Web Developer{' '}
                </p>
                <p className=''>
                    {' '}
                    <span className='max-md:block md:mr-5 max-md:mb-4'>Specializing in:</span>
                    <span className=' mt-3  p-[3px]  rounded-md space-x-4'>
                        <span>
                            <SiPhp className='inline text-[#4f5b93] size-10 md:size-20' />
                        </span>
                        <span className='bg-[##f55247] text-white mx-3 p-[3px]  rounded-md'>
                            ({' '}
                            <FaLaravel className='inline text-[#f55247] size-8 md:size-10' />{' '}
                            )
                        </span>
                        <span className='mx-4'>and</span>
                        <span>
                            <FaJs className='inline text-[#F0DB4F] size-10 md:size-16' />
                        </span>
                        <span>
                            ({' '}
                            <FaReact className='inline text-[#61DBFB] size-8 md:size-10' />{' '}
                        </span>
                        )
                    </span>
                </p>

                
                <div className='flex max-md:flex-col  mt-6   md:items-center'>
                <span className='max-md:block md:mr-5 max-md:mb-4'>Know more about me :</span>
                   <div className='flex gap-4'>
                   <SocialLink
                        Icon={Github}
                        title='Github'
                        url='https://github.com/MedtheVorg'
                    />
                    <SocialLink
                        Icon={Linkedin}
                        title='Linkedin'
                        url='https://www.linkedin.com/in/mohamed-lema%C3%A2llaoui-16b983169/'
                    />
                     <SocialLink
                                Icon={FileText}
                                title='French CV'
                                url='https://raw.githubusercontent.com/MedtheVorg/portfolio-2024/refs/heads/main/src/public/mohamed_lemaallaoui_CV_2024.pdf'
                            />
                   </div>
                </div>
            </div>
        </section>
    );
}
