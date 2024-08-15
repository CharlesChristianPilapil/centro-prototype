import { useEffect, useRef, useState } from 'react';

const useMouseParallax = () => {
    const [mousePosition, setMousePosition] = useState<{
        x: number;
        y: number;
    }>({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const relX = e.pageX - rect.left;
                const relY = e.pageY - rect.top;

                setMousePosition({
                    x:
                        ((relX - containerRef.current.offsetWidth / 2) /
                            containerRef.current.offsetWidth) *
                        0.4, // 0.4 to change the speed of transition
                    y:
                        ((relY - containerRef.current.offsetHeight / 2) /
                            containerRef.current.offsetHeight) *
                        0.4, // 0.4 to change the speed of transition
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const parallaxStyle = (movement: number) => ({
        transform: `translate(${mousePosition.x * movement}px, ${
            mousePosition.y * movement
        }px)`,
    });

    return {
        parallaxStyle,
        imageRef,
        containerRef,
    };
};

export default useMouseParallax;
