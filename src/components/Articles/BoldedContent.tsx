interface BoldedContentInterface {
    variant?: 'default' | 'bullet' | 'numbered';
    content: string;
    text?: string;
    className?: string;
}


const BoldedContent = ({variant = 'default', content, text, className}: BoldedContentInterface) => {

    if (variant === 'default') {
        return (
            <>
                <strong className={className}> {content} </strong>
                {text && <p className="text-darkgray/80 md:text-justify"> {text} </p>}
            </>
        )
    }

    if (variant === "bullet") {
        return (
            <>
                <li className="ml-5 list-disc list-inside text-darkgray"> 
                    <strong> {content} </strong> 
                </li>
                <p className="text-darkgray/80 md:text-justify"> {text} </p>
            </>
        )
    }

    if (variant === "numbered") {
        return (
            <li className="ml-5 list-decimal list-inside">
                <p className="text-darkgray/80 md:text-justify inline"> 
                    <strong className="text-darkgray"> {content} </strong>    
                    {text} 
                </p>
            </li>
        )
    }
}
export default BoldedContent