'use client';

import clsx from "clsx";
import Icon from "../Icon";
import Button from "../Button";

interface TabItem {
    icon?: string;
    title?: string;
    description?: string;
    button?: boolean;
    className?: string;
    shade?: boolean;
    hover?: boolean;
}

const TabItem = ({
    icon,
    title,
    description,
    button,
    className,
    shade,
    hover
}: TabItem) => {
    return (
        <>
            <article className={clsx('transition-all duration-300 p-4 flex flex-col', {
                'bg-darkblue/5': shade,
                'hover:bg-darkblue/15': hover,
            }, className)}>
                {icon && <Icon name={icon} />}
                <strong className={clsx('text-darkblue', {
                    'text-3xl': !icon,
                })}> {title} </strong>
                <p className="text-lightblue"> {description} </p>
                {button && (
                    <Button 
                        className="flex items-center gap-2 border w-fit hover:bg-darkblue/10 border-darkblue px-3 py-2 text-darkblue"
                        variant="transparent"
                        onClick={() => console.log('lets talk clicked..')}
                    >
                        <p> Let&apos;s Talk </p>
                        <Icon name="arrow-right-blue" />
                    </Button>
                )}
            </article>
        </>
    )
}

export default TabItem;