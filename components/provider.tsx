"use client";

import {
  Message,
  MessageContext,

} from "@/context/MessageContext";
import { useState } from "react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <MessageContext value={{ messages, setMessages }}>
      {children}
    </MessageContext>
  );
};
