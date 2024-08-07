interface SVGObject {
    name: string;
    svg: string;
}

export const Icons: SVGObject[] = [
    {
        name: 'right-arrow',
        svg: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="24" height="24" fill="url(#pattern0_211_124)"/>
            <defs>
            <pattern id="pattern0_211_124" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_211_124" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_211_124" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO3cPUoDYRRG4UEQV2NjZ6GSqAj+bEBsrWzcnI2L0NbeRgQridHGI8JIJEyKQMi9H/c8CxheOEwymRnSdZIkSZIkSZIkSZIkSZIkSVoxYBu4B+6AnVUfX0sCHph5B/aWPYZWCHj+F8Qo0YDruSB/Ufajt5UF3ALfc1EmwCh6W1ksjjKO3lYWRskHo+SDUZqKchi9rSyMkg9GaSrKUfS2shiO8mGUQEZJCM+UfBZE+QTOoreVhVHyMUpbUc6jt5WFUZqJ8gVcdBkAV8DrwOPRaqbASXSMzf5XrGa3WQ4ig2z1I5QhSB/lEnjpB1U2Df/IKvylPs/L3wjGaCOG97XWzRj5Y/xe6h9HbyuHxTF8pLtuxkgEz4z0MSZ+TOWK4VuM62aMNmKMo7eVgzHywBh5YIw8MEYTMUbR28rBGHkANwNnhn8cEPh2zGQghv93EhRkA3gzRiLAKfAEPAK70XskSZIkSZIkSZIkSZIkSZK6cD+4pa0FeKE3zwAAAABJRU5ErkJggg=="/>
            </defs>
        </svg>`,
    },
];