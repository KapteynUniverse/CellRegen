"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "bot", text: data.answer }]);
    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <div className="space-y-2 mb-4 h-64 overflow-y-auto" ref={scrollRef}>
        {messages.map((m, i) => (
          <p key={i} className={m.role === "user" ? "text-blue-500" : ""}>
            <strong>{m.role === "user" ? "You:" : "Bot:"}</strong> {m.text}
          </p>
        ))}
      </div>
      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about our website..."
      />
      <button
        onClick={sendMessage}
        className="mt-2 px-4 py-2 bg-blue-500 text-white"
      >
        Send
      </button>
    </div>
  );
}
