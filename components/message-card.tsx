import ReactMarkDown from "react-markdown";
import remarkGFm from "remark-gfm";
export const MessageCard = ({ message }: { message: string }) => {
  return (
    <span className="text-sm px-3 py-2 font-sans bg-neutral-700 rounded-[10px] my-5 w-fit">
      <ReactMarkDown remarkPlugins={[remarkGFm]}>{message}</ReactMarkDown>
    </span>
  );
};
