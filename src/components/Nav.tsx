// Nav.tsx
'use client'
import { useState } from 'react';
import Image from "next/image";
import logo from '@/assets/logo.webp'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="bg-transparent lg:bg-background p-8 fixed w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8">
                    <Image src={logo} alt="Logo" width={150} height={32} />
                </div>
                <div className="md:flex space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <button className="text-gray-400 text-base md:text-lg" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="text-gray-400 text-base md:text-lg" onClick={() => scrollToSection('projeto')}>Projeto</button>
                    <button className="text-gray-400 text-base md:text-lg" onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button className="text-gray-400 text-base md:text-lg" onClick={() => scrollToSection('recursos')}>Recursos</button>
                </div>
                <button className="bg-none hidden lg:block border border-green-custom text-green-custom rounded-md text-base md:text-lg font-bold py-2 px-4 mt-4 md:mt-0 mr-0 lg:mr-8">
                    Sign up
                </button>
            </div>
        </nav>
    );
}