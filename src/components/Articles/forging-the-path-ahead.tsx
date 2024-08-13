import Image from "next/image"
import { article1 } from "@/constants/discover"
import Paragraph from "./Paragraph";
import BoldedContent from "./BoldedContent";
import Line from "./Line";

const ForgingThePathArticle = () => { 

    const { 
        title, 
        article, 
        author, 
        bolded, 
        date, 
        image 
    } = article1;

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
        <Paragraph text={article[0]} className="mb-5" />
        <Line />
        <Paragraph text={article[1]} />
        {bolded.map((e, index) => (
            <BoldedContent key={index} content={bolded[index]} variant="bullet" text={article[index+2]} />
        ))}
        <h1 className="text-3xl font-bold text-darkgray mt-5"> Final Key Takeaways </h1>
        <Paragraph text={article[7]} />
        <h1 className="font-bold text-darkgray mt-10"> Sources: </h1>
        <Paragraph text={article[8]} />
    </>
  )
}


export default ForgingThePathArticle;