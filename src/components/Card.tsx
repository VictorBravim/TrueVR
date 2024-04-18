// Card.tsx
import Image from "next/image";
import Image1 from '@/assets/image1.png'
import text2 from '@/assets/text2.png'

export default function Card() {
    return (
        <div className="w-full flex flex-col items-center">
            <Image src={text2} alt="Texto" width={600} height={32} />
            <div className="w-full px-40 py-12 grid grid-cols-4 gap-2">
                {[
                    { image: Image1, title: "Title 1" },
                    { image: Image1, title: "Title 2" },
                    { image: Image1, title: "Title 3" },
                    { image: Image1, title: "Title 4" },
                ].map((item, index) => (
                    <div key={index} className="bg-black p-2">
                        <div className="relative h-0" style={{ paddingTop: "100%" }}>
                            <Image
                                src={item.image}
                                alt={`Image${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h1 className="text-center text-xl mt-2">{item.title}</h1>
                    </div>
                ))}
                {[
                    { image: Image1, title: "Title 5" },
                    { image: Image1, title: "Title 6" },
                    { image: Image1, title: "Title 7" },
                    { image: Image1, title: "Title 8" },
                ].map((item, index) => (
                    <div key={index + 4} className="bg-black p-2">
                        <div className="relative h-0" style={{ paddingTop: "100%" }}>
                            <Image
                                src={item.image}
                                alt={`Image${index + 5}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h1 className="text-center text-xl mt-2">{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}