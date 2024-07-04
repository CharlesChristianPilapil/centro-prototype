import React from "react";
import HomeTab from "./home-tabs";
import { service_tabs } from "@/constants/constants";

const HomeTabsSection = () => {
  return (
    <div className="grid gap-[20px] container -mt-16 mb-20 relative sm:grid-cols-2 lg:grid-cols-4">
      {service_tabs.map((e, index) => (
        <HomeTab
          key={index}
          image={e.icon}
          title={e.title}
          description={e.description}
        />
      ))}
    </div>
  );
};

export default HomeTabsSection;
