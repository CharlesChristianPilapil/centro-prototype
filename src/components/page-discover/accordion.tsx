import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/discover";

const DiscoverAccordion = () => {

    interface ContentProps {
        count: number;
        question: string;
        answer: string;
    };

    const Content = ({count, question, answer}: ContentProps) => {
        return (
            <AccordionItem key={question} value={question}>
                <AccordionTrigger className="shadow shadow-darkblue text-darkblue px-2 text-start gap-[5px] rounded">
                    {count}. {question}
                </AccordionTrigger>
                <AccordionContent className="text-lightblue pt-2 px-2">
                    {answer}
                </AccordionContent>
            </AccordionItem>  
        )
    }

    return (
        <>
            <Accordion type="multiple" className="w-full pt-1 mb-24 xl:grid xl:grid-cols-2 gap-x-5 overflow-x-hidden px-1">
                <div>
                    {faqs.slice(0, 8).map((e, index) => (
                        <Content 
                            key={e.question}
                            count={index + 1}
                            question={e.question}
                            answer={e.answer}
                        />
                    ))}
                </div>
                <div>
                    {faqs.slice(8).map((e, index) => (
                        <Content 
                            key={e.question}
                            count={index + 9}
                            question={e.question}
                            answer={e.answer}
                        /> 
                    ))}
                </div>
            </Accordion>
        </>
    )
}

export default DiscoverAccordion;