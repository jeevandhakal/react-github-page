import { useState } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact']

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="text-navy-400 font-bold text-lg text-blue-400">
                    Jeevan Dhakal
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex gap-8 text-sm text-slate-400">
                    {links.map(link => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-blue-400 transition-colors"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
                {open && (
                    <ul className="md:hidden px-6 pb-4 flex flex-col gap-4 text-slate-400 text-sm">
                        {links.map(link => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}    