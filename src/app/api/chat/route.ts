import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Load site content once
const contentPath = path.join(process.cwd(), "src/data/siteContent.json");
const siteData: { id: number; text: string }[] = JSON.parse(
  fs.readFileSync(contentPath, "utf8")
);

// Simple word count vectorizer
function vectorize(text: string) {
  const words = text.toLowerCase().split(/\W+/).filter(Boolean);
  const freq: Record<string, number> = {};
  words.forEach((w) => (freq[w] = (freq[w] || 0) + 1));
  return freq;
}

// Cosine similarity between two frequency vectors
function cosineSim(a: Record<string, number>, b: Record<string, number>) {
  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0,
    magA = 0,
    magB = 0;
  allKeys.forEach((k) => {
    const valA = a[k] || 0;
    const valB = b[k] || 0;
    dot += valA * valB;
    magA += valA * valA;
    magB += valB * valB;
  });
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message || message.trim() === "") {
    return NextResponse.json({ answer: "Please ask a question." });
  }

  const queryVec = vectorize(message);

  // Rank content by similarity
  const ranked = siteData
    .map((item) => ({
      ...item,
      similarity: cosineSim(vectorize(item.text), queryVec),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 10); // top 10

  // If no relevant content
  if (ranked.length === 0 || ranked[0].similarity === 0) {
    return NextResponse.json({
      answer:
        "Sorry, I could not find an answer in the site content. Try rephrasing your question.",
    });
  }

  // Pick a random one from top 3 (or fewer if less entries)
  const topN = Math.min(10, ranked.length);
  const randomIndex = Math.floor(Math.random() * topN);
  const answer = ranked[randomIndex].text;

  return NextResponse.json({ answer });
}
