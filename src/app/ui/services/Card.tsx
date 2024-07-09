export const Card: React.FC<any> = ({
  children,
  height,
  width,
  radius,
  style,
}) => {
  return (
    <div
      className={`flex flex-col p-[30px] shadow-xl ${style}`}
      style={{
        height: height,
        width: width,
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
};
