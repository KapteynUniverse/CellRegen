export function upperCaseWithoutSymbol(text: string, symbol: string): string {
  return text
    .split(symbol)
    .filter(Boolean) // removes empty strings
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
