"use client"

import workExperience from '@/data/work_experience.json'
import education from '@/data/education.json'
import projects from '@/data/projects.json'
import type { Experience, Education, ProjectDetails } from '@/features/types'
import { useEffect, useState } from 'react'

export default function Resume() {
    const [featuredProjects, setFeaturedProjects] = useState<ProjectDetails[]>([])

    useEffect(() => {
        setFeaturedProjects(projects.slice(0, 2))
    }, [])

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
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-start">
                <div className='md:col-span-7 flex flex-col'>
                    <div className='flex items-center my-4 gap-4'>
                        <p className='uppercase font-mono text-xs bg-black text-white px-2 py-1'>Exp.01</p>
                        <h2 className="uppercase text-xl font-sora font-bold">Work Experience</h2>
                    </div>
                    <div className='flex flex-col gap-6 flex-1'>
                        {workExperience.map((experience: Experience, index: number) => {
                            return (
                                <div key={index} className='flex flex-col gap-2 bg-[#F0F1F1] p-8 flex-1 shadow-md hover:-translate-y-2 hover:transition-all duration-300'>
                                    <p className='uppercase font-mono text-sm'>{experience.from} - {experience.to}</p>
                                    <div className='flex flex-col gap-3 flex-1 justify-between'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-lg uppercase font-sora font-bold'>{experience.designation}</p>
                                            <p className='text-[#00929b] text-sm uppercase font-mono'>{experience.company} • {experience.location}</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            {experience.responsibilities.map((res, idx) => {
                                                return (
                                                    <div className='flex gap-4 text-[#2F3131]' key={idx}>
                                                        <span className='font-mono'>{idx < 9 ? '0' : ''}{idx + 1}</span>
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

                <div className='md:col-span-5 flex flex-col justify-between gap-6'>
                    <div className='flex flex-col flex-1'>
                        <div className='flex justify-between items-center my-4 gap-4'>
                            <div className='flex items-center gap-4'>
                                <p className='uppercase font-mono text-xs bg-black text-white px-2 py-1'>Acad.02</p>
                                <h2 className="uppercase text-xl font-sora font-bold">Education</h2>
                            </div>
                            <p className='uppercase text-xs text-[#737373] font-mono'>Credentials</p>
                        </div>
                        <div className='flex flex-col gap-4 flex-1'>
                            {education.map((edu: Education, idx: number) => {
                                return (
                                    <div key={idx} className='flex flex-col justify-between gap-2 bg-[#F0F1F1] p-8 flex-1 shadow-md hover:-translate-y-2 hover:transition-all duration-300'>
                                        <div className='font-mono text-xs flex justify-between items-center'>
                                            <p>{edu.to} - {edu.from}</p>
                                            <p className='bg-[#00F0FF] px-2 py-0.5 font-bold'>CGPA: {edu.cgpa} / 10.0</p>
                                        </div>
                                        <h2 className='uppercase text-lg font-bold font-sora'>{edu.degree}</h2>
                                        <p className='font-inter font-medium'>{edu.college}</p>
                                        <div className='font-inter text-[#2F3131]'>
                                            {
                                                edu.learnings.join(", ")
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <div className='flex justify-between items-center my-4 gap-4'>
                            <div className='flex items-center gap-4'>
                                <p className='uppercase font-mono text-xs bg-black text-white px-2 py-1'>Proj.03</p>
                                <h2 className="uppercase text-xl font-sora font-bold">Featured Projects</h2>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 flex-1'>
                            {featuredProjects.map((project, idx) => {
                                return (
                                    <div key={idx} className='p-8 flex flex-col justify-between gap-4 bg-[#F0F1F1] flex-1 hover:shadow-lg hover:transition-all duration-300'>
                                        <div className='flex justify-between'>
                                            <p>Placeholder</p>
                                            <p className='material-symbols-outlined'>sports_esports</p>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <h2 className='uppercase text-lg font-bold font-sora'>{project.name}</h2>
                                            <p className='font-inter font-medium'>{project.description}</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                {project.tech_stack.map((tech, tidx) => {
                                                    return (
                                                        <span key={tidx} className='font-mono text-xs bg-[#00F0FF] px-2 py-1'>
                                                            {tech}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='bg-[#F0F1F1] p-8 flex items-center justify-between w-full'>
                        <div className='flex items-center gap-4'>
                            <p className='material-symbols-outlined uppercase'>pin_drop</p>
                            <div>
                                <p className='text-xs uppercase font-mono text-[#737373]'>Operational Base</p>
                                <p className='font-inter font-bold'>Hyderabad, Telangana, India</p>
                            </div>
                        </div>
                        <p className='text-xs font-mono bg-[#E2E2E2] px-2 py-1 font-semibold'>UTC+05:30</p>
                    </div>
                </div>
            </section>
            <section>

            </section>
            <section>

            </section>
        </div>
    )
}