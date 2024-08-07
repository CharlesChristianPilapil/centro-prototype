interface Props {
  y?: number;
  x?: number;
  delay?: number;
  delayChildren?: number;
  staggerChildren?: number;
  type?: 'spring' | 'tween' | 'inertia' | 'keyframes' | 'just';
}

export const singleElement = ({ x, y, delay, type = 'spring' }: Props) => {
  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
      },
    },
  };
};

export const staggerChild = ({ delayChildren, staggerChildren }: Props) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
};

export const staggerItem = ({ x, y }: Props) => {
  return {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

console.log('Sample');
