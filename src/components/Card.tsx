// Card.tsx
import Image from "next/image";
import text2 from '@/assets/text2.png'

export default function Card() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Image src={text2} alt="Logo" width={800} height={32} className="top-0 mb-20" />
            <div className="w-4/5 md:w-2/2 bg-blue-custom p-4 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                    <div className="bg-none p-4 rounded-lg">
                        <p>Conteúdo do segundo cartão</p>
                    </div>
                </div>
            </div>
        </div>
    );
}