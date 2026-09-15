import type { Project } from "@/features/types";
import Image from "next/image";

export default function Project({ project }: { project: Project }) {
    return (
        <div>
            <Image src={project.image} alt={project.name} width={500} height={500} />
        </div>
    )
}