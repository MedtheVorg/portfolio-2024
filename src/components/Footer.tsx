import Logo from './ui/logo';

export default function Footer() {
    return (
        <div className='text-white flex flex-col md:flex-row items-center justify-center gap-x-6 bg-white/20 backdrop-blur-sm p-4 '>
            <p>Copyright © {new Date().getFullYear()}</p>
            <p className=' flex items-center justify-center'>
                Made with ✋ 
                {/* by <Logo className='text-2xl ml-2' /> */}
            </p>
        </div>
    );
}
