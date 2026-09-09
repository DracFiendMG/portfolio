import Link from "next/link"

export default function Header() {
    const firstname = "Sreeram Reddy"
    const lastname = "Velagala"

    return (<header>
        <h1>{firstname}</h1>
        <div>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <button>Connect</button>
    </header>)
}