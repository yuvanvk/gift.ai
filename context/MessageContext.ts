import { createContext, Dispatch, SetStateAction } from "react";

export type MessageContextType = {
    messages: Message[] | null,
    setMessages: Dispatch<SetStateAction<Message[]>>
}

export type Message = {
    id: string,
    message: string,
    type: "ai" | "user"
}

export const MessageContext = createContext<MessageContextType>({
    messages: [],
    setMessages: () => {}
})