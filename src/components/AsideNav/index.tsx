'use client';

interface AsideInterface {
    show?: boolean;
}

const AsideNav = ({show}: AsideInterface) => {
    return (
        <>
            {show && (
                <aside className="xl:hidden">
                    Aside
                </aside>
            )}
        </>
    )
}

export default AsideNav