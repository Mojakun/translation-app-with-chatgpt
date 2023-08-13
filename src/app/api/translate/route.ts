import { makeOpenaiClient } from "@/app/boundary/openai/make-openai-client";
import { NextRequest, NextResponse } from "next/server";
import { isJapanese } from "./is-japanese";
import { asString } from "@/utils/assert-string";

export async function POST(req: NextRequest): Promise<Response> {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
  const { text } = await req.json();
  const openai = makeOpenaiClient();

  let promptText;

  if (isJapanese(text)) {
    promptText = `「${text}」Please translate this sentence into native English that would be used in daily life. Please correct any errors in the sentence. No explanations necessary, only the translated sentence.`;
  } else {
    promptText = `「${text}」Please translate this sentence into native Japanese that would be used in daily life. Please correct any errors in the sentence. No explanations necessary, only the translated sentence.`;
  }

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: promptText }],
    });
    const answer = response.data.choices[0].message?.content;
    return NextResponse.json({ translatedText: answer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
