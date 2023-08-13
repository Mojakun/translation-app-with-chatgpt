import { post } from "./post";

type TranslateRequest = {
  text: string;
};
type TranslateResponse = {
  translatedText: string;
};
export const apiClient = {
  translate: (text: string) =>
    post<TranslateRequest, TranslateResponse>("/api/translate", { text }),
};
