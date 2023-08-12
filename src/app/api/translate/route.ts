import { makeOpenaiClient } from "@/app/boundary/openai/make-openai-client";
import { NextApiRequest } from "next";
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
    promptText = `Translate this Japanese text to Native English: "${text}"`;
  } else {
    promptText = `Translate this English text to Native Japanese: "${text}"`;
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
