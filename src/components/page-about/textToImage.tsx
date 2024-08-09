import { ImgToTxt } from "@/constants/about";
import ImageToText from "@/components/ImageToText";

const TextToImageAboutSection = () => {
    return (
        <>
            <section className="mb-24">
                {ImgToTxt.map((e, index) => (
                    <ImageToText 
                        key={index}
                        title={e.title}
                        description={e.description}
                        src={e.image.src}
                        alt={e.image.alt}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </section>
        </>
    );
};


export default TextToImageAboutSection;
