
interface paragraphInterface {
    text: string;
    className?: string;
}

const Paragraph = ({text, className}: paragraphInterface) => {
  return <p className={`text-lightblue whitespace-pre-line text-justify ${className || ''}`}> {text} </p>
}
export default Paragraph