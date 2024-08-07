import { IIcon } from '@/util/interface';

const SearchIconWhite = ({
    height = '38',
    width = '36',
    fill = '#0c5acb',
}: IIcon) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox='0 0 36 38'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <rect width='36' height='38' fill='url(#pattern0_624_1350)' />
                <defs>
                    <pattern
                        id='pattern0_624_1350'
                        patternContentUnits='objectBoundingBox'
                        width='1'
                        height='1'
                    >
                        <use
                            xlinkHref='#image0_624_1350'
                            transform='matrix(0.0111111 0 0 0.0105263 0 0.0263158)'
                        />
                    </pattern>
                    <image
                        id='image0_624_1350'
                        width='90'
                        height='90'
                        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0klEQVR4nO2cS49URRSADyaOAsOCEV9bY3Qh0URR1GhkQUATDejvmIHZKa4MMdENOAO6NQSfTGKMJhhjCKgRH6wV3KBCEHGA2bhgRuJ85qQPptPeqnt76Ln16PqS3nTf1D11uu6pU+dxRQqFQqFQKBQKhUKh8H+A1cBWYBdwAPgeOA3MAQv2mbPvvrNr9NotwKqKIQvXAG4DJoGvTZFLZcHG2Klj/neDYQd4EvgEuMrg+dvGfkKGFeAp4Cva40v9U2VYAO4ADgKLhGEGuF1yBnjBNrHQzAHbJTeAEWC6z1V8HngPmDBv4m5gLXCjfdbad/rbDrv2jz7GV1ne0LEkB4BR4IuGk58FpoCHruN+G+xPvdjwnp+rjJIywC3AiQaTPQOMAysHeO+V9jScbXD/H1RWSRE9OADfNnC/ppdzRZnCXwHma2Q5kdzKNptcZy5+Au5rUab1wMkGZiQdm22r1McHIY7KdI726t752CspADxX4128CdwQUL4VwB6PfCr785LAYcTnJ++TSAD2e+S8HHWcBHinxlwEW8m9qCw1ZuSARBy7cJmMH2MMX9Lx8U85ZF6MMhjlCRDNt+ld9Atwvycse1RiAnjM8wjulsgBXvPIH8+qtpiv68Q3sNPeMrt95xxz+FgiyozoCa+KcUkEOtmdKnRut8Ys4GwKq7knZOAKRE1IaCw/V8WUJAawzzGXYzHYNteO/aAkBvCwx3MK93Ra0L2K85IgdI7nFxxz2hxSsJcdQr0riULnBFvFiyGF0sKVODePJWL1IFW8LaGwKqEqtkiiAE875nQ8pFC/OoS6SxKFTsK3il9CCqXhxCrGJO08ZxUXQwrlcu1GJFHopOGqmA8pVI6Kvskxp4WQQuVoOtY55nQ5pFDDtBmeidG92yqJAjzjmNM3MR5Ydkii4I5GHgwplLYzVPG+JArwoWNOu0IKpX0mVWhgZoXkFVTaFDpY7nLxNkhiABs9WZbVsQb+pyUxcBfVHIk52jUbYy1HzdN5KdrcZ01ydiKT5OydEnm5wdkUVjWdlNzvjjkckljQIhPcvCqRA7yeRAGNYn18rsTmeokU4AGP5xR+E3R0wLqKHE8Gd48qANYAPztk1rk8KjFijZouZiIs2/0oubJdRTtSawrR90skAG955NSKpXUSM8CzGbRWbJcUsI5UaszIaCCb7DMX6TQLKdZCrK1kPk5pEXjL3oVr4+vmsKazJLEj7fGGDZ1rllmOJg2d3egiuVkSS91r+28d5yxmsmrACp70nPiyW9mjDcxI926vpbOPLCWebRvdRovCuQJEWStbbfbePl8jccEKDndamdY99uqIEfuMAffab5OWGfmzj/EXTabDWSlbAbZ5ShTaRJ+cbV11HFkqe8w2wH8Iw0xvT4o9Ia4IZJobZE/E7yjtccQXu8h2ZV8DeFxbzDzJg+tBxzzUNNSZvbK7SrH0jTHH+vR5e7lqq3d8KZmRoVB2z1tjNgMvaaW9vcnmtG2kC7ZSNXj1m1YQWdRQa0w2DSIc21DZn2Wh7NBkvUHGRlF2+8r+tKzsFijKbpGi7BYpym4Rc/3UtSuuXyTKTu7tDqkq+68Ua8RTVPaVmOpYclZ2uCb9zJU9ZebiisVn0npzb0pYzrLY5UKhUCgUCoVCQZaXfwHTxUWk6obW8wAAAABJRU5ErkJggg=='
                    />
                </defs>
            </svg>
        </>
    );
};

export default SearchIconWhite;
