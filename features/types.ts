export interface ProjectDetails {
    name: string
    description: string
    github: string
    tech_stack: string[]
    image: string
}

export interface Experience {
    from: string
    to: string
    designation: string
    company: string
    location: string
    responsibilities: string[]
}

export interface Education {
    from: number
    to: number
    degree: string
    college: string
    cgpa: string
    learnings: string[]
}

export interface Skill {
    category: string
    items: string[]
    icon: string
}