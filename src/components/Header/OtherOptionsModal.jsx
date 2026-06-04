import React, { useState, useRef, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import songAiKnowledge from "../MusicPhoto/songAiKnowledge.json";
import turkeysAudio from "../../mp3/turkeys.mp3";
// Імпорти бібліотеки (приклад основних, додайте інші за аналогією)
import dinofrozAudio from "../../mp3/dinofroz.mp3";
import monodyAudio from "../../mp3/thefatrat-monody.mp3";
import windAudio from "../../mp3/kolada.mp3";
import unityAudio from "../../mp3/unity.mp3";
import horseAudio from "../../mp3/horse.mp3";
import hungerAudio from "../../mp3/thefatrat-hunger.mp3";
import dragonoraAudio from "../../mp3/dragon.mp3";
import soloveykoAudio from "../../mp3/soloveyko.mp3";
import harmonyAudio from "../../mp3/harmonic-japan.mp3";
import electrodynamixAudio from "../../mp3/electrodynamix.mp3";
import clubstepAudio from "../../mp3/clubstep.mp3";
import fingerbang from "../../mp3/mdk-fingerbang-full.mp3";
import theorytwoAudio from "../../mp3/theoty-of-everything-ll.mp3";
import theoryAudio from "../../mp3/theory-of-everyting.mp3";
import deadlockedAudio from "../../mp3/deadlocked.mp3";
import mechaAudio from "../../mp3/mechanik-kindom.mp3";
import miaAudio from "../../mp3/mia-and-me.mp3";
import humorAudio from "../../mp3/humor.mp3";
import fadedAudio from "../../mp3/alan-walker-faded.mp3";
import dominoAudio from "../../mp3/dominos-shop.mp3";

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
  animation: ${(props) => (props.$isClosing ? fadeOut : "none")} 0.5s ease-out forwards;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.$isDarkMode ? "#2a2a2a" : "#ffffff")};
  color: ${(props) => (props.$isDarkMode ? "white" : "#2a2a2a")};
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  max-width: 850px;
  border: 2px solid #ffb36c;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.5s ease-out forwards;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #ffb36c;
  &:hover { color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")}; }
`;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SectionContainer = styled.div`
  padding: 12px;
  background: ${(props) => (props.$isDarkMode ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.04)")};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  gap: 10px;
  padding: 8px 12px;
  background: ${(props) => (props.$isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)")};
  border-radius: 12px;
  label { font-size: 13px; 
  color: ${(props) => (props.$isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};
  }
`;

const ScrollSection = styled.div`
  max-height: 150px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 3px;
  padding-right: 5px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #ffb36c; border-radius: 10px; }
`;

const TrackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap; /* Дозволяє контроли переносити на новий рядок на малих екранах */
  padding: 4px 0;
  border-bottom: 1px solid ${(props) => (props.$isDarkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)")};
  &:last-child { border-bottom: none; }
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
  animation: ${eqBarAnim} ${props => props.$dur}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

const Equalizer = () => (
  <EqualizerContainer>
    <EqBar $dur={0.6} $delay={0} />
    <EqBar $dur={0.8} $delay={0.2} />
    <EqBar $dur={0.7} $delay={0.1} />
  </EqualizerContainer>
);

const WordCounter = styled.span`
  font-size: 9px;
  color: ${props => props.$error ? "#ff4d4d" : (props.$isDarkMode ? "#aaa" : "#777")};
  min-width: 30px;
  text-align: right;
`;

const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  background: ${(props) => (props.$active ? "#ffb36c" : "#555")};
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.$active ? "18px" : "2px")};
    transition: 0.3s;
  }
`;

const ListButton = styled.button`
  background: ${props => props.$active ? "#ffb36c" : (props.$isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)")};
  color: ${props => props.$active ? "#2a2a2a" : (props.$isDarkMode ? "white" : "#2a2a2a")};
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
  min-width: 120px;
  font-size: 11px;
  animation: ${itemFadeIn} 0.4s ease-out both;
  animation-delay: ${props => (props.$index % 10) * 0.05}s;
  &:hover { background: #ffb36c; color: #2a2a2a; opacity: 0.9; }
`;

const FileInput = styled.input`
  display: none;
`;

const ActionButton = styled.button`
  background: #ffb36c;
  color: #2a2a2a;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  &:hover { background: #ffa04d; }
`;

const SmallInput = styled.input`
  background: ${(props) => (props.$isDarkMode ? "#333" : "#f5f5f5")};
  border: 1px solid #ffb36c;
  color: ${(props) => (props.$isDarkMode ? "white" : "#222")};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  flex: 1;
  min-width: 100px;
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
`;

const SearchBox = styled.input`
  width: 100%;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ffb36c;
  background: ${props => props.$isDarkMode ? "rgba(0,0,0,0.3)" : "#fff"};
  color: ${props => props.$isDarkMode ? "#fff" : "#333"};
  font-size: 12px;
  margin-bottom: 10px;
  outline: none;
`;

const SortSelect = styled.select`
  width: 100%;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ffb36c;
  background: ${props => props.$isDarkMode ? "rgba(0,0,0,0.3)" : "#fff"};
  color: ${props => props.$isDarkMode ? "#fff" : "#333"};
  font-size: 12px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`;

const assetMap = {
  turkeyAudio: turkeysAudio, dinofrozAudio, monodyAudio, windAudio, unityAudio,
  horseAudio, hungerAudio, dragonoraAudio, soloveykoAudio, harmonyAudio,
  electrodynamixAudio, clubstepAudio, fingerbang, theorytwoAudio, theoryAudio,
  deadlockedAudio, mechaAudio, miaAudio, humorAudio, fadedAudio, domino: dominoAudio
};

const OtherOptionsModal = ({ 
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
  isDarkMode
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const fileInputRef = useRef(null);
  const activeSlotRef = useRef(null);
  const [libSearch, setLibSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const libraryTracks = useMemo(() => {
    let tracks = songAiKnowledge.map(s => ({
      id: s.id,
      name: s.author,
      file: assetMap[s.audio] || turkeysAudio
    }));

    if (libSearch) {
      tracks = tracks.filter(t => t.name.toLowerCase().includes(libSearch.toLowerCase()));
    }

    if (sortOrder === "az") {
      tracks.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
    } else if (sortOrder === "za") {
      tracks.sort((a, b) => b.name.localeCompare(a.name, 'uk'));
    }

    return tracks.slice(0, 24);
  }, [libSearch, sortOrder]);

  const countWords = (str) => {
    if (!str) return 0;
    return str.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleUploadClick = (index) => {
    activeSlotRef.current = index;
    fileInputRef.current.click();
  };

  const handleRemoveTrack = (index) => {
    const updatedTracks = [...customBgTracks];
    updatedTracks[index] = null;
    setCustomBgTracks(updatedTracks);
  };

  const handleClose = () => { setIsClosing(true); setTimeout(onClose, 500); };

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
        
        // Ініціалізуємо масив з 3 пустими слотами якщо він не готовий
        const updatedTracks = Array.from({ length: 3 }, (_, i) => (customBgTracks || [])[i] || null);
        updatedTracks[activeSlotRef.current] = { 
          name: file.name.split('.')[0].substring(0, 30), 
          file: file,
          repeats: 1,
          enabled: true
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
    const newTracks = [...customBgTracks];
    if (newTracks[index]) {
      newTracks[index] = { ...newTracks[index], name: newName };
      setCustomBgTracks(newTracks);
    }
  };

  const moveCustomTrack = (index, direction) => {
    const newTracks = [...customBgTracks];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newTracks.length) return;
    const temp = newTracks[index];
    newTracks[index] = newTracks[targetIndex];
    newTracks[targetIndex] = temp;
    setCustomBgTracks(newTracks);
  };

  const updateRepeats = (index, delta) => {
    if (!customBgTracks[index]) return;
    const newTracks = [...customBgTracks];
    const newVal = Math.max(1, Math.min(3, (newTracks[index].repeats || 1) + delta));
    newTracks[index] = { ...newTracks[index], repeats: newVal };
    setCustomBgTracks(newTracks);
  };

  const toggleTrackEnabled = (index) => {
    const newTracks = [...customBgTracks];
    if (newTracks[index]) {
      newTracks[index] = { ...newTracks[index], enabled: !newTracks[index].enabled };
      setCustomBgTracks(newTracks);
    }
  };

  const updateLibSetting = (id, field, value) => {
    if (!setLibraryBgSettings) return;
    const current = (libraryBgSettings && libraryBgSettings[id]) || { repeats: 1, enabled: true };
    const newSettings = {
      ...libraryBgSettings,
      [id]: { ...current, [field]: value }
    };
    setLibraryBgSettings(newSettings);
  };

  const handleModeChange = () => {
    const nextMode = bgMusicMode === "loop" ? "order" : "loop";
    setBgMusicMode(nextMode);
    if (nextMode === "loop") {
      const resetTracks = customBgTracks.map(t => ({ ...t, repeats: 1, enabled: true }));
      setCustomBgTracks(resetTracks);
    }
  };

  return (
    <ModalOverlay $isClosing={isClosing} onClick={handleClose} $isDarkMode={isDarkMode}>
      <ModalContent $isClosing={isClosing} onClick={(e) => e.stopPropagation()} $isDarkMode={isDarkMode}>
        <CloseButton onClick={handleClose} $isDarkMode={isDarkMode}>&times;</CloseButton>
        <h3 style={{ textAlign: "center", color: "#ffb36c", margin: "0 0 10px 0" }}>Інші опції</h3>
        
        <ModalBody>
          <Column>
            <SectionContainer $isDarkMode={isDarkMode}>
              <SectionLabel>🎵 Моя бібліотека (3 слоти)</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[0, 1, 2].map(i => (
                  <TrackRow key={i} $isDarkMode={isDarkMode}>
                    <SmallInput 
                      $isDarkMode={isDarkMode}
                      placeholder="Назва..." 
                      value={customBgTracks[i]?.name || ""} 
                      onChange={(e) => updateCustomName(i, e.target.value)}
                    />
                    <WordCounter $error={countWords(customBgTracks[i]?.name) > 30} $isDarkMode={isDarkMode}>
                      {countWords(customBgTracks[i]?.name)}/30
                    </WordCounter>
                    <ActionButton onClick={() => handleUploadClick(i)}>
                      {customBgTracks[i] ? "↻" : "📁"}
                    </ActionButton>
                    {customBgTracks[i] && (
                      <ActionButton onClick={() => handleRemoveTrack(i)} style={{ padding: '2px 8px', fontSize: '11px' }}>✕</ActionButton>
                    )}
                    {bgMusicMode === "order" && customBgTracks?.[i] && (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px', 
                        background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', 
                        padding: '2px 5px', 
                        borderRadius: '6px' 
                      }}>
                        <ActionButton onClick={() => updateRepeats(i, -1)} style={{ padding: '2px 5px', minWidth: '20px' }}>◀</ActionButton>
                        <RepeatValue $isDarkMode={isDarkMode}>{customBgTracks[i]?.repeats || 1}</RepeatValue>
                        <ActionButton onClick={() => updateRepeats(i, 1)} style={{ padding: '2px 5px', minWidth: '20px' }}>▶</ActionButton>
                        <input 
                          type="checkbox" 
                          checked={customBgTracks[i]?.enabled !== false} 
                          onChange={() => toggleTrackEnabled(i)}
                          title="Включити в чергу"
                        />
                      </div>
                    )}
                    {customBgTracks?.[i] && (
                      <div style={{ display: 'flex', gap: '2px' }}>
                        <ActionButton onClick={() => moveCustomTrack(i, -1)} style={{ padding: '4px', fontSize: '10px' }}>↑</ActionButton>
                        <ActionButton onClick={() => moveCustomTrack(i, 1)} style={{ padding: '4px', fontSize: '10px' }}>↓</ActionButton>
                      </div>
                    )}
                    {customBgTracks[i] && (
                      <ListButton 
                        $active={bgMusicSource === customBgTracks[i].file} 
                        onClick={() => setBgMusicSource(customBgTracks[i].file)}
                        $isDarkMode={isDarkMode}
                        $index={i}
                      >
                        {bgMusicSource === customBgTracks[i].file ? (bgMusicEnabled ? <Equalizer /> : "⏸") : "▶"}
                      </ListButton>
                    )}
                  </TrackRow>
                ))}
              </div>
              <FileInput type="file" ref={fileInputRef} accept="audio/*" onChange={handleFileChange} />
            </SectionContainer>

            <SectionContainer $isDarkMode={isDarkMode}>
              <SectionLabel>📻 Бібліотека сайту (24 треки)</SectionLabel>
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
              <ScrollSection>
                {libraryTracks.map((t, idx) => {
                  const settings = (libraryBgSettings && libraryBgSettings[t.id]) || { repeats: 1, enabled: true };
                  return (
                    <TrackRow key={t.id} $isDarkMode={isDarkMode}>
                      <ListButton 
                        $isDarkMode={isDarkMode}
                        $active={bgMusicSource === t.file} 
                        onClick={() => {
                          setBgMusicSource(t.file);
                          setActiveBgTrackId(t.id);
                        }}
                        $index={idx}
                        style={{ opacity: settings.enabled ? 1 : 0.5 }}
                      >
                        {t.name}
                        {bgMusicSource === t.file && bgMusicEnabled && <Equalizer />}
                      </ListButton>
                      
                      {bgMusicMode === "order" && (
                        <ControlGroup $isDarkMode={isDarkMode}>
                          <ActionButton 
                            onClick={() => updateLibSetting(t.id, 'repeats', Math.max(1, settings.repeats - 1))} 
                            style={{ padding: '1px 4px', minWidth: '16px' }}
                          >◀</ActionButton>
                          <RepeatValue $isDarkMode={isDarkMode}>{settings.repeats}</RepeatValue>
                          <ActionButton 
                            onClick={() => updateLibSetting(t.id, 'repeats', Math.min(3, settings.repeats + 1))} 
                            style={{ padding: '1px 4px', minWidth: '16px' }}
                          >▶</ActionButton>
                          <input 
                            type="checkbox" 
                            checked={settings.enabled} 
                            onChange={(e) => updateLibSetting(t.id, 'enabled', e.target.checked)}
                            title="Включити в чергу"
                          />
                        </ControlGroup>
                      )}
                    </TrackRow>
                  );
                })}
              </ScrollSection>
            </SectionContainer>
          </Column>

          <Column>
            <OptionRow $isDarkMode={isDarkMode}><label>Фонова музика сайту</label><Switch $active={bgMusicEnabled} onClick={() => setBgMusicEnabled(!bgMusicEnabled)} /></OptionRow>
            
            <OptionRow $isDarkMode={isDarkMode}>
              <label>Режим відтворення</label>
              <div style={{ display: 'flex', gap: '5px' }}>
                <ActionButton 
                  $active={bgMusicMode === "loop"} 
                  onClick={handleModeChange}
                  style={{ background: bgMusicMode === "loop" ? "#ffb36c" : "#555", width: '80px' }}
                >{bgMusicMode === "loop" ? "Повтор" : "По черзі"}</ActionButton>
              </div>
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Випадковий порядок (Shuffle)</label>
              <Switch $active={bgMusicShuffle} onClick={() => setBgMusicShuffle(!bgMusicShuffle)} />
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Гучність: {Math.round(bgMusicVolume * 100)}%</label>
              <input 
                type="range" min="0" max="1" step="0.05" 
                value={bgMusicVolume} 
                onChange={(e) => setBgMusicVolume(parseFloat(e.target.value))}
                style={{ cursor: 'pointer', accentColor: '#ffb36c', width: '100px' }}
              />
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Швидкість: {bgMusicSpeed}x</label>
              <input 
                type="range" min="0.5" max="2" step="0.1" 
                value={bgMusicSpeed} 
                onChange={(e) => setBgMusicSpeed(parseFloat(e.target.value))}
                style={{ cursor: 'pointer', accentColor: '#ffb36c', width: '100px' }}
              />
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}>
              <label>Позиція музики</label>
              <ActionButton onClick={onResetBgPosition} style={{ fontSize: '11px', padding: '5px 10px' }}>⏮ Почати спочатку</ActionButton>
            </OptionRow>

            <OptionRow $isDarkMode={isDarkMode}><label>Авто-тиша в плеєрі</label><Switch $active={autoMuteBgMusic} onClick={() => setAutoMuteBgMusic(!autoMuteBgMusic)} /></OptionRow>
            <OptionRow $isDarkMode={isDarkMode}><label>Блокувати фільтри в FS</label><Switch $active={lockFiltersInFs} onClick={() => setLockFiltersInFs(!lockFiltersInFs)} /></OptionRow>
          </Column>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};
export default OtherOptionsModal;