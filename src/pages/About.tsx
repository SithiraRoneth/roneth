import { assets } from "../assets/assets.ts";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { useEffect, useState } from "react";

function About() {
    const scrollToSkills = () => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const images = [
        assets.about_pic,
        assets.about_pic_2,
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const skills = [
        { name: "Java", image: assets.java },
        { name: "Python", image: assets.python },
        { name: "Docker", image: assets.docker },
        { name: "CSS", image: assets.css },
        { name: "HTML", image: assets.html },
        { name: "React", image: assets.react },
        { name: "TailwindCSS", image: assets.tc },
        { name: "Node.js", image: assets.node },
        { name: "Express.js", image: assets.ex },
        { name: "MongoDB", image: assets.mdb },
        { name: "MySQL", image: assets.mysql },
        { name: "JavaScript", image: assets.js },
        { name: "TypeScript", image: assets.ts },
        { name: "ReactNative", image: assets.rn },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-16 py-12 text-white md:mt-28 md:ml-52">
                <div className="relative w-full md:w-[350px] h-auto md:h-[450px] grayscale mb-8 md:mb-0 overflow-hidden rounded-lg ">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={images[index]}
                            src={images[index]}
                            alt="About"
                            className="w-full h-full object-cover rounded-lg "
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>

                <div className="hidden md:block w-[2px] h-[350px] bg-white mx-10"></div>

                <div className="text-center md:text-left max-w-lg">
                    <h2 className="font-mono font-bold text-3xl mb-4">About Me</h2>
                    <p className="text-base leading-relaxed tracking-wide">
                        I embarked on my journey as a software engineer in 2023 and have
                        dedicated my time to designing and developing innovative solutions.
                        With a strong foundation in coding and problem-solving, I am committed
                        to delivering successful projects.
                        <br /><br />
                        I thrive on collaboration, learning, and embracing new challenges.
                        Every aspect of software development excites me, from brainstorming
                        ideas to bringing them to life through code.
                    </p>
                </div>
            </div>

            <motion.div
                className="flex justify-center mt-8 md:mt-4 cursor-pointer"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                onClick={scrollToSkills}
            >
                <HiOutlineChevronDoubleDown className="text-white text-3xl animate-bounce" />
            </motion.div>

            <div id="skills" className="mt-32 px-6 md:px-16 text-white">
                <div className="text-center md:text-left md:ml-[10%]">
                    <h3 className="md:text-xl font-mono">Skills</h3>
                    <br/>
                    <h2 className="text-2xl md:text-4xl font-bold md:drop-shadow-lg">Explore, Master,</h2>
                    <h2 className="text-2xl md:text-4xl font-bold md:drop-shadow-lg"> Apply, and Evolve</h2>
                    <h2 className="text-2xl md:text-4xl font-bold md:drop-shadow-lg">One Skill at a Time</h2>
                </div>
                <br/>
                <div
                    className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:w-[1100px] md:ml-[12%] gap-8 md:gap-10 mt-10 justify-center items-center md:py-4">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className="relative flex flex-col items-center group"
                            whileHover={{scale: 1.1}}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.img
                                src={skill.image}
                                alt={skill.name}
                                className="w-20 h-20 object-contain mx-auto md:hover:grayscale"
                                whileHover={{
                                    y: -10,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                            />
                            <div
                                className="absolute bottom-[-30px] bg-black text-white font-mono text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                                {skill.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
}

export default About;
