import { Icons } from "@/util/icons";

const Icon = ({name, className, rounded = false}: {name: string, className?: string, rounded?: boolean}) => {
    const getSVGByName = (name: string): string => {
        const icon = Icons.find(icon => icon.name === name);
        return icon ? icon.svg : "";
    };

    return (
        <>
            <div className={`${rounded && "rounded-full p-[2px]"} ${className}`} dangerouslySetInnerHTML={{ __html:  getSVGByName(name)}} />
        </>
    )
};

export default Icon;