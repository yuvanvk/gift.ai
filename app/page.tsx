"use client"
import { MessageCard } from "@/components/message-card";
import { AIMessageInput } from "@/components/ui/ai-input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([{
    id: "1",
    message: "fhdfdjfg",
    type: "ai"
  }, {
    id: "2",
    message: "ojfdjfdjf",
    type: "user"
  }]);

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <ScrollArea className="h-full w-full relative my-3 flex flex-col">
        {messages.map((message: any) => {
          return <div key={message.id} className={cn(`flex ${message.type === "ai" ? "justify-start" : "justify-end"}`)}>
              <MessageCard message={message.message} type={message.type}/>
          </div>
        })}
      </ScrollArea>
      <AIMessageInput />

    </div>
  );
}
