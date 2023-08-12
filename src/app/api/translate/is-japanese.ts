export function isJapanese(text: string): boolean {
  return text.match(/[\u3040-\u30FF]/) ? true : false;
}
