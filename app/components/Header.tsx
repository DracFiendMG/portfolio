"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Header() {
    const firstname = "Sreeram Reddy"
    const lastname = "Velagala"
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLInputElement>(null)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
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
        <header className="flex justify-between relative w-full">
            <span className="material-symbols-outlined my-class" onClick={handleMenuClick}>menu</span>
            <h1>{firstname}</h1>
            <nav ref={menuRef} className={`${isMenuOpen ? '' : 'hidden'} fixed bg-white h-screen z-1000`}>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <button>Connect</button>
        </header>
    )
}