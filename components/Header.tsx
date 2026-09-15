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
        <header className="relative mx-auto grid min-h-20 w-[calc(100%-2.5rem)] max-w-360 grid-cols-[auto_1fr] items-center md:w-[calc(100%-5rem)] md:grid-cols-[1fr_auto_1fr]">
            <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation"
                onClick={handleMenuClick}
                className="material-symbols-outlined justify-self-start md:hidden! size-10 text-2xl leading-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F0FF]"
            >
                {isMenuOpen ? "close" : "menu"}
            </button>
            <h1 className="col-start-2 justify-self-end font-sora text-lg font-bold uppercase leading-tight md:col-start-1 md:row-start-1 md:justify-self-start md:text-2xl">{firstname}</h1>
            <div
                ref={menuRef}
                id="site-navigation"
                aria-hidden={!isMenuOpen}
                className={`fixed inset-y-0 left-0 z-1000 grid w-75 max-w-[75vw] grid-rows-[auto_1fr_auto] box-border bg-white px-0 shadow-[8px_8px_0_0_black] transition-[transform,opacity] duration-300 ease-out md:static md:contents md:pointer-events-auto md:translate-x-0 md:opacity-100 md:shadow-none ${isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"}`}
            >
                {isMenuOpen && <h1 className="row-start-1 m-5 text-3xl font-sora font-bold uppercase leading-tight md:hidden">{firstname} {lastname}</h1>}
                <nav className="row-start-2 m-5 grid content-start gap-5 uppercase font-sora text-xs font-semibold md:col-start-2 md:row-start-1 md:m-0 md:grid-cols-4">
                    <Link href="/projects" className={`grid min-w-30 grid-flow-col items-center justify-start gap-2 px-5 py-3 md:justify-center md:gap-5 ${pathname === "/projects" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"} duration-500 transition-colors`}>
                        <span className="material-symbols-outlined rotate-90 md:hidden!">expand_all</span>
                        Projects
                    </Link>
                    <Link href="/about" className={`grid min-w-30 grid-flow-col items-center justify-start gap-2 px-5 py-3 md:justify-center md:gap-5 ${pathname === "/about" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"} duration-500 transition-colors`}>
                        <span className="material-symbols-outlined md:hidden!">person</span>
                        About
                    </Link>
                    <Link href="/resume" className={`grid min-w-30 grid-flow-col items-center justify-start gap-2 px-5 py-3 md:justify-center md:gap-5 ${pathname === "/resume" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"} duration-500 transition-colors`}>
                        <span className="material-symbols-outlined md:hidden!">description</span>
                        Resume
                    </Link>
                    <Link href="/contact" className={`grid min-w-30 grid-flow-col items-center justify-start gap-2 px-5 py-3 md:justify-center md:gap-5 ${pathname === "/contact" ? "bg-[#00F0FF]" : "hover:bg-[#00F0FF]"} duration-500 transition-colors`}>
                        <span className="material-symbols-outlined md:hidden!">email</span>
                        Contact
                    </Link>
                </nav>
                <button className="group row-start-3 mx-5 mb-5 mt-auto grid min-h-11 w-45 grid-flow-col place-content-center gap-2 bg-black py-3 font-mono font-semibold text-white duration-100 transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_8px_0_0_#00F0FF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F0FF] md:col-start-3 md:row-start-1 md:m-0 md:justify-self-end">
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