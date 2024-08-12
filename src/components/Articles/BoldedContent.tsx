interface BoldedContentInterface {
    variant?: 'default' | 'bullet' | 'numbered';
    content: string;
    text: string;
    className?: string;
}


const BoldedContent = ({variant = 'default', content, text, className}: BoldedContentInterface) => {


    if (variant === 'default') {
        return (
            <>
                <strong className={className}> {content} </strong>
                <p className="text-lightblue text-justify"> {text} </p>
            </>
        )
    }


    if (variant === "bullet") {
        return (
            <>
                <li className="ml-5 list-disc list-inside text-darkblue"> 
                    <strong> {content} </strong> 
                </li>
                <p className="text-lightblue text-justify"> {text} </p>
            </>
        )
    }
}
export default BoldedContent