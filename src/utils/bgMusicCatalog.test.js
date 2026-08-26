import { BASE_BG_TRACKS, getAvailableTrackCatalog, isBaseBgTrack } from "./bgMusicCatalog";

describe("bgMusicCatalog", () => {
  it("exposes four built-in tracks for instant access", () => {
    expect(BASE_BG_TRACKS).toHaveLength(4);
    expect(BASE_BG_TRACKS.map((track) => track.name)).toEqual([
      "Динофроз",
      "Monody",
      "Unity",
      "Faded",
    ]);
  });

  it("keeps base tracks available even when they are omitted from the UI state", () => {
    const track = BASE_BG_TRACKS[0];
    expect(isBaseBgTrack(track.file)).toBe(true);
    expect(getAvailableTrackCatalog([])).toContainEqual(track);
  });
});
