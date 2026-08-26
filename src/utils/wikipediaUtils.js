export const buildWikipediaSearchUrl = (query) =>
  `https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;

export const parseWikipediaSnippet = (snippet = "") =>
  snippet
    .replace(/<span class="searchmatch">/g, "")
    .replace(/<\/span>/g, "")
    .trim() || "Без опису";
