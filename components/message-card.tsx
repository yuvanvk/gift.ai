export const MessageCard = ({ type, message }: { type: "ai" | "user", message: string }) => {
    return (<span className="text-sm px-3 py-2 font-sans bg-neutral-200 rounded-xl">
        {message}
    </span>)
}