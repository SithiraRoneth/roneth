import { assets } from "../assets/assets.ts";
import {motion} from "framer-motion";

function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-white md:ml-60">

            <div className="text-center md:text-left md:w-1/2 md:mr-6">
                <motion.h2
                    className="text-4xl md:text-7xl font-bold md:drop-shadow-lg"
                    initial={{opacity: 0, y: -80}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.9, ease: "easeOut"}}
                >
                    Sithira
                </motion.h2>
                <motion.h2
                    className="text-4xl md:text-7xl font-bold md:drop-shadow-lg"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.9, ease: "easeOut", delay: 0.2}}
                >
                    Roneth.
                </motion.h2>
                <motion.hr className="bg-white w-20 md:w-40 h-[6px] md:h-[8px] my-4 md:my-6 mx-auto md:mx-0"
                           animate={{ x: [0, 20, 0] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />


                <div className="flex justify-center md:justify-start mt-6 md:mt-10 gap-6">
                    <a href="https://github.com/SithiraRoneth" target="_blank" rel="noopener noreferrer">
                        <img src={assets.github} alt="GitHub"
                             className="w-8 h-auto transition-transform duration-300 hover:scale-110"/>
                    </a>
                    <a href="https://www.linkedin.com/in/sithira-roneth-470aa4242/" target="_blank"
                       rel="noopener noreferrer">
                        <img src={assets.linkedin} alt="LinkedIn"
                             className="w-8 h-auto transition-transform duration-300 hover:scale-110"/>
                    </a>
                    <a href="https://www.instagram.com/sithira_roneth/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.instagram} alt="Instagram"
                             className="w-8 h-auto transition-transform duration-300 hover:scale-110"/>
                    </a>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="mt-12 md:mt-0 md:w-1/2 text-center md:text-left md:ml-6">
                <h3 className="text-lg font-bold opacity-50">Introducing</h3>
                <h2 className="text-2xl md:text-3xl font-bold md:drop-shadow-lg">Software Engineer,</h2>
                <h2 className="text-2xl md:text-3xl font-bold md:drop-shadow-lg">Creative Coder</h2>

                <p className="w-full max-w-sm md:max-w-md mx-auto md:mx-0 h-32 flex items-center justify-center text-sm md:text-base leading-relaxed tracking-wide mt-4 md:mt-6 px-4 md:px-0">
                    Driven by curiosity and a passion for clean code, I strive to create seamless digital
                    experiences that make a meaningful impact. If you have a great project that needs some
                    amazing skills, I’m your guy. Let’s build something amazing!
                </p>

                <h3 className="text-lg font-medium flex justify-center md:justify-start items-center gap-4 group md:mt-6 mt-10">
                    My Story
                    <a href="/works" className="transition-transform duration-300 group-hover:translate-x-2">
                        <img src={assets.arrow} alt="Arrow" className="w-5 h-5" />
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default Home;
