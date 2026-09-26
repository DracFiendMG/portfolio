import workExperience from '@/data/work_experience.json'
import type { Experience } from '@/features/types'

export default function Resume() {
    return (
        <div className="mx-auto w-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)] max-w-360 flex flex-col gap-6">
            <section className="flex flex-col gap-10 mt-4 md:mt-8">
                <div className="flex flex-col gap-2 font-mono text-xs md:flex-row md:justify-between">
                    <p className="uppercase text-black bg-[#00F0FF] self-start px-2 py-1 md:tracking-wider">Current Status: Available for work</p>
                    <p className='uppercase text-[#737373]'>LOC: HYDERABAD, IN / EXP: 3+ YEARS</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                    <div className='md:col-span-8 md:self-end flex flex-col gap-2'>
                        <p className='uppercase font-mono text-xs text-[#737373]'>01 // Dossier & Profile</p>
                        <h1 className="uppercase text-5xl md:text-7xl font-sora font-bold tracking-tight">Curriculam Vitae.</h1>
                    </div>
                    <div className='md:col-span-4 flex flex-col gap-6'>
                        <p className="text-[#737373] font-inter">Senior Software Engineer / Full Stack Developer delivering scalable, high-impact solutions across fintech and enterprise systems. Specialized in distributed backends, ultra-low latency pipelines, and generative AI orchestration.</p>
                        <div className='flex gap-2 md:gap-4 md:self-end md:justify-between flex-wrap w-full'>
                            <button className="
                                bg-black text-white px-10 py-4 flex gap-4 uppercase text-xs items-center font-mono
                                hover:shadow-[8px_8px_0_0_#00F0FF] hover:transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer
                                ">
                                <span className="material-symbols-outlined text-lg!">
                                    download
                                </span>
                                Download PDF
                            </button>
                            <button className="
                                bg-[#F0F1F1] px-10 py-4 flex gap-4 uppercase text-xs items-center font-mono
                                hover:bg-[#E2E2E2] hover:transition-all duration-300 cursor-pointer
                                ">
                                <span className="material-symbols-outlined text-lg!">
                                    terminal
                                </span>
                                Dev Profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono md:mt-6">
                    <div className='bg-[#F0F1F1] hover:bg-[#E2E2E2] hover:transition-all duration-300 p-8 flex flex-col gap-2'>
                        <p className='uppercase text-sm'>API Latency Slash</p>
                        <p className='text-3xl md:text-5xl font-sora font-bold'>73.3%</p>
                        <p className='text-sm md:text-base'>450ms - 120ms optimized</p>
                    </div>
                    <div className='bg-[#F0F1F1] hover:bg-[#E2E2E2] hover:transition-all duration-300 p-8 flex flex-col gap-2'>
                        <p className='uppercase text-sm'>Production SLA</p>
                        <p className='text-3xl md:text-5xl font-sora font-bold'>99.8%</p>
                        <p className='text-sm md:text-base'>Downtime decreased -30%</p>
                    </div>
                    <div className='bg-[#F0F1F1] hover:bg-[#E2E2E2] hover:transition-all duration-300 p-8 flex flex-col gap-2'>
                        <p className='uppercase text-sm'>Master's GPA</p>
                        <p className='text-3xl md:text-5xl font-sora font-bold'>9.58</p>
                        <p className='text-sm md:text-base'>SRM Uni • AI / ML</p>
                    </div>
                    <div className='bg-[#F0F1F1] hover:bg-[#E2E2E2] hover:transition-all duration-300 p-8 flex flex-col gap-2'>
                        <p className='uppercase text-sm'>Stack Depth</p>
                        <p className='text-3xl md:text-5xl font-sora font-bold'>Full</p>
                        <p className='text-sm md:text-base'>Java, Spring, Next, LLMs</p>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className='md:col-span-7'>
                    <h2 className="uppercase text-sm font-mono my-4">Work Experience</h2>
                    <div className='flex flex-col gap-6'>
                        {workExperience.map((experience: Experience, index: number) => {
                            return (
                                <div key={index} className='flex flex-col gap-2'>
                                    <p className='uppercase font-mono text-sm'>{experience.from} - {experience.to}</p>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-lg uppercase font-sora font-bold'>{experience.designation}</p>
                                            <p className='text-[#00929b] text-sm uppercase font-mono'>{experience.company} • {experience.location}</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            {experience.responsibilities.map((res, idx) => {
                                                return (
                                                    <div className='flex gap-4' key={idx}>
                                                        <span>—</span>
                                                        <p className='font-inter'>{res}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='md:col-span-5'>
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