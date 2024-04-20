import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

type SocialLinkProps = {
    Icon: LucideIcon;
    url: string;
    title: string;
};

export default function SocialLink({ Icon, url, title }: SocialLinkProps) {
    return (
        <div title={title}>
            <Link
                href={url}
                className='bg-panel-color p-2 rounded-md border-2 border-secondary-panel-color transition hover:shadow-whiteBox scale-110 duration-500  flex items-center justify-start gap-x-2 text-xs'
                target='_blank'
            >
                <Icon />
                {title}
            </Link>
        </div>
    );
}
