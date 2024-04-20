import { Github, Linkedin } from 'lucide-react';
import SocialLink from './ui/social-link';
import KeyboardIcon from './ui/keyboard';
export default function Hero() {
    return (
        <section
            className='h-[80vh] my-20 text-white flex flex-col items-center justify-center px-2 sm:px-0'
            id='home'
        >
            <KeyboardIcon className='md:size-[300px]' />
            <h1 className='text-4xl sm:text-8xl text-center drop-shadow-lightShadow   font-bold  mb-4'>
                hi, I&apos;m Mohamed
            </h1>
            <p className='text-xl md:text-3xl my-6 text-center '>
                {' '}
                a Full Stack
                <span className='block md:inline'>
                    <span className='bg-[#F0DB4F] text-[#323330] mx-3 p-[3px] font-bold rounded-md'>
                        JavaScript
                    </span>
                    /
                    <span className='bg-[#3178C6] text-white mx-3 p-[3px] font-bold rounded-md'>
                        TypeScript
                    </span>
                </span>
                Developer
            </p>
            <div className='flex p-2 space-x-8'>
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
            </div>
        </section>
    );
}
