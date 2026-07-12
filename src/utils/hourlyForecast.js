export const HOURLY_DAY_OPTIONS = [1, 2, 3, 5, 7];

export const getHourlyForecastItems = (hourly = [], { days = 1 } = {}) => {
  if (!Array.isArray(hourly)) return [];

  const safeDays = Number(days) > 0 ? Number(days) : 1;
  const maxItems = Math.min(safeDays * 24, hourly.length);

  return hourly.slice(0, maxItems);
};

const formatDayLabel = (dateLabel, index = 0) => {
  if (!dateLabel) return index === 0 ? "Сьогодні" : `День ${index + 1}`;

  const normalized = String(dateLabel).trim();
  const today = new Date();
  const baseDate = new Date(today);
  baseDate.setHours(0, 0, 0, 0);

  const [day, month] = normalized.split(".").map((part) => Number(part));
  if (day && month) {
    const candidate = new Date(today.getFullYear(), month - 1, day);
    const diffDays = Math.round((candidate - baseDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return `${normalized} (Сьогодні)`;
    if (diffDays === 1) return `${normalized} (Завтра)`;
    if (diffDays === 2) return `${normalized} (Післязавтра)`;

    const weekday = candidate.toLocaleDateString("uk", { weekday: "short" });
    return `${normalized} (${weekday})`;
  }

  return normalized;
};

export const getHourlyForecastDayGroups = (hourly = []) => {
  if (!Array.isArray(hourly) || hourly.length === 0) return [];

  const groups = [];
  const byDate = new Map();

  hourly.forEach((item, index) => {
    const label = item?.dateLabel || item?.date || "today";
    if (!byDate.has(label)) {
      byDate.set(label, []);
      groups.push({ label, title: formatDayLabel(label, groups.length), items: [] });
    }
    byDate.get(label).push(item);
  });

  groups.forEach((group) => {
    group.items = byDate.get(group.label) || [];
  });

  return groups;
};
