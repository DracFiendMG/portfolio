'use client';

import { useState } from "react";
import projects from "@/data/projects.json";
import Filter from "../../components/Filter";
import Project from "../../components/Project";

export default function Projects() {
    const uniqueTags = [...new Set(projects.flatMap(project => project.tech_stack))]
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                    {projects.map((project, index) => {
                        // Predefined patterns for 12-column grid pairs
                        const patterns = [
                            ['md:col-span-5', 'md:col-span-7'],
                            ['md:col-span-8', 'md:col-span-4'],
                            ['md:col-span-6', 'md:col-span-6'],
                            ['md:col-span-7', 'md:col-span-5'],
                            ['md:col-span-4', 'md:col-span-8'],
                        ];
                        const rowIndex = Math.floor(index / 2);
                        const spanClass = patterns[rowIndex % patterns.length][index % 2];
                        
                        return (
                            <div key={project.name} className={spanClass}>
                                <Project project={project} />
                            </div>
                        )
                    })}
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}