export const Card: React.FC<any> = ({
  children,
  height,
  width,
  radius,
  style,
}) => {
  return (
    <div
      className={`flex flex-col h-[${height}] w-[${width}] p-[30px] rounded-[${radius}] shadow-xl ${style}`}
    >
      {children}
    </div>
  );
};
