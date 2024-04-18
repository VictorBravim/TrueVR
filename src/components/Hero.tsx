// Hero.tsx

export default function Hero() {
    return (
        <div className="block h-screen flex items-center justify-center px-16">
            <div className="absolute inset-0 bg-cover bg-center"></div>
            <div className="relative z-10 text-white w-full lg:w-1/3">
                <div className="text-left mb-4">
                    <p className="text-sm md:text-2xl text-white font-bold mb-4 pr-0 lg:pr-20">TrueVR é a próxima evolução do mundo de realidade virtual. Nossa visão é ajudar a conectar todas as pessoas do mundo, eliminando distância e tempo. Comece sua aventura agora mesmo, juntos.</p>
                </div>
                <button className="bg-green-custom text-black text-2xl font-bold py-3 px-12 rounded">
                    Explorar
                </button>
            </div>
            <div className="w-none lg:w-1/2"></div>
        </div>
    );
}
