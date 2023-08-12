import { makeOpenaiClient } from "@/app/boundary/openai/make-openai-client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Response> {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
  const inputText = req.body.text;

  const openai = makeOpenaiClient();
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: `${inputText}` }],
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
