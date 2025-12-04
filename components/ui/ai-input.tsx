"use client";

import { Send } from "lucide-react"
import { Input } from "./input"
import { useState } from "react"

export const AIMessageInput = () => {
    const [userInput, setUserInput] = useState("");
    

    const handleUserInputChange = (e: any) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        
    }

    return <div className="max-w-4xl w-full flex items-center gap-2 px-4 py-1 rounded-full absolute bottom-5 left-1/2 -translate-x-1/2 border focus:ring-0 focus:ring-offset-0 outline-none">
        <Input onChange={handleUserInputChange} className="border-none shadow-none"/>
        <Send onClick={handleSubmit} size={20}/>
    </div>
}