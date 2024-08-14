import Header from "@/components/page-discover/header";
import { ReactNode } from "react";


const DiscoverLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}
export default DiscoverLayout