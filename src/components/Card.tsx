// Card.tsx
import Image from "next/image";
import text2 from '@/assets/text2.png'
import { FaUsers, FaBook, FaPalette } from "react-icons/fa";
import { IoGameController, IoStatsChart } from "react-icons/io5";
import { GiMedicalPack } from "react-icons/gi";
import { PiFilmReelFill } from "react-icons/pi";
import { MdBusinessCenter } from "react-icons/md";

export default function Card() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Image src={text2} alt="Logo" width={800} height={32} className="top-0 mb-20" />
            <div className="w-4/5 md:w-2/2 bg-blue-custom p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <IoStatsChart />
                        <p>VR para comercial</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <FaUsers />
                        <p>VR para redes sociais</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <IoGameController />
                        <p>VR para jogos</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <FaBook />
                        <p>VR para educação</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <GiMedicalPack />
                        <p>VR para medicina</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <PiFilmReelFill />
                        <p>VR para entretenimento</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <MdBusinessCenter />
                        <p>VR para negócios</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg flex flex-col items-center">
                        <FaPalette />
                        <p>VR para arte</p>
                    </div>
                </div>
            </div>
        </div>
    );
}