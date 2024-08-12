'use client';

import Button from "@/components/Button"
import DiscoverAccordion from "@/components/page-discover/accordion"
import { useRouter } from "next/navigation"

const FaqsPage = () => {

    const router = useRouter()

    return (
        <>
            <main className="container">
                <Button
                    isRounded
                    className="my-5 py-2 px-3 border border-lightblue text-lightblue hover:bg-lightblue/10"
                    onClick={() => router.push('/discover')}
                >
                    Back to Discover
                </Button>
                <div className="mb-5 mt-10 flex flex-col gap-5 items-center justify-center">
                    <h1 className="text-3xl text-center font-bold text-darkblue"> Frequently Asked Questions </h1>
                    <div className="h-[1px] w-[100px] bg-gray/80" />
                </div>
                <DiscoverAccordion />
            </main>
        </>
    )
}
export default FaqsPage