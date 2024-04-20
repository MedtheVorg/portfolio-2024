import Image, { StaticImageData } from 'next/image';
import SocialLink from './ui/social-link';
import { Github, Redo, Telescope } from 'lucide-react';

type ProjectProps = {
    title: string;
    description: string;
    logo: StaticImageData;
    githubLink: string;
    livePreviewUrl: string;
};

export default function Project({
    title,
    description,
    logo,
    githubLink,
    livePreviewUrl,
}: ProjectProps) {
    return (
        <div className='bg-panel-color/50 p-4 sm:p-8 rounded-md border-2 border-secondary-panel-color transition hover:shadow-whiteBox  duration-500  flex flex-col-reverse sm:grid sm:grid-cols-4 sm:grid-rows-1  gap-y-4 sm:gap-y-0 items-center  '>
            <div className='sm:col-span-2 text-left'>
                <div className='flex flex-col sm:flex-row sm:col-span-2 gap-y-4 sm:gap-y-0 items-center justify-between'>
                    <h3 className='font-semibold text-xl'>{title}</h3>
                    <div className='flex gap-x-4'>
                        <SocialLink
                            Icon={Telescope}
                            title='live preview'
                            url={livePreviewUrl}
                        />
                        <SocialLink
                            Icon={Github}
                            title='github repository'
                            url={githubLink}
                        />
                    </div>
                </div>
                <p className='mt-6 text-balance md:text-lg'> {description}</p>
            </div>
            <div className='sm:col-span-2'>
                <Image
                    src={logo}
                    alt='market place e-commerce store'
                    className=' size-16 sm:size-40 ml-auto object-contain  rounded-lg overflow-hidden bg-white p-2'
                />
            </div>
        </div>
    );
}
