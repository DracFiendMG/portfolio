import workExperience from '@/data/work_experience.json'
import type { Experience } from '@/features/types'

export default function Resume() {
    return (
        <div className="mx-auto w-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)] max-w-360 flex flex-col gap-6">
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 flex flex-col gap-4">
                    <p className="uppercase text-[#00929b] font-mono text-xs md:tracking-wider">Current Status: Available for work</p>
                    <h1 className="uppercase text-5xl md:text-7xl font-sora font-bold tracking-tight">Resume</h1>
                    <p className="text-[#737373] font-inter">Senior Software Engineer / Full Stack Developer with 3+ years of experience in fintech and enterprise environments (Java/Spring Boot, Angular). Full-stack expert focused on AI tooling and high-impact solutions.</p>
                </div>
                <div className="md:self-end md:justify-self-end md:col-span-5">
                    <button className="
                        bg-black text-white px-10 py-4 flex gap-4 shadow-[4px_4px_0_0_#000000] uppercase text-xs items-center font-mono
                        hover:shadow-[8px_8px_0_0_#00F0FF] hover:transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer
                        ">
                        Download PDF
                        <span className="material-symbols-outlined text-lg!">
                            download
                        </span>
                    </button>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div>
                    <h2 className="uppercase text-sm font-mono">Work Experience</h2>
                    <div>
                        {workExperience.map((experience: Experience, index: number) => {
                            return (
                                <div key={index}>
                                    <p>{experience.from} - {experience.to}</p>
                                    <div>
                                        <p>{experience.designation}</p>
                                        <p>{experience.company} - {experience.location}</p>
                                        <div>
                                            {experience.responsibilities.map((res, idx)=>(
                                                <p key={idx}>{res}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    Education
                </div>
            </section>
            <section>

            </section>
            <section>

            </section>
        </div>
    )
}