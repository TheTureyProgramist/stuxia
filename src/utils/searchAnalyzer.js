import { findCityInDatabase } from "./citiesDatabase";

/**
 * Аналізатор пошуку під капотом.
 * Аналізує URL query params (?q=погода+конотоп, ?city=конотоп, ?search=... тощо) та хеш.
 */
export const analyzeSearchQuery = (searchString = "", hashString = "") => {
  try {
    const searchParams = new URLSearchParams(searchString || window.location.search);
    
    // Перевіряємо різні поширені ключі пошуку
    let queryParam =
      searchParams.get("q") ||
      searchParams.get("search") ||
      searchParams.get("city") ||
      searchParams.get("query") ||
      searchParams.get("pohoda") ||
      searchParams.get("s");

    // Перевірка у хеші URL (наприклад: #/?q=погода+конотоп)
    if (!queryParam && hashString) {
      const hashQueryIndex = hashString.indexOf("?");
      if (hashQueryIndex !== -1) {
        const hashParams = new URLSearchParams(hashString.substring(hashQueryIndex));
        queryParam =
          hashParams.get("q") ||
          hashParams.get("search") ||
          hashParams.get("city") ||
          hashParams.get("query") ||
          hashParams.get("pohoda") ||
          hashParams.get("s");
      }
    }

    if (!queryParam) {
      return { isSearchEntry: false, query: "", cityData: null };
    }

    const decodedQuery = decodeURIComponent(queryParam).trim();
    if (!decodedQuery) {
      return { isSearchEntry: false, query: "", cityData: null };
    }

    // Спроба знайти місто в підкапотній базі 40 міст
    const dbCity = findCityInDatabase(decodedQuery);

    if (dbCity) {
      return {
        isSearchEntry: true,
        query: decodedQuery,
        cityName: dbCity.name,
        cityData: {
          id: `search-${dbCity.name.toLowerCase()}`,
          name: dbCity.name,
          fullName: dbCity.fullName,
          lat: dbCity.lat,
          lon: dbCity.lon,
        },
      };
    }

    // Якщо міста немає у базі 40 міст, очищаємо назву від слова "погода"
    const cleanedCityName = decodedQuery
      .replace(/^(погода\s+(в|у)?\s*)/i, "")
      .replace(/(\s*погода)$/i, "")
      .trim();

    const formattedName = cleanedCityName.charAt(0).toUpperCase() + cleanedCityName.slice(1);

    return {
      isSearchEntry: true,
      query: decodedQuery,
      cityName: formattedName,
      cityData: {
        id: `search-${formattedName.toLowerCase()}`,
        name: formattedName,
        fullName: `${formattedName} (UA)`,
        lat: null, // Потребує Geocoding API якщо немає у 40 містах
        lon: null,
      },
    };
  } catch (error) {
    console.error("Помилка аналізу пошукового запиту:", error);
    return { isSearchEntry: false, query: "", cityData: null };
  }
};
