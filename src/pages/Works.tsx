import { useState } from "react";
import { assets } from "../assets/assets.ts";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import {motion} from "framer-motion";

const projects = [
    {
        image: assets.green,
        name: "Green Shadow",
        techStack: "React, Tailwind, Node, Mongo DB",
        description: "A smart platform to manage crop fields, equipment, and staff, built with React, Redux, JWT, and a Node.js backend for secure and efficient operations.",
        github: "https://github.com/SithiraRoneth/green_shadow_react.git"
    },
    {
        image: assets.gemini,
        name: "Gemini Ai Clone",
        techStack: "React, Tailwind CSS",
        description: "A powerful AI chatbot inspired by Google's Gemini, built using React and Tailwind. It offers seamless interactions, natural language processing, and a modern UI.",
        github: "https://github.com/SithiraRoneth/gemini-clone-react.git"
    },
    {
        image: assets.chat,
        name: "Chat Application",
        techStack: "Java, Mysql, Scene Builder",
        description: "A real-time chat application developed with Java, MySQL, and Scene Builder. It supports user authentication, message history, and a smooth UI for an enhanced communication experience",
        github: "https://github.com/SithiraRoneth/Chat_Application_CW.git"
    },
    {
        image: assets.vtec,
        name: "Car Paint and Accident Repair Management",
        techStack: "Java,Mysql,Scene Builder",
        description: "A comprehensive management system for car paint and accident repair services. It streamlines service requests, tracks repair progress, and maintains customer records efficiently",
        github: "https://github.com/SithiraRoneth/vtec-motors.git"
    },
    {
        image: assets.pos,
        name: "POS System",
        techStack: "Html, Css, JavaScript,Java EE, Mysql",
        description: "The POS System is a comprehensive solution for managing sales, inventory, and transactions. Built with HTML, CSS, JavaScript, Java EE, and MySQL, it ensures a seamless and efficient business operation",
        github: "https://github.com/SithiraRoneth/POS-System-JS.git",
    }
];

function Works() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        if (currentIndex + 3 < projects.length) {
            setCurrentIndex((prevIndex) => prevIndex + 3);
        }
    };

    const prevProject = () => {
        if (currentIndex - 3 >= 0) {
            setCurrentIndex((prevIndex) => prevIndex - 3);
        }
    };

    return (
        <div className="relative mt-14 px-6 py-12 md:px-16 md:mt-[7%] md:ml-40 md:py-14 text-white">
            <div className="text-center md:text-left">
                <h4 className='md:text-xl font-mono md:drop-shadow-lg'>Works</h4>
                <h2 className='text-2xl md:text-4xl font-bold md:drop-shadow-lg'>Committed to Quality & Innovation</h2>
            </div>
            <div className="relative flex items-center justify-center mt-8 md:mt-10 md:ml-[-12%]">
                {currentIndex > 0 && (
                    <button onClick={prevProject} className="hidden md:block absolute left-0 p-2 md:p-4 bg-gray-700 rounded-full shadow-md hover:bg-gray-600">
                        <FaChevronLeft size={20} />
                    </button>
                )}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide"
                    initial={{opacity: 0, y: -80}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.9, ease: "linear"}}
                >
                    {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
                        <div key={index} className="relative w-full md:w-[350px] md:h-[400px] bg-transparent border border-gray-50 rounded-md shadow-lg text-center p-6">
                            <img src={project.image} alt={project.name} className='w-full h-40 object-cover rounded-md' />
                            <h3 className='text-lg font-bold mt-4'>{project.name}</h3>
                            <p className='text-sm text-gray-300'>{project.techStack}</p>
                            <p className='text-sm mt-2'>{project.description}</p>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 p-2 bg-gray-700 rounded-full shadow-md hover:bg-transparent"
                            >
                                <FaGithub size={20} className="text-white" />
                            </a>
                        </div>
                    ))}
                </motion.div>
                {currentIndex + 3 < projects.length && (
                    <button onClick={nextProject} className="hidden md:block md:absolute md:right-0 p-2 md:p-4 bg-gray-700 rounded-full shadow-md hover:bg-gray-600">
                        <FaChevronRight size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Works;
