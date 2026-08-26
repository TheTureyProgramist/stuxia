import React, { useState, useRef, useMemo, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import songAiKnowledge from "../MusicPhoto/songAiKnowledge.json";
import turkeysAudio from "../../mp3/turkeys.mp3";
import { assetMap } from "../MusicPhoto/MusicPhoto.assets";
import { TbMusicStar } from "react-icons/tb";
import {
  BASE_BG_TRACKS,
  BG_CACHE_NAME,
  isBaseBgTrack,
  getStoredSoftDeletedIds,
  persistSoftDeletedIds,
} from "../../utils/bgMusicCatalog";
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const itemFadeIn = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: ${(props) => (props.$isClosing ? fadeOut : "none")} 0.5s ease-out
    forwards;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#050505cf" : "#ffffffd3")};
  color: ${(props) => (props.$isDarkMode ? "white" : "#0b0b0b")};
  padding: 12px;
  border-radius: 12px;
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(16px);
  border: 2px solid #ffb36c;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TabHeader = styled.div`
  display: flex;
  gap: 3px;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)")};
  padding-bottom: 6px;
`;

const TabButton = styled.button`
  background: ${(props) => (props.$active ? "#ffb36c" : "transparent")};
  color: ${(props) => (props.$active ? "#2a2a2a" : props.$isDarkMode ? "white" : "#2a2a2a")};
  border: 2px solid ${(props) => (props.$active ? "#ffb36c" : props.$isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)")};
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 3px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #ff7b00;
  &:hover {
    color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  }
`;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const SectionContainer = styled.div`
  padding: 2px;
  background: ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.04)")};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const SectionLabel = styled.label`
  font-size: 12px;
  color: #ffb36c;
  font-weight: bold;
  display: block;
`;

const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)")};
  border-radius: 7px;
  label {
    font-size: 13px;
    color: ${(props) => (props.$isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};
  }
`;

const ScrollSection = styled.div`
  max-height: 220px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const TrackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
  padding: 4px 0;
  border-bottom: 1px solid
    ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)")};
  &:last-child {
    border-bottom: none;
  }
`;

const eqBarAnim = keyframes`
  0%, 100% { height: 3px; }
  50% { height: 12px; }
`;

const EqualizerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
  height: 14px;
  margin-left: 8px;
`;

const EqBar = styled.div`
  width: 2px;
  background: #ffb36c;
  border-radius: 1px;
  animation: ${eqBarAnim} ${(props) => props.$dur}s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

const Equalizer = () => (
  <EqualizerContainer>
    <EqBar $dur={0.6} $delay={0} />
    <EqBar $dur={0.8} $delay={0.2} />
    <EqBar $dur={0.7} $delay={0.1} />
  </EqualizerContainer>
);

const WordCounter = styled.span`
  font-size: 12px;
  color: ${(props) => (props.$error ? "#ff4d4d" : props.$isDarkMode ? "#f9f9f9" : "#030303")};
  min-width: 30px;
  text-align: right;
`;

const Switch = styled.div`
  position: relative;
  width: 34px;
  height: 20px;
  background: ${(props) => (props.$active ? "#ffb36c" : "#555")};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.$active ? "16px" : "2px")};
    transition: 0.3s;
  }
`;

const ListButton = styled.button`
  background: ${(props) => (props.$active ? "#ffb36c" : props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)")};
  color: ${(props) => (props.$active ? "#2a2a2a" : props.$isDarkMode ? "white" : "#2a2a2a")};
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
  min-width: auto;
  font-size: 11px;
  animation: ${itemFadeIn} 0.4s ease-out both;
  animation-delay: ${(props) => (props.$index % 10) * 0.05}s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 6px;
    height: 20px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ActionButton = styled.button`
  color: #2a2a2a;
  background: rgb(251, 226, 0);
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`;

const SmallInput = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => (props.$isDarkMode ? "white" : "#010101")};
  padding: 6px;
  border-radius: 4px;
  font-size: 13px;
  flex: 1;
  box-sizing: border-box;
  min-width: 0;
  &::placeholder {
    color: ${(props) => (props.$isDarkMode ? "white" : "#010101")};
  }
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.02)")};
  border: 1px solid #ffb36c;
  border-radius: 4px;
  padding: 3px 6px;
  @media (max-width: 480px) {
    gap: 3px;
    padding: 1px 3px;
  }
`;

const InlineButton = styled.button`
  background: ${(props) => (props.$isDarkMode ? "rgba(255,179,108,0.2)" : "rgba(255,179,108,0.15)")};
  border: 1px solid #ffb36c;
  color: #ffb36c;
  padding: 3px 6px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  transition: all 0.2s;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: #ffb36c;
    color: #2a2a2a;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 2px 4px;
    height: 20px;
  }
`;

const RepeatValue = styled.span`
  font-size: 11px;
  font-weight: bold;
  min-width: 12px;
  text-align: center;
  color: ${(props) => (props.$isDarkMode ? "white" : "#2a2a2a")};
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)")};
  padding: 2px 6px;
  border-radius: 6px;

  @media (max-width: 480px) {
    gap: 2px;
    padding: 1px 4px;
    scale: 0.9;
    transform-origin: right center;
  }
`;

const SearchBox = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ffb36c;
  background: ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.3)" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#333")};
  font-size: 12px;
  margin-bottom: 3px;
  outline: none;
`;

const SortSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ffb36c;
  background: ${(props) => (props.$isDarkMode ? "rgb(0, 0, 0)" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#030303")};
  font-size: 12px;
  outline: none;
  cursor: pointer;
`;

const OtherOptionsModal = ({
  sfxVolume = 0.2,
  setSfxVolume,
  onClose,
  bgMusicEnabled,
  setBgMusicEnabled,
  autoMuteBgMusic,
  setAutoMuteBgMusic,
  lockFiltersInFs,
  setLockFiltersInFs,
  bgMusicSource,
  setBgMusicSource,
  bgMusicVolume,
  setBgMusicVolume,
  bgMusicSpeed,
  setBgMusicSpeed,
  customBgTracks,
  setCustomBgTracks,
  bgMusicMode,
  setBgMusicMode,
  bgMusicShuffle,
  setBgMusicShuffle,
  libraryBgSettings = {},
  setLibraryBgSettings = () => {},
  setActiveBgTrackId = () => {},
  onResetBgPosition = () => {},
  isDarkMode,
  bgAudioRef,
  bgAudioRef2,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("custom"); // "custom" | "library"
  const fileInputRef = useRef(null);
  const activeSlotRef = useRef(null);
  const [libSearch, setLibSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [downloadedTracks, setDownloadedTracks] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = window.localStorage.getItem("bg_music_downloaded_tracks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [softDeletedIds, setSoftDeletedIds] = useState(() => getStoredSoftDeletedIds());
  const [downloadProgress, setDownloadProgress] = useState({});

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "bg_music_downloaded_tracks",
        JSON.stringify(downloadedTracks),
      );
      persistSoftDeletedIds(softDeletedIds);
    }
  }, [downloadedTracks, softDeletedIds]);

  const ensureTrackInLibrary = (trackId, nextFile) => {
    setDownloadedTracks((prev) => {
      const exists = prev.some(
        (entry) => String(entry.id) === String(trackId) && entry.file === nextFile,
      );
      if (exists) return prev;
      return [...prev, { id: trackId, file: nextFile, name: "" }];
    });
    setSoftDeletedIds((prev) => prev.filter((id) => String(id) !== String(trackId)));
  };

  const getTrackStatus = (track) => {
    const file = track.file;
    const isBase = isBaseBgTrack(file);
    const downloaded = isBase || downloadedTracks.some((item) => item.file === file && String(item.id) === String(track.id));
    const softDeleted = softDeletedIds.includes(String(track.id));
    return {
      isBase,
      downloaded: downloaded && !softDeleted,
      softDeleted,
      available: isBase || (downloaded && !softDeleted),
    };
  };

  const handleCachedDownload = async (track) => {
    if (!("caches" in window)) {
      setBgMusicSource(track.file);
      setActiveBgTrackId(track.id);
      ensureTrackInLibrary(track.id, track.file);
      return;
    }

    try {
      const cache = await caches.open(BG_CACHE_NAME);
      const cached = await cache.match(track.file);
      if (cached) {
        setBgMusicSource(track.file);
        setActiveBgTrackId(track.id);
        ensureTrackInLibrary(track.id, track.file);
        setDownloadProgress((prev) => ({ ...prev, [track.id]: 100 }));
        setSoftDeletedIds((prev) => prev.filter((id) => String(id) !== String(track.id)));
        return;
      }

      setDownloadProgress((prev) => ({ ...prev, [track.id]: 0 }));
      const response = await fetch(track.file);
      if (!response.ok) throw new Error("Fetch failed");

      const reader = response.body?.getReader();
      if (!reader) {
        await cache.put(track.file, response.clone());
        setBgMusicSource(track.file);
        setActiveBgTrackId(track.id);
        ensureTrackInLibrary(track.id, track.file);
        return;
      }

      const contentLength = Number(response.headers.get("Content-Length")) || 0;
      let received = 0;
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (contentLength > 0) {
          const percent = Math.min(100, Math.round((received / contentLength) * 100));
          setDownloadProgress((prev) => ({ ...prev, [track.id]: percent }));
        }
      }

      const blob = new Blob(chunks);
      const cachedResponse = new Response(blob, {
        headers: { "Content-Type": response.headers.get("Content-Type") || "audio/mpeg" },
      });
      await cache.put(track.file, cachedResponse);
      setBgMusicSource(track.file);
      setActiveBgTrackId(track.id);
      ensureTrackInLibrary(track.id, track.file);
      setDownloadProgress((prev) => ({ ...prev, [track.id]: 100 }));
    } catch (error) {
      console.error("Audio cache download failed:", error);
      setBgMusicSource(track.file);
      setActiveBgTrackId(track.id);
      ensureTrackInLibrary(track.id, track.file);
      setDownloadProgress((prev) => ({ ...prev, [track.id]: 0 }));
    }
  };

  const handleTrackDelete = async (track) => {
    if (isBaseBgTrack(track.file)) return;
    const shouldDelete = window.confirm(
      `М'яке видалення: файл ${track.text || track.author || "трека"} залишиться в Cache API на кілька сеансів, але зникне з локального списку. Продовжити?`,
    );

    if (!shouldDelete) return;

    setDownloadedTracks((prev) => prev.filter((item) => !(String(item.id) === String(track.id) && item.file === track.file)));
    setSoftDeletedIds((prev) => (prev.includes(String(track.id)) ? prev : [...prev, String(track.id)]));

    if (bgMusicSource === track.file) {
      const fallback = BASE_BG_TRACKS[0]?.file || turkeysAudio;
      setBgMusicSource(fallback);
      setActiveBgTrackId(BASE_BG_TRACKS[0]?.id || null);
    }

    if (typeof window !== "undefined" && "caches" in window) {
      const cache = await caches.open(BG_CACHE_NAME);
      const entry = await cache.match(track.file);
      if (entry) {
        setTimeout(async () => {
          try {
            await cache.put(
              track.file,
              new Response(entry.body, { headers: entry.headers }),
            );
          } catch {
            // keep cached response alive in browser for soft-delete grace period
          }
        }, 0);
      }
    }
  };

  useEffect(() => {
    let animationFrameId;
    const updateTime = () => {
      const a1 = bgAudioRef?.current;
      const a2 = bgAudioRef2?.current;

      let activeAudio = a1;
      if (a1 && a2) {
        if (!a2.paused && a2.volume >= a1.volume) activeAudio = a2;
        else if (!a1.paused && a1.volume >= a2.volume) activeAudio = a1;
      }

      if (activeAudio) {
        setCurrentTime(activeAudio.currentTime || 0);
        setDuration(activeAudio.duration || 0);
      }
      animationFrameId = requestAnimationFrame(updateTime);
    };
    updateTime();
    return () => cancelAnimationFrame(animationFrameId);
  }, [bgAudioRef, bgAudioRef2]);

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    const a1 = bgAudioRef?.current;
    const a2 = bgAudioRef2?.current;

    let activeAudio = a1;
    if (a1 && a2) {
      if (!a2.paused && a2.volume >= a1.volume) activeAudio = a2;
      else if (!a1.paused && a1.volume >= a2.volume) activeAudio = a1;
    }

    if (activeAudio) {
      activeAudio.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const libraryTracks = useMemo(() => {
    let tracks = songAiKnowledge.map((s) => {
      const file = assetMap[s.audio] || turkeysAudio;
      const status = getTrackStatus({ id: s.id, file, text: s.text, author: s.author });
      return {
        id: s.id,
        name: s.text ? `${s.text} - ${s.author}` : s.author,
        file,
        image: assetMap[s.image],
        ...status,
      };
    });

    if (libSearch) {
      tracks = tracks.filter((t) =>
        t.name.toLowerCase().includes(libSearch.toLowerCase()),
      );
    }

    if (sortOrder === "az") {
      tracks.sort((a, b) => a.name.localeCompare(b.name, "uk"));
    } else if (sortOrder === "za") {
      tracks.sort((a, b) => b.name.localeCompare(a.name, "uk"));
    }

    const dedupedTracks = tracks.filter(
      (track) => !BASE_BG_TRACKS.some((base) => base.id === track.id),
    );

    return [...BASE_BG_TRACKS.map((track) => ({
      id: track.id,
      name: track.name,
      file: track.file,
      image: null,
      isBase: true,
      downloaded: true,
      softDeleted: false,
      available: true,
    })), ...dedupedTracks].slice(0, 28);
  }, [libSearch, sortOrder, downloadedTracks, softDeletedIds, bgMusicSource]);

  const countWords = (str) => {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleUploadClick = (index) => {
    activeSlotRef.current = index;
    fileInputRef.current.click();
  };

  const handleRemoveTrack = (index) => {
    const updatedTracks = Array.from(
      { length: 7 },
      (_, i) => (customBgTracks || [])[i] || null,
    );
    updatedTracks[index] = null;
    setCustomBgTracks(updatedTracks);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && activeSlotRef.current !== null) {
      if (file.size > 15 * 1024 * 1024) {
        alert("Файл занадто великий! Максимум 15 МБ.");
        return;
      }

      const audio = new Audio(URL.createObjectURL(file));
      audio.onloadedmetadata = () => {
        if (audio.duration > 300) {
          alert("Мелодія занадто довга! Максимум 5 хвилин.");
          URL.revokeObjectURL(audio.src);
          return;
        }

        // Ініціалізуємо масив з 7 пустими слотами якщо він не готовий
        const updatedTracks = Array.from(
          { length: 7 },
          (_, i) => (customBgTracks || [])[i] || null,
        );
        updatedTracks[activeSlotRef.current] = {
          name: file.name.split(".")[0].substring(0, 30),
          file: file,
          repeats: 1,
          enabled: true,
        };
        setCustomBgTracks(updatedTracks);
        setBgMusicSource(file);
        setActiveBgTrackId(null);
        URL.revokeObjectURL(audio.src);
      };
    }
  };

  const updateCustomName = (index, newName) => {
    if (countWords(newName) > 30) {
      alert("Максимум 30 слів у назві!");
      return;
    }
    const newTracks = Array.from(
      { length: 7 },
      (_, i) => (customBgTracks || [])[i] || null,
    );
    if (!newTracks[index]) {
      newTracks[index] = { name: "", file: null, repeats: 1, enabled: true };
    }
    newTracks[index] = { ...newTracks[index], name: newName };
    setCustomBgTracks(newTracks);
  };

  const moveCustomTrack = (index, direction) => {
    const newTracks = Array.from(
      { length: 7 },
      (_, i) => (customBgTracks || [])[i] || null,
    );
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newTracks.length) return;
    const temp = newTracks[index];
    newTracks[index] = newTracks[targetIndex];
    newTracks[targetIndex] = temp;
    setCustomBgTracks(newTracks);
  };

  const updateRepeats = (index, delta) => {
    const newTracks = Array.from(
      { length: 7 },
      (_, i) => (customBgTracks || [])[i] || null,
    );
    if (!newTracks[index]) return;
    const newVal = Math.max(
      1,
      Math.min(3, (newTracks[index].repeats || 1) + delta),
    );
    newTracks[index] = { ...newTracks[index], repeats: newVal };
    setCustomBgTracks(newTracks);
  };

  const toggleTrackEnabled = (index) => {
    const newTracks = Array.from(
      { length: 7 },
      (_, i) => (customBgTracks || [])[i] || null,
    );
    if (newTracks[index]) {
      newTracks[index] = {
        ...newTracks[index],
        enabled: !newTracks[index].enabled,
      };
      setCustomBgTracks(newTracks);
    }
  };

  const updateLibSetting = (id, field, value) => {
    if (!setLibraryBgSettings) return;
    const current = (libraryBgSettings && libraryBgSettings[id]) || {
      repeats: 1,
      enabled: true,
    };
    const newSettings = {
      ...libraryBgSettings,
      [id]: { ...current, [field]: value },
    };
    setLibraryBgSettings(newSettings);
  };

  const handleModeChange = () => {
    const nextMode = bgMusicMode === "loop" ? "order" : "loop";
    setBgMusicMode(nextMode);
    if (nextMode === "loop") {
      const paddedTracks = Array.from(
        { length: 7 },
        (_, i) => (customBgTracks || [])[i] || null,
      );
      const resetTracks = paddedTracks.map((t) =>
        t ? { ...t, repeats: 1, enabled: true } : null,
      );
      setCustomBgTracks(resetTracks);
    }
  };

  return (
    <ModalOverlay
      $isClosing={isClosing}
      onClick={handleClose}
      $isDarkMode={isDarkMode}
    >
      <ModalContent
        $isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
        $isDarkMode={isDarkMode}
      >
        <CloseButton onClick={handleClose} $isDarkMode={isDarkMode}>
          &times;
        </CloseButton>
        <h3
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#db6a00",
            fontWeight: "900",
          }}
        >
          Інші опції
        </h3>
        <ModalBody>
          <Column>
            <TabHeader $isDarkMode={isDarkMode}>
              <TabButton
                $active={activeTab === "custom"}
                $isDarkMode={isDarkMode}
                onClick={() => setActiveTab("custom")}
              >
                Власні (до 7 треків)
              </TabButton>
              <TabButton
                $active={activeTab === "library"}
                $isDarkMode={isDarkMode}
                onClick={() => setActiveTab("library")}
              >
                Бібліотека (24 треки)
              </TabButton>
            </TabHeader>

            {activeTab === "custom" ? (
              <SectionContainer $isDarkMode={isDarkMode}>
                <div
                  style={{ display: "flex", flexDirection: "column"}}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <TrackRow key={i} $isDarkMode={isDarkMode}>
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "6px",
                          border: isDarkMode ? "1px solid #555" : "1px solid #ccc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "21px",
                          flexShrink: 0,
                        }}
                      >
                        <TbMusicStar />
                      </div>
                      <InputWrapper $isDarkMode={isDarkMode}>
                        <SmallInput
                          $isDarkMode={isDarkMode}
                          placeholder="Підбери назву своєї мелодії"
                          value={customBgTracks[i]?.name || ""}
                          onChange={(e) => updateCustomName(i, e.target.value)}
                        />
                        <WordCounter
                          $error={countWords(customBgTracks[i]?.name) > 30}
                          $isDarkMode={isDarkMode}
                          style={{minWidth: "35px", textAlign: "right" }}
                        >
                          {countWords(customBgTracks[i]?.name)}/30
                        </WordCounter>
                        <InlineButton
                          $isDarkMode={isDarkMode}
                          onClick={() => handleUploadClick(i)}
                          title={customBgTracks[i] ? "Змінити трек" : "Додати трек"}
                        >
                          {customBgTracks[i] ? "Зміниш?" : "Додавай"}
                        </InlineButton>
                        {customBgTracks[i] && (
                          <InlineButton
                            $isDarkMode={isDarkMode}
                            onClick={() => handleRemoveTrack(i)}
                            title="Видалити трек"
                          >
                            ✕
                          </InlineButton>
                        )}
                        <ListButton
                          $active={bgMusicSource === customBgTracks[i]?.file}
                          onClick={() => {
                            if (!customBgTracks[i]?.file) {
                              alert("Вставте трек, щоб його слухати!");
                              return;
                            }
                            setBgMusicSource(customBgTracks[i].file);
                          }}
                          $isDarkMode={isDarkMode}
                          $index={i}
                          disabled={!customBgTracks[i]?.file}
                          title={customBgTracks[i]?.file ? "Слухати трек" : "Додайте трек спочатку"}
                        >
                          {customBgTracks[i]?.file && bgMusicSource === customBgTracks[i].file ? (
                            bgMusicEnabled ? (
                              <Equalizer />
                            ) : (
                              "⏸"
                            )
                          ) : (
                            "▶"
                          )}
                        </ListButton>
                      </InputWrapper>
                      {bgMusicMode === "order" && customBgTracks?.[i] && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            background: isDarkMode
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.05)",
                            padding: "2px",
                            borderRadius: "6px",
                          }}
                        >
                          <ActionButton
                            onClick={() => updateRepeats(i, -1)}
                            style={{ padding: "2px 5px", minWidth: "20px" }}
                          >
                            ◀
                          </ActionButton>
                          <RepeatValue $isDarkMode={isDarkMode}>
                            {customBgTracks[i]?.repeats || 1}
                          </RepeatValue>
                          <ActionButton
                            onClick={() => updateRepeats(i, 1)}
                            style={{ padding: "2px 5px", minWidth: "20px" }}
                          >
                            ▶
                          </ActionButton>
                          <input
                            type="checkbox"
                            checked={customBgTracks[i]?.enabled !== false}
                            onChange={() => toggleTrackEnabled(i)}
                            title="Включити в чергу"
                          />
                        </div>
                      )}
                    </TrackRow>
                  ))}
                </div>
                <FileInput
                  type="file"
                  ref={fileInputRef}
                  accept="audio/*"
                  onChange={handleFileChange}
                />
              </SectionContainer>
            ) : (
              <SectionContainer $isDarkMode={isDarkMode}>
                <SearchBox
                  $isDarkMode={isDarkMode}
                  placeholder="Пошук у бібліотеці..."
                  value={libSearch}
                  onChange={(e) => setLibSearch(e.target.value)}
                />
                <SortSelect
                  $isDarkMode={isDarkMode}
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="default">Те що зараз (стандартно)</option>
                  <option value="az">Алфавіт (А-Я)</option>
                  <option value="za">Алфавіт (Я-А)</option>
                </SortSelect>
                <ScrollSection style={{ width: "100%", boxSizing: "border-box" }}>
                  {libraryTracks.map((t, idx) => {
                    const settings = (libraryBgSettings &&
                      libraryBgSettings[t.id]) || { repeats: 1, enabled: true };
                    return (
                      <TrackRow
                        key={t.id}
                        $isDarkMode={isDarkMode}
                        style={{
                          flexWrap: "nowrap",
                          width: "100%",
                          minWidth: 0,
                          boxSizing: "border-box",
                        }}
                      >
                        {t.image ? (
                          <img
                            src={t.image}
                            alt=""
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "6px",
                              objectFit: "cover",
                              flexShrink: 0,
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "6px",
                              background: isDarkMode ? "#333" : "#eee",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "14px",
                              flexShrink: 0,
                            }}
                          >
                            🎵
                          </div>
                        )}
                        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                          <ListButton 
                            $isDarkMode={isDarkMode}
                            $active={bgMusicSource === t.file}
                            onClick={() => {
                              if (t.isBase || t.downloaded || !t.softDeleted) {
                                setBgMusicSource(t.file);
                                setActiveBgTrackId(t.id);
                              } else {
                                handleCachedDownload({ id: t.id, file: t.file, text: t.name, author: t.name });
                              }
                            }}
                            $index={idx}
                            style={{ 
                              flex: "1 1 auto",
                              width: "100%",
                              maxWidth: "100%",
                              textAlign: "left", 
                              padding: "6px 8px", 
                              display: "flex",
                              justifyContent: "flex-start",
                              opacity: settings.enabled ? 1 : 0.5,
                              minWidth: 0,
                              overflow: "hidden",
                            }}
                          >
                            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, minWidth: 0 }}>
                              {t.name}
                            </span>
                            {bgMusicSource === t.file && bgMusicEnabled && (
                              <Equalizer />
                            )}
                          </ListButton>
                          {downloadProgress[t.id] > 0 && downloadProgress[t.id] < 100 && (
                            <div style={{ height: "4px", background: "rgba(255,179,108,0.2)", borderRadius: "999px", overflow: "hidden", marginTop: "4px" }}>
                              <div style={{ height: "100%", width: `${downloadProgress[t.id]}%`, background: "#ffb36c", transition: "width 0.2s ease" }} />
                            </div>
                          )}
                        </div>

                        {!t.isBase && (
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            {t.softDeleted || (!t.downloaded && !t.isBase) ? (
                              <ActionButton
                                onClick={() => handleCachedDownload({ id: t.id, file: t.file, text: t.name, author: t.name })}
                                style={{ padding: "3px 8px", minWidth: "74px", background: "#ffb36c" }}
                              >
                                Завантажити
                              </ActionButton>
                            ) : (
                              <ActionButton
                                onClick={() => handleTrackDelete({ id: t.id, file: t.file, text: t.name, author: t.name })}
                                style={{ padding: "3px 8px", minWidth: "74px", background: "#ff7b7b" }}
                              >
                                Видалити
                              </ActionButton>
                            )}
                          </div>
                        )}

                        {bgMusicMode === "order" && (
                          <ControlGroup $isDarkMode={isDarkMode}>
                            <ActionButton
                              onClick={() =>
                                updateLibSetting(
                                  t.id,
                                  "repeats",
                                  Math.max(1, settings.repeats - 1),
                                )
                              }
                              style={{ padding: "1px 4px", minWidth: "16px" }}
                            >
                              ◀
                            </ActionButton>
                            <RepeatValue $isDarkMode={isDarkMode}>
                              {settings.repeats}
                            </RepeatValue>
                            <ActionButton
                              onClick={() =>
                                updateLibSetting(
                                  t.id,
                                  "repeats",
                                  Math.min(3, settings.repeats + 1),
                                )
                              }
                              style={{ padding: "1px 4px", minWidth: "16px" }}
                            >
                              ▶
                            </ActionButton>
                            <input
                              type="checkbox"
                              checked={settings.enabled}
                              onChange={(e) =>
                                updateLibSetting(
                                  t.id,
                                  "enabled",
                                  e.target.checked,
                                )
                              }
                              title="Включити в чергу"
                            />
                          </ControlGroup>
                        )}
                      </TrackRow>
                    );
                  })}
                </ScrollSection>
              </SectionContainer>
            )}
          </Column>

          <Column>
            <OptionRow $isDarkMode={isDarkMode}>
              <label>Фонова музика сайту</label>
              <Switch
                $active={bgMusicEnabled}
                onClick={() => setBgMusicEnabled(!bgMusicEnabled)}
              />
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Режим відтворення</label>
              <div style={{ display: "flex", gap: "5px" }}>
                <ActionButton
                  $active={bgMusicMode === "loop"}
                  onClick={handleModeChange}
                  style={{
                    background: bgMusicMode === "loop" ? "#ffb36c" : "#555",
                    width: "80px",
                  }}
                >
                  {bgMusicMode === "loop" ? "Повтор" : "По черзі"}
                </ActionButton>
              </div>
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Випадковий порядок (Shuffle)</label>
              <Switch
                $active={bgMusicShuffle}
                onClick={() => setBgMusicShuffle(!bgMusicShuffle)}
              />
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Гучність музики: {Math.round(bgMusicVolume * 100)}%</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={bgMusicVolume}
                onChange={(e) => setBgMusicVolume(parseFloat(e.target.value))}
                style={{
                  cursor: "pointer",
                  accentColor: "#ffb36c",
                  width: "100px",
                }}
              />
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Гучність звуків кнопок: {Math.round(sfxVolume * 100)}%</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={sfxVolume}
                onChange={(e) => setSfxVolume(parseFloat(e.target.value))}
                style={{
                  cursor: "pointer",
                  accentColor: "#ffb36c",
                  width: "100px",
                }}
              />
            </OptionRow>
            <OptionRow
              $isDarkMode={isDarkMode}
              style={{
                flexDirection: "column",
                alignItems: "stretch",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Позиція музики</label>
                <div
                  style={{
                    fontSize: "12px",
                    color: isDarkMode ? "#ccc" : "#555",
                  }}
                >
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  style={{
                    flex: 1,
                    cursor: "pointer",
                    accentColor: "#ffb36c",
                  }}
                />
                <ActionButton
                  onClick={onResetBgPosition}
                  style={{
                    fontSize: "11px",
                    padding: "5px 10px",
                    minWidth: "max-content",
                  }}
                >
                  ⏮ Спочатку
                </ActionButton>
              </div>
            </OptionRow>
            <OptionRow $isDarkMode={isDarkMode}>
              <label>Вимкнути фонову музику в плеєрі(додамо скоро)</label>
              <Switch
                $active={autoMuteBgMusic}
                onClick={() => setAutoMuteBgMusic(!autoMuteBgMusic)}
              />
            </OptionRow>
            <OptionRow $isDarkMode={isDarkMode}>
              <label>Блокувати фільтри в плеєрі</label>
              <Switch
                $active={lockFiltersInFs}
                onClick={() => setLockFiltersInFs(!lockFiltersInFs)}
              />
            </OptionRow>
          </Column>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};
export default OtherOptionsModal;
