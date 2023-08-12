"use client";
import { useState } from "react";
import axios from "axios";

const OPENAI_API_URL =
  "https://api.openai.com/v1/engines/davinci-codex/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleTranslate = async () => {
    const promptText = `Translate: "${input}"`;
    try {
      const response = await axios.post(
        OPENAI_API_URL,
        {
          prompt: promptText,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setOutput(response.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setOutput("Translation error.");
    }
  };

  return (
    <div>
      <h2>Translation App</h2>
      <textarea
        placeholder="Input text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <button onClick={() => navigator.clipboard.writeText(output)}>
        Copy
      </button>
      <textarea placeholder="Translated text" value={output} readOnly />
    </div>
  );
}
