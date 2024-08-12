'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { articles } from "@/constants/discover";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const SingleArticlePage = () => {

    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get('title');
    const article = articles.find(e => e.id === id);
    const otherArticles = articles.filter(e => e.id !== id);

    const Article = article?.fullArticle;

    return (
        <>

            <Button
                isRounded
                className="my-5 py-2 px-3 border border-lightblue text-lightblue hover:bg-lightblue/10"
                onClick={() => router.push('/discover')}
            >
                Back to Discover
            </Button>
            <section className="flex flex-col gap-5 mb-24 lg:flex-row">
                <article className="flex flex-col gap-5 border-b border-darkgray/30 pb-5 lg:border-b-0 lg:border-r lg:pr-5 lg:pb-0">
                {Article && <Article />}
                {!Article && (
                    <>                
                        <h1 className="text-3xl font-bold text-darkblue max-w-[600px]"> {article?.title} </h1>
                        <p className="text-lightblue"> {article?.date} | {article?.author} </p>
                        <div>
                            <Image 
                                src={article?.image || `${article?.image}`}
                                alt={article?.title || `${article?.title}`}
                                width={500}
                                height={500}
                                className="w-full"
                            />
                        </div>
                        <p className="text-lightblue whitespace-pre-line"> {article?.article} </p>
                    </>
                )}
                </article>
                <div className="lg:w-[400px] flex-shrink-0  ">
                    <h1 className="text-3xl text-darkblue mb-5"> Recent Posts </h1>
                    <ul className="flex flex-col gap-5">
                        {otherArticles.map((e, index) => (
                            <li key={index} className="hover:bg-lightblue/10"> 
                                <Link href={`article?title=${e.id}`}>  
                                    <article className="flex gap-5">
                                        <div className="h-[110px] w-[110px] bg-black flex-shrink-0 relative">
                                            <Image
                                                src={e.image}
                                                alt={e.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="py-1">
                                            <h1 className="font-bold text-darkblue"> {e.title} </h1>
                                            <p className="text-lightblue"> {e.date} </p>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SingleArticlePage