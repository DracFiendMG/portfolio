'use client';

import { useEffect, useState } from "react";
import projects from "@/data/projects.json";
import Filter from "../../components/Filter";
import Project from "../../components/Project";
import type { ProjectDetails } from "@/features/types";

export default function Projects() {
    const uniqueTags = [...new Set(projects.flatMap(project => project.tech_stack))].sort();
    const [filteredProjects, setFilteredProjects] = useState<ProjectDetails[]>([]);
    const [randColSpans] = useState<number[]>(getRandColSpans(projects.length));
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        // Filter projects by both selected tags and search query
        setFilteredProjects(projects.filter((project) => {
            const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => project.tech_stack.includes(tag));

            const query = searchQuery.trim().toLowerCase();
            const matchesSearch = !query || (
                project.name.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.tech_stack.some(t => t.toLowerCase().includes(query))
            );

            return matchesTags && matchesSearch;
        }));
    }, [selectedTags, searchQuery])

    // Calculate count of projects using each technology tag
    const tagCounts = projects.reduce((acc, project) => {
        project.tech_stack.forEach(tech => {
            acc[tech] = (acc[tech] || 0) + 1;
        });
        return acc;
    }, {} as Record<string, number>);

    function getRandColSpans(count: number): number[] {
        let colSpans: number[] = [];
        let rand = 6;
        for (let i = 0; i < count; i++) {
            if (i % 2 === 0) {
                rand = Math.floor((Math.random() * 5) + 4);
                colSpans.push(rand);
            } else {
                colSpans.push(12 - rand);
            }
        }
        return colSpans;
    }

    const colSpanMap: Record<number, string> = {
        4: "md:col-span-4",
        5: "md:col-span-5",
        6: "md:col-span-6",
        7: "md:col-span-7",
        8: "md:col-span-8",
    };

    const handleTagClick = (tag: string) => {
        if (tag.toLowerCase() === "all") {
            setSelectedTags([]);
            return;
        }

        setSelectedTags((currentTags) =>
            currentTags.includes(tag)
                ? currentTags.filter((currentTag) => currentTag !== tag)
                : [...currentTags, tag]
        );
    };

    const handleResetClick = () => {
        setSelectedTags([]);
        setSearchQuery("");
    };

    return (
        <div className="md:max-w-360 mx-auto w-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)] min-w-0 max-w-full">
            <section className="grid grid-cols-1 gap-4 mt-5 mb-10 md:mt-10 md:mb-20 max-w-100 md:max-w-[50%]">
                <p className="uppercase font-mono text-xs font-semibold">Archive 2022-2026</p>
                <h1 className="uppercase font-sora font-extrabold text-5xl md:text-7xl tracking-tighter max-w-100">Selected Works.</h1>
                <p className="text-[#737373] font-inter">Senior Software Engineer / Full Stack Developer specializing in high-performance financial systems, scalable cloud architecture, and LLM-integrated platforms for institutional-grade digital products.</p>
            </section>
            <section>
                <div className="mb-8">
                    <Filter
                        tags={uniqueTags}
                        selectedTags={selectedTags}
                        onTagClick={handleTagClick}
                        onResetClick={handleResetClick}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        tagCounts={tagCounts}
                        totalCount={projects.length}
                        filteredCount={filteredProjects.length}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6 my-10">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => {
                            const originalIndex = projects.findIndex(p => p.name === project.name);
                            const spanClass = colSpanMap[randColSpans[originalIndex]] || "md:col-span-6";

                            return (
                                <div key={project.name} className={spanClass}>
                                    <Project project={project} />
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-12 flex flex-col items-center justify-center p-12 border-3 border-black bg-white shadow-[6px_6px_0_0_black] text-center gap-4 my-8">
                            <span className="material-symbols-outlined text-5xl text-neutral-400">search_off</span>
                            <h3 className="font-sora font-extrabold text-2xl uppercase">No Projects Matched</h3>
                            <p className="font-inter text-neutral-600 max-w-md text-sm">
                                No projects found matching the current filter. Try clearing selected tags or adjusting your search keyword.
                            </p>
                            <button
                                onClick={handleResetClick}
                                className="font-mono text-xs uppercase font-bold px-6 py-3 border-2 border-black bg-black text-white hover:bg-[#00F0FF] hover:text-black transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <section className="my-15 md:mb-25 md:mt-25 flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
                <h2 className="text-xl md:text-2xl font-bold uppercase font-sora">Ready to start a new project?</h2>
                <div className="flex gap-4">
                    <button className="uppercase font-mono font-semibold text-xs bg-black text-white px-8 py-3">Book a call</button>
                    <button className="uppercase font-mono font-semibold text-xs bg-white text-black border-3 px-8 py-3">Inquire</button>
                </div>
            </section>
        </div>
    )
}