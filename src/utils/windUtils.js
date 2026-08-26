export const getWindDirectionText = (degrees) => {
  if (degrees === undefined || degrees === null) return "—";
  const val = Math.floor(degrees / 45 + 0.5);
  const arr = [
    "Північний",
    "Північно-східний",
    "Східний",
    "Південно-східний",
    "Південний",
    "Південно-західний",
    "Західний",
    "Північно-західний",
  ];
  return arr[val % 8];
};
