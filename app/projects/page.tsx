'use client';

import { useEffect, useState } from "react";
import projects from "@/data/projects.json";
import Filter from "../../components/Filter";
import Project from "../../components/Project";

export default function Projects() {
    const uniqueTags = [...new Set(projects.flatMap(project => project.tech_stack))]
    const [randColSpans] = useState<number[]>(getRandColSpans(projects.length))
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [projectsList, setProjectsList] = useState<React.ReactNode[]>([])

    useEffect(() => {
        setProjectsList(getMappedProjects())
    }, [])

    function getRandColSpans(count: number): number[] {
        let colSpans: number[] = []
        let rand = 6
        for (let i = 0; i < count; i++) {
            if (i % 2 === 0) {
                rand = Math.floor((Math.random() * 5) + 4)
                colSpans.push(rand)
            } else {
                colSpans.push(12 - rand)
            }
        }
        return colSpans
    }

    const getMappedProjects = () => {
        const colSpanMap: Record<number, string> = {
            4: "md:col-span-4",
            5: "md:col-span-5",
            6: "md:col-span-6",
            7: "md:col-span-7",
            8: "md:col-span-8",
        };

        return projects.map((project, index) => {

            const spanClass = colSpanMap[randColSpans[index]] || "md:col-span-6";

            return (
                <div key={project.name} className={spanClass}>
                    <Project project={project} />
                </div>
            )
        })
    }

    const handleTagClick = (tag: string) => {
        setSelectedTags((currentTags) =>
            currentTags.includes(tag)
                ? currentTags.filter((currentTag) => currentTag !== tag)
                : [...currentTags, tag]
        );
    };

    return (
        <div className="md:max-w-360 mx-auto w-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)]">
            <section className="grid grid-cols-1 gap-4 mb-4 max-w-100">
                <p className="uppercase font-mono text-xs font-semibold">Archive 2022-2026</p>
                <h1 className="uppercase font-sora font-extrabold text-5xl md:text-7xl tracking-tighter">Selected Works.</h1>
                <p className="text-[#737373] font-inter">Senior Software Engineer / Full Stack Developer specializing in high-performance financial systems, scalable cloud architecture, and LLM-integrated platforms for institutional-grade digital products.</p>
            </section>
            <section>
                <div className="mb-4">
                    <Filter tags={uniqueTags} selectedTags={selectedTags} onTagClick={handleTagClick} />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6 my-10">
                    {projectsList}
                </div>
            </section>
            <section className="my-15 md:mb-25 md:mt-35 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
                <h2 className="text-xl md:text-2xl font-bold uppercase font-sora">Ready to start a new project?</h2>
                <div className="flex gap-4">
                    <button className="uppercase font-mono font-semibold text-xs bg-black text-white px-8 py-3">Book a call</button>
                    <button className="uppercase font-mono font-semibold text-xs bg-white text-black border-3 px-8 py-3">Inquire</button>
                </div>
            </section>
        </div>
    )
}