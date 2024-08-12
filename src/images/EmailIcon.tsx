import { IIcon } from '@/util/interface';

const EmailIcon = ({ height = '25', width = '25', className }: IIcon) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            className={className}
        >
            <rect width='25' height='25' fill='url(#pattern0_545_9821)' />
            <defs>
                <pattern
                    id='pattern0_545_9821'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use xlinkHref='#image0_545_9821' transform='scale(0.01)' />
                </pattern>
                <image
                    id='image0_545_9821'
                    width='100'
                    height='100'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoElEQVR4nO2dSYgeRRTHfxOXGDEYt0RFjaKiohIXXAIKSrxNTmJcxyiixps3BVHEm3oTJpgR40FcIFePiuIWUdwwLnGFKBIVHcHJGEcz80nha/kI6f66eqq7q6v/P3iXGaZe1ft3db9aB4QQQgghhBBCCCGEEEIIIYQPq4ALgfXAhsRtvbXVtTkqXKUeB74GBj21r4DHgDVtCrEaeBZYiCAgg0jMxWIbcEbTYrguOxtBAAaR2l5goikxHlavoGxveahuMe6I4OkbdMw21SXGFcDfJSuxB5hO3PaUjMUcsDa0GEuAD0c4fsO+LSvoD0dZm98cEZv3gbGQjicKnP1lr7K+c6fFIi9ON4V0tr3gw3VtSEcd57qChOetUE6OB+ZznDwVyklCbM2J1XyoUf1tBb3jlBAOEuPUgl5ya6hxR96HShyYvAQoyLhkKqfw50IUnigv5MRsS4jCt+UUvjlE4YmyOSdmLpa1CTIZovBEmWxDkFd6NggsywqLTeOCOPsNuB9YFsJRxzkUuBv4uSBetQuS2Q9WmYPoH0ts+uTbEnFqTJDMPrPK9YVrgI884tO4IJltt9nhVLkEeLVCXFoTJLOXgDNJh9WLXLZuXZCBraG4weUJdJdjgUdHzOa2Lsj3tvhStjIzwCPAcrrDcqvzjEc75yw2jQsyaZOLUwWzwQeyXy1VXkq8HGJZ4+6KO04m2x6pn2ffC5/uu8sa7dLGWBizLNF3j9nLwMVD5bQuyHAa+IFnY3YA47TPOpvB9qn7pzlpfjSCDD9l31R4yi6iec6tkLjsGjEQjkqQ/d/DP1V4D59O/Zxs3799Fb5/h40oO0pBMo6wRvxRIVVeRXiOthR2r0d9Zu1vjizpI2pBMo4DngD+8QjEjAUiRKp8uD0Yv3v4n7eB4ImevjohSMZZVqbPaPcX4F7g4Ar+XBa3Efixwjft/Ipt7JQgGZcCr3kGaaclDGU3nbms7xNPH+8AVy6ybZ0UZDhoH3sG7V3gqoIyLwde9yzz84Az1Z0WZHhN4bsKr5XhQzJnV0hh61jL6bwgGcuA+2wzc9mA7rPNaVs9U9hp81XHamcyggxvYnbZ1Z+eT3vZyb8py/rqIjlBMk6qMHgrSmFdW06jfpIVJOOcRa7LuG/NBTRH8oJkrLVzKGWFeA+4mubpjSDDqfKOAiG+9ByvhKZ3gmSTl/fst4i0237mftcmvRQkY6n1mHURrUL2WpAYkSCRIUEiQ4JEhgSJDAkSGRIkMiRIZEiQyJAgkdGKIDoW3dKx6C05hT8fovBEeTEnZk+GKFxXa0R2tcbGnMIX7IiXKH/5zETd1zM9HcJBYjyTEyu3L2BlKCdvF/QSd2mX+I/rC3qHuwYwGDeP2FZzV0hnHWXTiDOXNxJ4Z+Gok1HuCrsbbLt/XzjG2pz3BhnebDFWx46POY/zFNOJ22zJWLiYXUZN3F6yEjL+j0Htr/MHddU4ZR4493F/gIZwmZUu4ydXDHdc7hYapsqlAanbQoOHVnNZYzvVd0YQkEFL9oXFoOoRuNpYaZuaxyP4l0QbarZxa2udxxqEEEIIIYQQQgghhBBCCCFIjX8BHBUzvaXJ8ZMAAAAASUVORK5CYII='
                />
            </defs>
        </svg>
    );
};

export default EmailIcon;
