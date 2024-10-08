"use client";

import{BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';


const services=[
    {
        num:"01",
        title:"Web development",
        description:"I can make you a powerful online presence with my tailored web development services. I build responsive, secure, and scalable websites that drive results.",
        href: "",
    },
    {
        num:"02",
        title:"UI/UX Design",
        description:"I can enhance user experience with my intuitive and visually appealing UI/UX designs. I focus on creating interfaces that are both beautiful and functional.",
        href: "",
    },
    {
        num:"03",
        title:"Logo Design",
        description:"I also craft a unique brand identity with my professional logo design services. I can help you make a lasting impression with a logo that speaks your brand’s language.",
        href: "",
    },
    {
        num:"04",
        title:"SEO",
        description:"I can boost your visibility and attract more traffic with my expert SEO strategies. I can optimize your online content to rank higher on search engines.",
        href: "",
    },
];

import { motion } from 'framer-motion';

const Services = () => {
    return ( 
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity:1, 
                    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                }}
                className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {services.map((service, index)=> {
                    return ( 
                    <div 
                    key={index}
                    className='flex-1 flex flex-col justify-center gap-6 group'
                    >
                    {/*Top */}
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                            <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                <BsArrowDownRight className='text-primary text-3xl' />
                            </Link>
                        </div>
                        {/*title */}
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                        {/*description */}
                        <p className='text-white/60'>{service.description}</p>
                        {/*border */}
                        <div className='border-b border-white/20 w-full'></div>
                    </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
    );
};

export default Services;