// Card.tsx
import Image from "next/image";
import text2 from '@/assets/text2.webp'
import { FaUsers, FaBook, FaPalette } from "react-icons/fa";
import { IoGameController, IoStatsChart } from "react-icons/io5";
import { GiMedicalPack } from "react-icons/gi";
import { PiFilmReelFill } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";

export default function Card() {
    return (
        <div id="projeto" className="w-full flex flex-col justify-center items-center h-full">
            <Image src={text2} alt="Logo" width={800} height={32} className="top-0 mb-20 px-6 lg:px-0" />
            <div className="sm:w-4/5 lg:w-2/2 bg-blue-custom p-4 rounded-lg sw">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <IoStatsChart className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para comercial</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <FaUsers className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para redes sociais</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <IoGameController className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para jogos</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <FaBook className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para educação</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <GiMedicalPack className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para medicina</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <PiFilmReelFill className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para entretenimento</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <MdBusinessCenter className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para negócios</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col justify-center items-center">
                        <FaPalette className="w-1/2 lg:w-1/3 h-1/2 bg-green-custom text-black rounded-lg py-6 mb-6 swv" />
                        <p>VR para arte</p>
                    </div>
                </div>
            </div>
        </div>
    );
}