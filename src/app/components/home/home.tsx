"use client";
import { useCallback, useState } from "react";
import { Container } from "../container";
import { Button } from "../button";
import { OpenAIApi } from "openai";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const handlerOnTranslate = useCallback(async () => {
    try {
      const response = await axios.post("/api/translate", { text: input });
      if (response.data && response.data.translatedText) {
        setOutput(response.data.translatedText);
      } else {
        console.error("Error in response:", response.data);
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  }, [input]);
  return (
    <Container>
      <h2>Translation App</h2>
      <textarea
        placeholder="Input text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handlerOnTranslate}>Translate</Button>
      <button onClick={() => navigator.clipboard.writeText(output)}>
        Copy
      </button>
      <textarea placeholder="Translated text" value={output} readOnly />
    </Container>
  );
}
