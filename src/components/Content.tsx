// Content.tsx
import Image from "next/image";
import text3 from '@/assets/text3.webp'
import banner2 from '@/assets/banner2.webp'

export default function Content() {
    return (
        <div id="sobre" className="block h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-10">
            <div className="w-none lg:w-1/2">
                <Image src={banner2} alt="Texto" width={1000} height={32} className="mb-6 lg:mb-0" />
            </div>
            <div className="relative z-10 text-white w-full lg:w-1/3">
                <div className="text-left mb-4">
                    <Image src={text3} alt="Texto" width={600} height={32} />
                    <p className="text-sm md:text-xl text-gray-custom font-bold mb-4 pr-0 lg:pr-20">Acreditamos que o desenvolvimento responsável é algo com o qual sempre trabalhamos. O desenvolvimento responsável existe para desenvolver um mundo mais organizado e levar a melhores resultados.</p>
                </div>
                <button className="bg-green-neon text-black text-2xl font-bold py-3 px-12 rounded swv">
                    Explorar
                </button>
            </div>
        </div>
    );
}
