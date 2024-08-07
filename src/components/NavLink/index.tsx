'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkInterface {
    label?: string;
    href: string;
}

const NavLink = ({label, href}: NavLinkInterface) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <>
            <Link href={href} 
                className={clsx('relative after:bottom-0 after:left-0 after:rounded-md after:transition-all after:duration-200 after:absolute after:h-[2px]  focus:after:w-full',
                {'text-blue-200 after:bg-blue-200 after:w-full pointer-events-none': isActive, 
                'text-white after:bg-white after:w-0 hover:after:w-full': !isActive, 
            })}>
                {label} 
            </Link>
        </>
    )
}

export default NavLink;