import { AIMessageInput } from "@/components/ui/ai-input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <ScrollArea className="h-full w-full"></ScrollArea>
      <AIMessageInput />
    </div>
  );
}
