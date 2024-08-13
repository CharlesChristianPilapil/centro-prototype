import { article3 } from "@/constants/discover";
import Image from "next/image"
import Paragraph from "./Paragraph";
import YouTubeVideo from "../YtVideo";
import BoldedContent from "./BoldedContent";
import Line from "./Line";

const IsPhilippinesReadyArticle = () => {

    const { 
        title, 
        article, 
        author, 
        bolded, 
        numbered,
        videos,
        date, 
        image,
        images
    } = article3;

    return (
        <>
            <h1 className="text-3xl font-bold text-darkblue max-w-[600px]"> {title} </h1>
            <p className="text-lightblue"> {date} | {author} </p>
            <div>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full"
                />
            </div>
            <Paragraph text={article[0]} />
            <YouTubeVideo src={videos[0].src} title={videos[0].src} />
            <Paragraph text={article[1]} />
            <BoldedContent content={bolded[0]} className="font-bold text-lg text-darkgray" />
            <Line />
            <BoldedContent content={bolded[1]} className="font-bold text-2xl text-darkgray" />
            <YouTubeVideo src={videos[1].src} title={videos[1].src} />
            <BoldedContent content={bolded[2]} className="font-bold text-lg -mt-3 text-darkgray" />
            <Paragraph text={article[3]} />
            <ol className="flex flex-col gap-1  ">
                {numbered.slice(0, 7).map((e, index) => (
                    <BoldedContent 
                        key={index}
                        variant="numbered" 
                        content={e.bolded} 
                        text={e.description} 
                    />
                ))}
            </ol>
            <Paragraph text={article[4]} />
            <Line />
            <BoldedContent content={bolded[3]} className="text-2xl text-darkgray" />
            <YouTubeVideo src={videos[1].src} title={videos[1].src} />
            <BoldedContent content={bolded[4]} className="text-lg -mt-3 text-darkgray" />
            <Paragraph text={article[5]} />
            <ol className="flex flex-col gap-1  ">
                {numbered.slice(7).map((e, index) => (
                    <BoldedContent 
                        key={index}
                        variant="numbered" 
                        content={e.bolded} 
                        text={e.description} 
                    />
                ))}
            </ol>
            <Paragraph text={article[6]}/>
            <Line />
            <BoldedContent content={bolded[5]} className="text-darkgray text-2xl" />
            <div>
                <Image
                    src={images[0]}
                    alt={`light bulb`}
                    width={500}
                    height={500}
                    className="w-full"
                />
            </div>
            <Paragraph text={article[7]}/>
            <Line />
            <BoldedContent content={bolded[6]} className="text-darkgray text-2xl" />
            <div>
                <Image
                    src={images[1]}
                    alt={`Sisyphus`}
                    width={500}
                    height={500}
                    className="w-full"
                />
            </div>
            <Paragraph text={article[8]}/>
            <Line />
            <BoldedContent content={bolded[7]} className="text-darkgray text-2xl" />
            <div>
                <Image
                    src={images[2]}
                    alt={`eraser on note`}
                    width={500}
                    height={500}
                    className="w-full"
                />
            </div>
            <Paragraph text={article[9]}/>
        </>
    )
}
export default IsPhilippinesReadyArticle