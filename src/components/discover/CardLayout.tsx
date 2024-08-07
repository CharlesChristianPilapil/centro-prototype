import { ReactNode } from "react";

export const CardLayout: React.FC<{
  children?: ReactNode;
  style?: string;
  title?: string;
  headerColor?: string;
}> = ({ children, style, title, headerColor }) => {
  return (
    <div>
      <p
        className={`h-[30px] w-[100%] bg-[${
          headerColor ? headerColor : "#0c5acb"
        }] rounded-t-[8px] px-[10px] flex items-center text-white`}
      >
        {title}
      </p>
      <div className={`border border-[#ccc] rounded-b-[8px] ${style}`}>
        {children}
      </div>
    </div>
  );
};
