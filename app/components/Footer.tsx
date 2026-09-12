import Link from "next/link"

export default function Footer() {
    const firstname = "Sreeram Reddy"
    const lastname = "Velagala"

    return (
        <footer className="bg-black w-full grid grid-cols-1 gap-5 text-center p-10 font-sora md:grid-cols-3 md:items-center">
            <h1 className="text-lg text-white uppercase font-bold">{firstname}</h1>
            <div className="grid grid-cols-1 gap-2 text-xs text-[#737373] md:grid-cols-4">
                <Link href="/github">GitHub</Link>
                <Link href="/linkedin">LinkedIn</Link>
                <Link href="/medium">Medium</Link>
                <Link href="/privacy">Privacy</Link>
            </div>
            <p className="text-[#737373] text-xs font-bold">©2026 SREERAM REDDY. SENIOR FULL STACK DEVELOPER.</p>
        </footer>
    )
}