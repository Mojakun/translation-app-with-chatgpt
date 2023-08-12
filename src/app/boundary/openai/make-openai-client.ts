import { openaiApiKey } from "@/app/env/openai-api-key";
import { Configuration, OpenAIApi } from "openai";

export function makeOpenaiClient() {
  const configuration = new Configuration({
    apiKey: openaiApiKey,
  });
  return new OpenAIApi(configuration);
}
