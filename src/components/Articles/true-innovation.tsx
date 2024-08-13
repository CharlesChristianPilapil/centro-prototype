import { article4 } from "@/constants/discover";
import Image from "next/image";
import Paragraph from "./Paragraph";
import Line from "./Line";
import YouTubeVideo from "../YtVideo";
import BoldedContent from "./BoldedContent";

const TrueInnovationArticle = () => {

    const { 
        title, 
        article, 
        author, 
        bolded, 
        numbered,
        videos,
        date, 
        image,
    } = article4;

    interface ContentSectionInterface {
        video: { src: string; title: string };
        text: { bolded: string; description: string }
        count: number;
    }

    const ContentSection = ({video, text, count}: ContentSectionInterface) => {
        return (
            <section className="mb-5 flex flex-col gap-3">
                <YouTubeVideo src={video.src} title={video.title} />
                <p className="text-lg text-darkgray"> {count}. <strong> {text.bolded} </strong> </p>
                <Paragraph text={text.description} />
            </section>
        )
    }

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
            <Line />
            {numbered.map((e, index) => (
                <ContentSection 
                    key={index} 
                    video={videos[index]} 
                    text={e} 
                    count={index + 1}
                />)
            )}
            <BoldedContent content={bolded[0]} className="text-darkgray text-2xl" />
            <Paragraph text={article[1]} />
        </>
    )
}
export default TrueInnovationArticle