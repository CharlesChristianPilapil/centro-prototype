'use client';
import React, { useState, createContext, useContext } from 'react';

interface TabInterface {
    currentTab?: (activeTab: string) => void;
    defaultTab: string;
    tabs: string[];
    children: React.ReactNode;
}

interface PanelInterface {
    tab: string;
    children: React.ReactNode;
    className?: string;
}

const TabContext = createContext('');

export const Tab = ({
    currentTab,
    defaultTab,
    tabs,
    children,
}: TabInterface) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab);

    return (
        <>
            <TabContext.Provider value={activeTab}>
                <div className='relative py-4'>
                    <div className='flex gap-2'>
                        {tabs.map((item, key) => (
                            <button
                                key={key}
                                className={`
                                    py-[10px] px-[20px] font-semibold text-[20px] leading-[30px] rounded-t-lg
                                    ${
                                        item === activeTab
                                            ? 'text-white bg-blue-700'
                                            : 'text-blue-700 bg-slate-200'
                                    }
                                `}
                                onClick={() => {
                                    setActiveTab(item);
                                    if (currentTab) {
                                        currentTab(item);
                                    }
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className='bg-white p-5 rounded-bl-lg rounded-r-lg'>
                        {children}
                    </div>
                </div>
            </TabContext.Provider>
        </>
    );
};

export const Panel = ({ tab, children, className }: PanelInterface) => {
    const activeTab = useContext(TabContext);
    return (
        <>
            <div
                className={`
                    ${
                        activeTab.toLocaleLowerCase() ===
                        tab.toLocaleLowerCase()
                            ? 'block'
                            : 'hidden'
                    }
                    ${className}
                `}
            >
                {children}
            </div>
        </>
    );
};
