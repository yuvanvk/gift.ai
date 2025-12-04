"use client";

import { Send } from "lucide-react";
import { Input } from "./input";
import { useContext, useState } from "react";
import { MessageContext } from "@/context/MessageContext";
import axios from "axios";

export const AIMessageInput = () => {
  const [userInput, setUserInput] = useState("");

  const { messages, setMessages } = useContext(MessageContext);
  console.log(messages);

  const handleUserInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const userMessage = {
        id: Math.random().toString(),
        message: userInput,
        type: "user" as const,
      };

      setMessages((p) => [...p, userMessage]);

      const aiMessage = {
        id: Math.random().toString(),
        message: "Thinking...",
        type: "ai" as const,
      };

      setMessages((p) => [...p, aiMessage]);

      const response = await axios.post("/api/chat", {
        userMessage: userInput,
      });

      if (response.status === 200) {
        const aiResponse = response.data.reponse!;

        setMessages((p) => p.map((msg) => 
            msg.type === "ai" && msg.message === "Thinking..." ? { ...msg, message: aiResponse } : msg
        ))
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl w-full flex items-center gap-2 px-4 py-1 rounded-full absolute bottom-5 left-1/2 -translate-x-1/2 border focus:ring-0 focus:ring-offset-0 outline-none bg-neutral-800">
      <Input
        onChange={handleUserInputChange}
        className="border-none shadow-md"
      />
      <Send onClick={handleSubmit} size={20} />
    </div>
  );
};
