// Nav.tsx
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Nav() {
    return (
        <nav className="bg-transparent p-8 absolute w-full z-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center ml-0 lg:ml-8">
                    <Image src={logo} alt="Logo" width={150} height={32} />
                </div>
                <div className="md:flex space-x-12 mt-4 md:mt-0">
                    <a className="text-gray-400 text-base md:text-lg">Sobre</a>
                    <a className="text-gray-400 text-base md:text-lg">Projeto</a>
                    <a className="text-gray-400 text-base md:text-lg">Comunidade</a>
                    <a className="text-gray-400 text-base md:text-lg">Recursos</a>
                </div>
                <button className="bg-none border border-green-custom text-green-custom rounded-md text-base md:text-lg font-bold py-2 px-4 mt-4 md:mt-0 mr-0 lg:mr-8">
                    Sign up
                </button>
            </div>
        </nav>
    );
}