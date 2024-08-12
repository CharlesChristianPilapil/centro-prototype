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

export const AcceditationTab = ({
    currentTab,
    defaultTab,
    tabs,
    children,
}: TabInterface) => {
    const [activeTab, setActiveTab] = useState<string>(defaultTab);

    return (
        <>
            <TabContext.Provider value={activeTab}>
                <div className='relative py-4 grid grid-flow-col'>
                    {tabs.map((item, key) => (
                        <button
                            key={key}
                            className={`
                                    py-[10px] px-[20px] font-semibold text-[20px] leading-[30px] rounded-t-lg
                                    ${
                                        item === activeTab
                                            ? 'text-blue-700'
                                            : 'text-neutral-400'
                                    }
                                            ${
                                                !(item === activeTab) &&
                                                'hover:text-neutral-500'
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
                <div
                    className='bg-white px-5 pb-5 rounded-bl-lg rounded-r-lg'
                    style={{ height: 'calc(100% - 82px)' }}
                >
                    {children}
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
