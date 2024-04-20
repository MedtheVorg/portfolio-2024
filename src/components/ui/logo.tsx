import { cn } from '@/utils';

type LogoProps = {
    className?: string;
};

export default function Logo({ className }: LogoProps) {
    return (
        <span
            className={cn(
                'font-bold text-4xl flex items-center justify-center ',
                className
            )}
        >
            ML
        </span>
    );
}
