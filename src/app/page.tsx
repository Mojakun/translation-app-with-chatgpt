import { Configuration, OpenAIApi } from "openai";
import Home from "./client/home/home";
import { openaiApiKey } from "./env/openai-api-key";

export default function Top() {
  return (
    <main>
      <Home />
    </main>
  );
}
