export function formattedDate(dateString: string) {
  const date = new Date(dateString);
  return {
    display: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    iso: date.toISOString().split("T")[0],
  };
}
