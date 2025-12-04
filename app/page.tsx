"use client"
import { MessageCard } from "@/components/message-card";
import { AIMessageInput } from "@/components/ui/ai-input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageContext } from "@/context/MessageContext";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";

export default function Home() {
  const { messages, setMessages } = useContext(MessageContext);

  
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <ScrollArea className="h-full w-full relative my-3 flex flex-col">
        {messages && messages.map((message: any) => {
          return <div key={message.id} className={cn(`flex ${message.type === "ai" ? "justify-start" : "justify-end"}`)}>
              <MessageCard message={message.message} />
          </div>
        })}
      </ScrollArea>
      <AIMessageInput />

    </div>
  );
}
