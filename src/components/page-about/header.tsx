import { header } from "@/constants/about";
import Image from "next/image";
import ImageToText from "../ImageToText";

const AboutHeader = () => {

    const { title, image, description } = header;

    return (
        <>
            <header className="py-20 bg-darkblue/5 relative">
                <div className="absolute w-full h-full right-0 top-0 -z-10 overflow-hidden">
                    <Image
                        src='/images/about/blur-circle.svg'
                        alt="pattern"
                        height={800}
                        width={800}
                        className="absolute top-0 left-0 transform translate-x-[-50%] translate-y-[-50%]"
                    />
                    <Image
                        src='/images/about/line.svg'
                        alt="pattern"
                        height={800}
                        width={800}
                        className="absolute bottom-0 right-0 translate-y-[50%] md:top-0 md:bottom-auto md:translate-y-0 transform opacity-50"
                    />
                </div>
                <ImageToText
                    title={<h1 className="font-bold text-4xl text-lightblue"> {title} </h1>}
                    description={description}
                    src={image.src}
                    alt={image.alt}
                    reverse
                    reverseInitial
                />
            </header>
        </>
    )
}

export default AboutHeader;