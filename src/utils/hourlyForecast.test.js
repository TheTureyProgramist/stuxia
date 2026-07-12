import { getHourlyForecastDayGroups } from "./hourlyForecast";

describe("getHourlyForecastDayGroups", () => {
  it("groups hourly entries into day buckets with date labels", () => {
    const hourly = Array.from({ length: 48 }, (_, index) => ({
      time: `${index}:00`,
      dateLabel: index < 24 ? "09.20" : "09.21",
    }));

    const groups = getHourlyForecastDayGroups(hourly);

    expect(groups).toHaveLength(2);
    expect(groups[0].label).toBe("09.20");
    expect(groups[0].items).toHaveLength(24);
    expect(groups[1].label).toBe("09.21");
    expect(groups[1].items).toHaveLength(24);
  });

  it("returns an empty list for empty data", () => {
    expect(getHourlyForecastDayGroups([])).toEqual([]);
  });
});
