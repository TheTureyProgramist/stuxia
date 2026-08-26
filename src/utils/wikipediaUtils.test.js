import { buildWikipediaSearchUrl } from "./wikipediaUtils";

describe("buildWikipediaSearchUrl", () => {
  it("encodes a query and uses the Ukrainian Wikipedia API", () => {
    expect(buildWikipediaSearchUrl("Київ погода")).toBe(
      "https://uk.wikipedia.org/w/api.php?action=query&list=search&srsearch=%D0%9A%D0%B8%D1%97%D0%B2%20%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0&format=json&origin=*",
    );
  });
});
