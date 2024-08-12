import { article2 } from "@/constants/discover";
import Image from "next/image";
import Paragraph from "./Paragraph";
import BoldedContent from "./BoldedContent";
import YouTubeVideo from "../YtVideo";

const LookingAheadArticle = () => {

    const { 
        title, 
        article, 
        author, 
        bolded, 
        date, 
        image 
    } = article2;

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
            <div className="h-[1px] w-full bg-darkgray/30" /> 
            {bolded.slice(0, 5).map((e, index) => (
                <BoldedContent key={index} content={e} text={article[index+1]} className="text-2xl text-darkblue" />
            ))}
            <div className="h-[1px] mt-5 w-full bg-darkgray/30" /> 
            <BoldedContent content={bolded[5]} text={article[6]} className="text-3xl text-darkblue" />
            {/* <YouTubeVideo src="https://www.youtube.com/embed/TrWYGSUBNaQ?si=uB8OdOfqXuQigO84" title="The Philippines Innovation Boom" /> */}
        </>
    );
};

export default LookingAheadArticle