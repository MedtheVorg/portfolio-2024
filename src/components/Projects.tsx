import Project from './project';
import marketPlaceLogo from '@/public/all_in_one_marketplace.png';
import vStoreLogo from '@/public/vstore_logo_png.png';
import miniStoreLogo from '@/public/MiniStore.jpg';
import chatSphereLogo from '@/public/chatShpere.svg';
import devQuizLogo from '@/public/devRecruitIcon.ico';

export default function Projects() {
    const projectsDetails = [
        {
            title: 'VStore',
            description:
                'A Fully fledged dashboard for Single Product E-Commerce stores management built with the MERN Stack.',
            logo: vStoreLogo,
            githubLink:
                'https://github.com/MedtheVorg/V-Store/tree/main/VStore-Dashboard',
            livePreviewUrl: 'https://v-store-dashboard-client.vercel.app/',
        },
        {
            title: 'MarketPlace',
            description:
                ' Single product E-commerce web application built with NextJs and is backed and controlled by the VStore CMS Dashboard',
            logo: marketPlaceLogo,
            githubLink:
                'https://github.com/MedtheVorg/V-Store/tree/main/MarketPlace_Store',
            livePreviewUrl: 'https://marketplace-store-eight.vercel.app/',
        },
        {
            title: 'MiniStore',
            description: 'A Full stack ecommerce web application (MERN)',
            logo: miniStoreLogo,
            githubLink:
                'https://github.com/MedtheVorg/MiniStore-Ecommerce-Website',
            livePreviewUrl: 'https://ministoree.vercel.app/',
        },
        {
            title: 'ChatSphere',
            description:
                'Chat app that allows you to join chat rooms and chat with other members through real-time communication. built using socket.io',
            logo: chatSphereLogo,
            githubLink:
                'https://github.com/MedtheVorg/ChatSphere--websocket-chat-app-',
            livePreviewUrl: 'https://chatsphere-seven.vercel.app',
        },
        {
            title: 'DevQuiz',
            description: 'Quiz app built using React and its ecosystem',
            logo: devQuizLogo,
            githubLink: 'https://github.com/MedtheVorg/DevRecruit-Quiz-App',
            livePreviewUrl: 'https://dev-recruit-quiz-app.vercel.app',
        },
    ];
    return (
        <section
            id='projects'
            className='text-white  p-8 md:p-16 md:py-32 mt-16  '
        >
            <div className='md:max-w-screen-xl mx-auto'>
                <h2 className='text-4xl font-semibold mb-16 text-left underline underline-offset-[16px]'>
                    👷‍♂️ Projects
                </h2>
                <div className='space-y-8'>
                    {projectsDetails.map((pd) => (
                        <Project
                            key={pd.githubLink}
                            {...pd}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
