import Image from "next/image";
import Icon from "../Icon";

interface MemberTabInterface {
    name: string;
    image: string;
    position: string;
}

const MemberTab = ({
    name,
    image,
    position
}: MemberTabInterface) => {
    return (
        <>
            <article className="group">
                <div className="relative overflow-hidden">
                    <Image 
                        src={image} 
                        alt={name} 
                        height={500} 
                        width={500} 
                        className="w-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute flex flex-col gap-2 justify-center top-0 left-0 h-full w-fit px-2 
                    bg-darkblue/50 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300">
                        <div className="bg-base p-2 sm:p-4 rounded-full hover:bg-base/90">
                            <a href="" className="pointer-events-none">
                                <Icon name="facebook-outline" />
                            </a>
                        </div>
                        <div className="bg-base p-2 sm:p-4 rounded-full  hover:bg-base/90">
                            <a href="" className="pointer-events-none">
                                <Icon name="linkedin-outline" />
                            </a>
                        </div>
                        <div className="bg-base p-2 sm:p-4 rounded-full  hover:bg-base/90">
                            <a href="" className="pointer-events-none">
                                <Icon name="gmail-outline" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <strong className="text-darkblue"> {name} </strong>
                    <p className="text-lightblue text-sm"> {position} </p>
                </div>
            </article>
        </>
    )
}

export default MemberTab;