import type { Project } from "@/features/types";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: Project }) {
    return (
        <div className="flex flex-col gap-4 border-2">
            <Image src={project.image} alt={project.name} width={500} height={500} />
            <div className="flex flex-col gap-4 p-4 font-sora">
                <div className="flex flex-wrap gap-2">
                    {
                        project.tech_stack.map(tech => {
                            return (
                                <span key={tech} className={`shrink-0 uppercase font-mono text-xs px-4 py-2 border-2 odd:bg-black odd:text-white odd:border-black`}>{tech}</span>
                            )
                        })
                    }
                </div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                {/* <Link href={project.github}>View Project</Link> */}
            </div>
        </div>
    )
}