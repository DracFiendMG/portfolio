import Image from "next/image";
import profile from "@/public/profile_copy.jpg";

export default function About() {
    return (
        <div>
            <section className="w-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)] max-w-360 mx-auto flex flex-col gap-6 md:flex-row my-6 md:my-10">
                <div className="flex flex-col gap-2">
                    <p className="uppercase text-black bg-[#00F0FF] self-start px-2 py-1 md:tracking-wider font-mono text-xs border-1">Current Status: Available For Work</p>
                    <h1 className="uppercase text-5xl md:text-7xl font-sora font-bold tracking-tight">Senior Software Engineer / Full <span className="text-[#9e8b8b]">Stack Developer.</span></h1>
                </div>
                <p className="font-inter text-[#737373] md:self-end">Based in Hyderabad, India, engineering high-performance financial systems and LLM-integrated platforms with a focus on technical precision, scalability, and human utility.</p>
            </section>
            <section className="w-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)] max-w-360 mx-auto grid md:grid-cols-12 gap-5">
                <div className="md:col-span-7 border-3 p-5 md:p-10 flex flex-col md:flex-row gap-5">
                    <p className="text-xs font-mono uppercase">// Design Philosophy</p>
                    <div className="text-4xl font-bold font-sora">
                        <h2>Raw Logic.</h2>
                        <h2>Intentional Engineering.</h2>
                    </div>
                    <p className="font-inter">I believe that great software doesn't hide behind abstraction or technical debt. My work is rooted in Engineering Honesty—a methodology that prioritizes high-performance full-stack architecture and robust, scalable code.</p>
                    <p className="font-inter text-[#737373]">Every line of code must serve a purpose. If it doesn't solve a problem or optimize a function, it shouldn't exist. This engineering approach ensures products are not just functional, but resilient, scalable, and highly maintainable.</p>
                    <div className="flex flex-wrap gap-2 uppercase font-sora">
                        <div className="border-2 p-5 flex flex-col gap-2 justify-center items-center">
                            <p className="font-bold text-xl">01</p>
                            <p className="font-mono text-[#737373] text-sm">Honesty</p>
                        </div>
                        <div className="border-2 p-5 flex flex-col gap-2 justify-center items-center">
                            <p className="font-bold text-xl">02</p>
                            <p className="font-mono text-[#737373] text-sm">Clarity</p>
                        </div>
                        <div className="border-2 p-5 flex flex-col gap-2 justify-center items-center">
                            <p className="font-bold text-xl">03</p>
                            <p className="font-mono text-[#737373] text-sm">System</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className="profile-shadow border-3 border-black" src={profile} alt="My profile image" width={500} height={500}></Image>
                </div>
            </section>
            <section>
                <h1>- The Capabilities -</h1>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1></h1>
                    <p></p>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}