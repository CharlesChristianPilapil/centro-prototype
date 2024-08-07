interface OverlayInterface {
    className?: string;
}

const Overlay = ({className = 'bg-black/70'}: OverlayInterface) => {
  return <div className={`${className} absolute top-0 left-0 h-full w-full`} />;
};

export default Overlay;
