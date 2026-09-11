"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
    const firstname = "Sreeram Reddy"
    const lastname = "Velagala"
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleMenuClick = () => {
        setIsMenuOpen((isOpen) => !isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <header className="relative flex min-h-20 w-full max-w-360 items-center justify-between">
            <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-2 px-5 py-4 font-sora font-bold uppercase md:px-10">
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation"
                    onClick={handleMenuClick}
                    className="material-symbols-outlined md:hidden! size-10 shrink-0 text-2xl leading-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F0FF]"
                >
                    {isMenuOpen ? "close" : "menu"}
                </button>
                <h1 className="text-lg leading-tight md:text-2xl">{firstname}</h1>
            </div>
            <div
                ref={menuRef}
                id="site-navigation"
                aria-hidden={!isMenuOpen}
                className={`fixed inset-y-0 left-0 z-1000 flex w-75 max-w-[75vw] flex-col md:flex-row box-border bg-white px-0 shadow-[8px_8px_0_0_black] transition-[transform,opacity] duration-300 ease-out md:static md:w-auto md:min-w-0 md:max-w-none md:translate-x-0 md:opacity-100 md:shadow-none ${isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"}`}
            >
                {isMenuOpen && <h1 className="m-5 text-3xl leading-tight uppercase font-sora font-bold md:hidden">{firstname} {lastname}</h1>}
                <nav className="m-5 flex flex-col md:flex-row gap-5 uppercase font-sora font-semibold text-xs">
                    <Link href="/projects" className={`px-5 py-3 flex items-center gap-5 ${pathname === "/projects" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"}`}>
                        <span className="material-symbols-outlined rotate-90">expand_all</span>
                        Projects
                    </Link>
                    <Link href="/about" className={`px-5 py-3 flex items-center gap-5 ${pathname === "/about" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"}`}>
                        <span className="material-symbols-outlined">person</span>
                        About
                    </Link>
                    <Link href="/resume" className={`px-5 py-3 flex items-center gap-5 ${pathname === "/resume" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"}`}>
                        <span className="material-symbols-outlined">description</span>
                        Resume
                    </Link>
                    <Link href="/contact" className={`px-5 py-3 flex items-center gap-5 ${pathname === "/contact" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"}`}>
                        <span className="material-symbols-outlined">email</span>
                        Contact
                    </Link>
                </nav>
                <button className="group mx-5 mt-auto mb-5 flex min-h-11 w-45 justify-center gap-2 bg-black py-3 text-white font-mono font-semibold hover:shadow-[6px_8px_0_0_#00F0FF] duration-100 transition-transform hover:-translate-x-1 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F0FF]">
                    Connect
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        arrow_outward
                    </span>
                </button>
            </div>
            <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 z-900 bg-black transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-25" : "pointer-events-none opacity-0"}`}
            />
        </header>
    )
}