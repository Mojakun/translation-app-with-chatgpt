import { asFilledString } from "../../utils/assert-filled-string";

export const openaiApiKey = asFilledString(
  process.env?.NEXT_PUBLIC_OPENAI_API_KEY ?? "",
  "openaiApiKey"
);
