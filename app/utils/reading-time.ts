const spliter = /\s+/;
const wordsPerMinute = 180;

export function getReadingTime(content: string): number {
  const words = content.trim().split(spliter).length;
  return Math.ceil(words / wordsPerMinute);
}
