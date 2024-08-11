import DiscoverAccordion from "@/components/page-discover/accordion"

const FaqsPage = () => {

  return (
    <>
        <main className="container">
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