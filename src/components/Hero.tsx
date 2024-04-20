// Hero.tsx
import Image from "next/image";
import text from '@/assets/text.png'
import banner1 from '@/assets/banner1.png'
import { FaPlay } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="block h-screen flex items-center justify-center px-16">
            <div className="relative z-10 text-white w-full lg:w-1/3">
                <div className="text-left mb-4">
                    <Image src={text} alt="Texto" width={600} height={32} />
                    <p className="text-sm md:text-xl text-gray-custom font-bold mb-4 pr-0 lg:pr-20">TrueVR é a próxima evolução do mundo de realidade virtual. Nossa visão é ajudar a conectar todas as pessoas do mundo, eliminando distância e tempo. Comece sua aventura agora mesmo, juntos.</p>
                </div>
                <div className="flex flex-row gap-6">
                    <button className="bg-green-neon text-black text-2xl font-bold py-3 px-12 rounded swv">
                        Explorar
                    </button>
                    <button className="bg-none flex flex-row items-center text-white text-2xl font-bold py-3 px-10 rounded">
                        <FaPlay className="mr-6"/>
                        Mais
                    </button>
                </div>
            </div>
            <div className="w-none lg:w-1/2">
                <Image src={banner1} alt="Texto" width={1200} height={32} />
            </div>
        </div>
    );
}
