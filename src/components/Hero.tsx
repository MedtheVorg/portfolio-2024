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
            <p className='text-lg my-6'> a Full Stack JavaScript Developer</p>
            <div className='flex p-2 space-x-8'>
                <SocialLink
                    Icon={Github}
                    title='My Github'
                    url='https://github.com/MedtheVorg'
                />
                <SocialLink
                    Icon={Linkedin}
                    title='My Linkedin profile'
                    url='https://www.linkedin.com/in/mohamed-lema%C3%A2llaoui-16b983169/'
                />
            </div>
        </section>
    );
}
