import React from "react";
import Image from "next/image";

type Tab = {
  image: string;
  title: string;
  description: string;
};

const HomeTab = ({ image, title, description }: Tab) => {
  return (
    <div className="grid gap-4 p-4 bg-base rounded-2xl shadow-lg">
      <Image src={image} alt={title} height={60} width={60} />
      <h1 className="text-2xl text-darkgray font-semibold"> {title} </h1>
      <p className="text-gray"> {description} </p>
    </div>
  );
};

export default HomeTab;
