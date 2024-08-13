import { articles } from "@/constants/discover"
import Link from "next/link"
import Image from "next/image"

const ArticlesList = () => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 mb-24">
        {articles.map((e, index) => (
            <li key={index} className="text-darkblue h-full group">
                <Link href={`/discover/articles/article?title=${e.id}`}>
                    <article className="flex flex-col drop-shadow shadow-md duration-300 transition-all group-hover:bg-darkblue/5 lg:group-hover:-translate-y-2 rounded h-full overflow-hidden">
                        <div>
                            <Image 
                                height={500}
                                width={500}
                                src={e.image}
                                alt={e.title}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col px-5 py-4 gap-4">
                            <p className="text-[12px] text-lightblue"> {e.date} | {e.author} </p>
                            <h1 className="font-bold text-darkgray"> {e.title} </h1>
                            <p className="whitespace-pre-line text-darkgray/80"> 
                                {e.article.length > 100 ? `${e.article.substring(0, 100)}...` : e.article} 
                            </p>
                        </div>
                    </article>
                </Link>    
            </li>
        ))}
    </ul>
  )
}
export default ArticlesList