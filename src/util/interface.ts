type Data = Record<string, string | any>;

export interface IIcon {
    height?: string;
    width?: string;
    fill?: string;
    isOpen?: boolean;
    className?: string;
}

export interface ICard {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface IHeader {
    title: string;
    description?: string;
    ref?: React.RefObject<HTMLDivElement>;
    parallaxStyle?: any;
}

export interface SVGObject {
    name: string;
    svg: string;
}

export interface dynamicStringObjectInterface {
    e: Data;
}
