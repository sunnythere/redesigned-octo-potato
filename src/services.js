export const getWordCount = async (url) => {
  return await fetch("/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  })
    .then((res) => res.json())
    .then((wordCount) => wordCount);
};
