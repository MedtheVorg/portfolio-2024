'use client';

import { cn } from '@/utils';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from './ui/logo';
const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Header() {
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 100) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    return (
        <header
            className={cn(
                jetBrains.className,
                ' text-white sm:px-12   fixed top-0 w-full transition duration-500  p-4 z-10',
                isScrolling && 'bg-white/20 backdrop-blur-sm'
            )}
        >
            <div className='  flex flex-col  items-center justify-between gap-y-3 sm:flex-row sm:gap-y-0 '>
                <Link href={'#home'}>
                    <Logo />
                </Link>
                <div>
                    <nav className='space-x-6 text-base md:text-xl'>
                        <Link
                            href={'#about'}
                            className=''
                        >
                            👋{' '}
                            <span className='hover:shadow-lightShadow'>
                                About me
                            </span>
                        </Link>
                        <Link href={'#projects'}>👷‍♂️ Projects</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
