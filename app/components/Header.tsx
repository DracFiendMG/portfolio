"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Header() {
    const firstname = "Sreeram Reddy"
    const lastname = "Velagala"

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
        <header className="relative flex w-full max-w-360 justify-between">
            <h1 className="my-5 flex items-center gap-2 pl-5 font-sora font-bold uppercase">
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation"
                    onClick={handleMenuClick}
                    className="material-symbols-outlined focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F0FF]"
                >
                    {isMenuOpen ? "close" : "menu"}
                </button>
                {firstname}
            </h1>
            <div
                ref={menuRef}
                id="site-navigation"
                aria-hidden={!isMenuOpen}
                className={`fixed inset-y-0 left-0 z-1000 box-border min-w-[75%] bg-white px-0 card-shadow transition-[transform,opacity] duration-300 ease-out md:static md:min-w-0 md:translate-x-0 md:opacity-100 md:shadow-none ${isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"}`}
            >
                <nav className="flex flex-col gap-5 m-5">
                    <Link href="/home">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <button className="group flex justify-center gap-2 py-3 m-5 bg-black text-white font-mono font-semibold w-45 md:w-60 hover:shadow-[6px_8px_0_0_#00F0FF] duration-100 transition-transform hover:-translate-x-1 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F0FF]">
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