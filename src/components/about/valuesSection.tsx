import { AboutTabs } from "@/constants/about";
import TabItem from "@/components/TabItem";

const ValuesSection = () => {
    return (
        <section className="container mb-24 grid md:grid-cols-2 xl:grid-cols-5">
            {AboutTabs.map((e, index) => (
                <TabItem
                    key={index}
                    icon={e.icon}
                    title={e.title}
                    description={e.description}
                    shade={index % 2 !== 0}
                    button={e.button}
                    hover={index !== 0 && index !== AboutTabs.length - 1}
                    className={`${e.style} gap-2`}
                />
            ))}
        </section>
    );
};

export default ValuesSection;