import { ReactNode } from "react"

const ArticleLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className="container">
        {children}
    </main>
  )
}
export default ArticleLayout