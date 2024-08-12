interface YouTubeVideoInterface {
    title: string;
    src: string;
}

const YouTubeVideo = ({title, src}: YouTubeVideoInterface) => {
    return (
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <iframe
                className="absolute top-0 right-0 w-full h-full border-0"
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    )
}
export default YouTubeVideo