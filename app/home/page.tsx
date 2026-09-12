import Image from "next/image";

export default function Home() {
    // Section 1: Hero Section
    const roles = ["Senior Software Engineer", "Full-Stack Developer"]
    const title = ["Engineering", "High - Performance", "Full - Stack Systems & AI Frontiers"]
    const subtitle = "Building high-performance financial systems & LLM-integrated platforms."
    const exploreWorkButtonText = "Explore My Work"
    const downloadResumeButtonText = "Download Resume"

    // Section 2: Core Expertise
    const section2Title = "Core Expertise"
    const cardDetails = [
        {
            icon: "payments",
            title: "Fintech Systems",
            description: "Building resilient, low-latency transaction engines and complex ledger systems using Spring Boot and Java."
        },
        {
            icon: "psychology",
            title: "AI-Accelerated",
            description: "Leveraging GenAI for faster development cycles and integrating LLMs into enterprise-grade applications."
        },
        {
            icon: "architecture",
            title: "Tech Stack",
            techstack: ["Java", "Spring Boot", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
        }
    ]

    // Section 3: Selected Work
    const section3Title = "Selected Work"
    const section3Subtitle = "A collection of projects bridging the gap between algorithmic complexity and user-centric design."

    // Section 4: Call to Action
    const section4Title = "Ready to engineer your next high-performance system?"

    const modifiedTitle = title.map((word, idx) => {
        if (idx === 1) {
            return <p key={idx} className="text-[#9e8b8b]">{word}</p>
        }
        return <p key={idx}>{word}</p>
    })

    return (
        <>
            <section className="mx-5 my-10 md:m-10 max-w-360 md:w-[calc(100%-5rem)] box-content">
                <div className="flex md:min-h-160 md:justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase font-mono text-[12px] text-[#535353] tracking-[0.16em]">{roles.join(" / ")}</p>
                        <div className="md:max-w-175">
                            <h1 className="uppercase font-sora font-extrabold text-5xl md:text-7xl tracking-tighter">{modifiedTitle}</h1>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn-secondary text-[12px]">{exploreWorkButtonText}</button>
                            <button className="btn-secondary text-[12px]">{downloadResumeButtonText}</button>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 border-3 max-w-72.5 p-4 self-end">
                        <p className="uppercase font-mono text-[12px] text-[#535353]">{roles.join(" / ")}</p>
                        <p className="font-bold font-inter text-black">{subtitle}</p>
                    </div>
                </div>
            </section>

            <section className="max-w-360 grid-lines bg-gray-100 box-content mx-auto">
                <div className="mx-5 my-10 md:m-10 py-10">
                    <h2 className="uppercase font-sora text-3xl md:text-5xl font-extrabold">{section2Title}</h2>
                    <div className="border-2 md:border-4 w-[33%] md:w-33 mt-3 md:mt-5 mb-8 md:mb-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            cardDetails.map(card => {
                                return (
                                    <div
                                        key={card.icon}
                                        className="flex flex-col gap-2 border-3 border-black min-w-75 card-shadow px-8 py-10 text-black even:bg-black odd:bg-white even:[&>h3,&>span]:text-[#00F0FF]"
                                    >
                                        <span className="material-symbols-outlined text-3xl! md:text-4xl! md:mb-6">{card.icon}</span>
                                        <h3 className="uppercase font-medium font-sora text-xl md:text-2xl">{card.title}</h3>
                                        <p className="font-light font-sora text-[#737373]">{card.description}</p>
                                        {
                                            card.techstack && (
                                                <div className="flex flex-wrap gap-2 font-inter">
                                                    {
                                                        card.techstack.map(tech => {
                                                            return (
                                                                <span key={tech} className="border-2 px-2 py-1 bg-gray-300">{tech}</span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="mx-5 my-10 md:m-10 flex flex-col gap-5 max-w-360 py-10">
                <h2 className="uppercase font-sora text-3xl md:text-5xl font-extrabold">{section3Title}</h2>
                <div className="flex flex-col md:flex-row gap-2 md:justify-between md:items-end">
                    <p className="font-light font-sora text-[#737373] md:max-w-[50%]">{section3Subtitle}</p>
                    <p className="uppercase font-sora font-semibold text-sm">View All Projects</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className="relative flex flex-col gap-2">
                        <Image src="/atomic-chess.png" alt="Atomic Chess" width={500} height={300} className="relative w-full h-auto border-2 border-black mb-5" />
                        <p className="uppercase absolute top-3 right-3 bg-black text-white text-xs font-mono px-4 py-1">AI / Game Dev</p>
                        <h3 className="uppercase font-sora text-xl md:text-2xl font-bold">Atomic Chess</h3>
                        <p className="font-light font-sora text-[#737373]">A custom engine implementing Alpha-Beta pruning with move-ordering heuristics and a React-based interactive frontend.</p>
                        <p className="uppercase font-sora text-sm font-semibold flex gap-2"><span className="material-symbols-outlined">arrow_outward</span>Case Study</p>
                    </div>
                    <div className="relative flex flex-col gap-2">
                        <Image src="/atomic-chess.png" alt="Movie AI App" width={500} height={300} className="relative w-full h-auto border-2 border-black mb-5" />
                        <p className="uppercase absolute top-3 right-3 bg-black text-white text-xs font-mono px-4 py-1">AI / Full Stack</p>
                        <h3 className="uppercase font-sora text-xl md:text-2xl font-bold">Movie AI App</h3>
                        <p className="font-light font-sora text-sm text-[#737373]">Semantic search and personalized recommendation engine powered by OpenAI embeddings and a Java backend infrastructure.</p>
                        <p className="uppercase font-sora text-sm font-semibold flex gap-2"><span className="material-symbols-outlined">arrow_outward</span>View Demo</p>
                    </div>
                </div>
            </section>

            <section className="bg-black md:w-full flex justify-center grid-lines py-10">
                <div className="p-5 md:p-10 flex flex-col gap-10 max-w-360 h-100 justify-center">
                    <h2 className="uppercase font-sora text-3xl md:text-5xl font-extrabold text-white max-w-240 text-center">Ready to engineer your next <span className="text-[#00F0FF]">high-performance system?</span></h2>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center">
                        <button className="uppercase text-sm bg-white px-10 py-4 font-mono font-semibold w-60 hover:shadow-[6px_8px_0_0_#00F0FF] duration-100">{exploreWorkButtonText}</button>
                        <button className="uppercase text-sm bg-white px-10 py-4 font-mono font-semibold w-60">{downloadResumeButtonText}</button>
                    </div>
                </div>
            </section>
        </>
    );
}