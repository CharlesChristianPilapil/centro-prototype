import { 
    FacebookIcon, 
    FacebookShareButton,
    TwitterShareButton,
    XIcon, 
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
} from "react-share";

interface urlInterface {
    shareURL: string;
}

const ShareUrl = ({shareURL}: urlInterface) => {
  return (
    <div className="flex flex-col gap-2 mt-10">
        <strong className="text-darkgray"> Share this post: </strong>
        <div className="flex gap-2">
            <FacebookShareButton url={shareURL} className="overflow-hidden grid place-items-center rounded-full">
                <FacebookIcon className="w-[50px] h-[50px] hover:opacity-80" />
            </FacebookShareButton>
            <TwitterShareButton url={shareURL} className="overflow-hidden grid place-items-center rounded-full">
                <XIcon className="w-[50px] h-[50px] hover:opacity-80" />
            </TwitterShareButton>
            <FacebookMessengerShareButton url={shareURL} appId={shareURL} className="overflow-hidden grid place-items-center rounded-full">
                <FacebookMessengerIcon className="w-[50px] h-[50px] hover:opacity-80"/>
            </FacebookMessengerShareButton>
        </div>
    </div>
  )
}
export default ShareUrl