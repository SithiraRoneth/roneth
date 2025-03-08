import { assets } from "../assets/assets.ts";
import {motion} from "framer-motion";

function Contact() {
    return (
        <div className="relative mt-4 px-6 py-12 md:px-16 md:mt-32 md:ml-40 md:py-14 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold md:drop-shadow-lg">Let's Work</h2>
                    <motion.h2 className="text-4xl md:text-6xl font-bold md:drop-shadow-lg"
                               initial={{opacity: 0, y: -80}}
                               animate={{opacity: 1, y: 0}}
                               transition={{duration: 0.9, ease: "easeOut"}}
                    >
                        Together
                    </motion.h2>
                    <br/>
                    <p className="text-lg mt-4 leading-relaxed">
                        Whether you have an exciting project in
                        <span className="md:block">mind or just want to connect,</span>
                        <span className="md:block"> feel free to reach out—I’d love to hear from you!</span>
                    </p>

                    <br/>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <img src={assets.call} alt="Call" className="w-6 md:w-7 "/>
                            <a href="tel:+94704068026" className="text-lg font-mono cursor-pointer transition-transform duration-300 hover:scale-110">(+94)70 406 8026</a>
                        </div>
                        <hr className="w-64"/>
                        <div className="flex items-center gap-4">
                            <img src={assets.mail} alt="Mail" className="w-6 md:w-7"/>
                            <a href="mailto:sithiraroneth@gmail.com"
                               className="text-lg font-mono cursor-pointer transition-transform duration-300 hover:scale-110">sithiraroneth@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-transparent text-white p-3 border-b border-white focus:outline-none w-full max-w-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-transparent text-white p-3 border-b border-white focus:outline-none w-full max-w-md"
                    />
                    <textarea
                        placeholder="Share your thoughts"
                        className="bg-transparent text-white p-3 border-b border-white focus:outline-none w-full max-w-md"
                    />
                    <br/>
                    <br/>
                    <button
                        className="px-6 py-3 text-white border border-white rounded-md hover:bg-white hover:text-black transition duration-300">
                        SHARE YOUR FEEDBACK
                    </button>
                </div>
            </div>

            <br/>
            <div className="flex justify-center md:justify-end mt-10 md:mt-16 gap-6">
                <a href="https://github.com/SithiraRoneth" target="_blank" rel="noopener noreferrer">
                    <img src={assets.github} alt="GitHub" className="w-8 h-auto transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://www.linkedin.com/in/sithira-roneth-470aa4242/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin} alt="LinkedIn" className="w-8 h-auto transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/sithira_roneth/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.instagram} alt="Instagram" className="w-8 h-auto transition-transform duration-300 hover:scale-110" />
                </a>
            </div>

            <div className="fixed mt-4 md:bottom-2 left-0 w-full flex items-center justify-center text-center text-white py-2">
                <p>© 2025 Roneth. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Contact;
