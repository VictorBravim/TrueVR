// Footer.tsx
import Image from "next/image";
import logo from '@/assets/logo.webp'

export default function Footer() {
    return (
        <footer className="bg-#070A0F text-white p-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center mb-2 lg:mb-0">
                    <Image src={logo} alt="Logo" width={120} height={32} />
                </div>
                <div className="md:flex space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <a className="text-gray-400 text-base md:text-lg">Sobre</a>
                    <a className="text-gray-400 text-base md:text-lg">Projeto</a>
                    <a className="text-gray-400 text-base md:text-lg">Comunidade</a>
                    <a className="text-gray-400 text-base md:text-lg">Recursos</a>
                </div>
            </div>
        </footer>
    );
}