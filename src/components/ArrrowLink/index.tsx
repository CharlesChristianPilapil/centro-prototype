import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { staggerItem } from "@/constants/motion";
import Icon from "../Icon";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
}

const ArrowLink = ({ href, children }: ArrowLinkProps) => {
  const MotionLink = motion(Link);

  return (
    <MotionLink
      href={href}
      className="font-semibold w-fit flex items-center gap-4 group"
      variants={staggerItem({ x: -20, y: 20 })}
    >
      <p> {children} </p>
      <Icon name="right-arrow" />
    </MotionLink>
  );
};

export default ArrowLink;
