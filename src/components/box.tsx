// Box.tsx

export default function Box() {
    return (
        <div className="flex flex-col justify-center items-center h-full mb-24">
            <div className="w-4/5 md:w-2/2 bg-green-neon p-24 rounded-lg sw">
                <div className="flex flex-col justify-center items-center text-white">
                    <h1 className="text-black text-5xl mb-2 font-bold">Comece com TrueVR</h1>
                    <p className="w-1/2 text-lg text-center mb-4">Assine para receber ofertas interessantes de arte e obtenha a melhor tecnologia para suas diversas atividades.</p>
                    <button className="bg-black text-white text-xl font-bold py-3 px-12 rounded swv">
                        Começar
                    </button>
                </div>
            </div>
        </div>
    );
}