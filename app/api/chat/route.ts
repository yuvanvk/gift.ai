import ai from "@/lib/gemini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userMessage } = await req.json();
  
    const reponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: userMessage,
        config: {
            systemInstruction: "You are a gift-recommendation assistant. Always provide the top 5 most relevant, personalized gift suggestions in markdown format, based on the user’s description, asking clarifying questions only when needed."
        }
    })

    console.log(reponse.text);

    return NextResponse.json({
        reponse: reponse.text
    })
    
}

