import React, { useState, useEffect } from "react";
import {
  PlaylistModalContent,
  PlaylistCloseButton,
} from "./MusicPhoto.styled.jsx";
import localforage from "localforage";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { MAX_DAILY_TRACKS } from "./socialUtils";

export const SocialModalContent = ({
  socialTargetTrack,
  socialStats,
  socialComments,
  socialGlobalComments,
  MAX_VISIBLE_COMMENTS,
  isDarkMode,
  handleSocialReaction,
  socialReactionState,
  socialAuthUser,
  user,
  getAvatarSrc,
  handleGoogleSignIn,
  getDailyCommentQuotaLeft,
  MAX_DAILY_COMMENTS,
  socialCommentQuotaUsed,
  canCommentUser,
  socialCommentText,
  setSocialCommentText,
  socialCommentError,
  setSocialCommentError,
  handleSocialCommentSubmit,
  socialLoading,
  socialGlobalCommentCount,
  socialCommentCount,
  setShowSocialModal,
  currentPlayingTrack,
  setSocialTargetTrack,
}) => {
  const [activeTab, setActiveTab] = useState(
    socialTargetTrack?.isGeneral ? "global" : "track",
  );
  const [expandedComments, setExpandedComments] = useState({});
  const [hiddenComments, setHiddenComments] = useState([]);
  const [socialCommentCharsUsed, setSocialCommentCharsUsed] = useState(0);
  const [commentedTracksToday, setCommentedTracksToday] = useState([]);

  // Sync track when it changes on the background
  useEffect(() => {
    if (
      currentPlayingTrack &&
      socialTargetTrack &&
      !socialTargetTrack.isGeneral
    ) {
      if (currentPlayingTrack.id !== socialTargetTrack.id) {
        setSocialTargetTrack(currentPlayingTrack);
      }
    }
  }, [currentPlayingTrack, socialTargetTrack, setSocialTargetTrack]);

  // Sync tab and stats when target track changes
  useEffect(() => {
    if (socialTargetTrack?.isGeneral) {
      setActiveTab("global");
    } else {
      setActiveTab("track");
    }
  }, [socialTargetTrack]);

  // Load hidden comments, character quota, and commented tracks quota
  useEffect(() => {
    const loadLocalStats = async () => {
      try {
        const currentUser = socialAuthUser || user;
        if (!currentUser) return;
        const uid = currentUser.uid || currentUser.id || currentUser.account;

        const hidden = await localforage.getItem(`hidden_comments_${uid}`);
        if (hidden) setHiddenComments(hidden);

        const today = new Date().toISOString().split("T")[0];

        const charsKey = `social_chars_${uid}_${today}`;
        const charsUsed = (await localforage.getItem(charsKey)) || 0;
        setSocialCommentCharsUsed(charsUsed);

        const tracksKey = `social_tracks_${uid}_${today}`;
        const tracksUsed = (await localforage.getItem(tracksKey)) || [];
        setCommentedTracksToday(tracksUsed);
      } catch (err) {
        console.error("Local stats load error:", err);
      }
    };
    loadLocalStats();
  }, [socialAuthUser, user]);

  const toggleReadMore = (id) => {
    setExpandedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDeleteComment = async (comment) => {
    const currentUser = socialAuthUser || user;
    if (!currentUser) return;
    const uid = currentUser.uid || currentUser.id || currentUser.account;
    const isOwn =
      comment.user?.uid === uid ||
      comment.user?.id === uid ||
      comment.user?.account === uid;

    if (isOwn) {
      if (window.confirm("Ви дійсно хочете видалити свій коментар для всіх?")) {
        try {
          await deleteDoc(doc(db, "music_social_comments", comment.id));
        } catch (err) {
          console.error("Failed to delete comment:", err);
        }
      }
    } else {
      if (window.confirm("Приховати цей коментар для вас?")) {
        const newHidden = [...hiddenComments, comment.id];
        setHiddenComments(newHidden);
        localforage
          .setItem(`hidden_comments_${uid}`, newHidden)
          .catch(console.error);
      }
    }
  };

  // Перевірка лімітів пісень
  const isGlobal = socialTargetTrack?.isGeneral;
  const isTrackAlreadyCommented = commentedTracksToday.includes(
    socialTargetTrack?.id,
  );
  const trackLimitReached =
    !isGlobal &&
    !isTrackAlreadyCommented &&
    commentedTracksToday.length >= (MAX_DAILY_TRACKS || 10);

  const charsLeft = Math.max(
    0,
    2000 - socialCommentCharsUsed - socialCommentText.length,
  );
  const canSend =
    charsLeft >= 0 && socialCommentText.trim().length > 0 && !trackLimitReached;

  const handleSubmitWrapper = async () => {
    if (charsLeft < 0) {
      if (setSocialCommentError)
        setSocialCommentError("Перевищено ліміт 2000 символів на день.");
      return;
    }

    // Зчитуємо текст ДО відправки, бо handleSocialCommentSubmit очищає його всередині
    const textBeforeSubmit = socialCommentText.trim();
    const charsBeforeSubmit = socialCommentText.length;

    await handleSocialCommentSubmit();

    if (textBeforeSubmit) {
      const currentUser = socialAuthUser || user;
      if (currentUser) {
        const uid = currentUser.uid || currentUser.id || currentUser.account;
        const today = new Date().toISOString().split("T")[0];

        // Оновлення символів
        const charsKey = `social_chars_${uid}_${today}`;
        const newTotal = socialCommentCharsUsed + charsBeforeSubmit;
        setSocialCommentCharsUsed(newTotal);
        localforage.setItem(charsKey, newTotal).catch(console.error);

        // Оновлення списку пісень, якщо це нова пісня
        if (!isGlobal && !isTrackAlreadyCommented && socialTargetTrack?.id) {
          const tracksKey = `social_tracks_${uid}_${today}`;
          const newTracks = [...commentedTracksToday, socialTargetTrack.id];
          setCommentedTracksToday(newTracks);
          localforage.setItem(tracksKey, newTracks).catch(console.error);
        }
      }
    }
  };

  const filteredTrackComments = socialComments
    .filter((c) => !hiddenComments.includes(c.id))
    .slice(0, MAX_VISIBLE_COMMENTS);
  const filteredGlobalComments = socialGlobalComments.filter(
    (c) => !hiddenComments.includes(c.id),
  );

  return (
    <PlaylistModalContent
      onClick={(e) => {
        e.stopPropagation();
      }}
      onWheel={(e) => {
        e.stopPropagation();
      }}
      style={{
        maxWidth: 1200,
        width: "92%",
        padding: 5,
        maxHeight: "85vh",
        overflowY: "auto",
        background: isDarkMode ? "#1f2335" : "#fffaf4",
        color: isDarkMode ? "#f2f2f2" : "#111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PlaylistCloseButton
        onClick={() => setShowSocialModal(false)}
        style={{ color: isDarkMode ? "#fff" : "#111", zIndex: 20 }}
      >
        &times;
      </PlaylistCloseButton>

      {/* Липкий заголовок */}
      <div
        style={{
          position: "sticky",
          top: -5,
          background: isDarkMode ? "#1f2335" : "#fffaf4",
          zIndex: 10,
          padding: "10px 5px",
          borderBottom: isDarkMode
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>
          {socialTargetTrack?.isGeneral
            ? "🌐 Загальний чат"
            : `🎵 ${socialTargetTrack?.author || ""} — ${socialTargetTrack?.text || ""}`}
        </h3>

        {/* Вкладки */}
        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          <button
            onClick={() => setActiveTab("info")}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background:
                activeTab === "info"
                  ? "#ffb36c"
                  : isDarkMode
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.05)",
              color:
                activeTab === "info" ? "#111" : isDarkMode ? "#fff" : "#111",
              fontWeight: activeTab === "info" ? "bold" : "normal",
            }}
          >
            📊 Інфо
          </button>
          {!socialTargetTrack?.isGeneral && (
            <button
              onClick={() => setActiveTab("track")}
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                background:
                  activeTab === "track"
                    ? "#ffb36c"
                    : isDarkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.05)",
                color:
                  activeTab === "track" ? "#111" : isDarkMode ? "#fff" : "#111",
                fontWeight: activeTab === "track" ? "bold" : "normal",
              }}
            >
              💬 Чат пісні ({socialCommentCount})
            </button>
          )}
          <button
            onClick={() => setActiveTab("global")}
            style={{
              padding: "6px 12px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background:
                activeTab === "global"
                  ? "#ffb36c"
                  : isDarkMode
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.05)",
              color:
                activeTab === "global" ? "#111" : isDarkMode ? "#fff" : "#111",
              fontWeight: activeTab === "global" ? "bold" : "normal",
            }}
          >
            🌐 Загальний ({socialGlobalCommentCount})
          </button>
        </div>

        {activeTab === "info" && !socialTargetTrack?.isGeneral && (
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 5,
            }}
          >
            <span
              style={{
                background: "rgba(255, 0, 0, 0.32)",
                padding: "3px",
                borderRadius: 4,
              }}
            >
              ⏱: {Math.floor((socialTargetTrack.duration || 0) / 60)}:
              {String(
                Math.floor((socialTargetTrack.duration || 0) % 60),
              ).padStart(2, "0")}
            </span>
            <span
              style={{
                background: "rgba(255, 179, 0, 0.32)",
                padding: "3px",
                borderRadius: 4,
              }}
            >
              👁: {socialStats?.views || 0}
            </span>
            <span
              style={{
                background: "rgba(13, 255, 0, 0.34)",
                padding: "3px",
                borderRadius: 4,
              }}
            >
              🖒: {socialStats?.likes || 0}
            </span>
            <span
              style={{
                background: "rgba(0, 0, 255, 0.28)",
                padding: "3px",
                borderRadius: 4,
              }}
            >
              🖓: {socialStats?.dislikes || 0}
            </span>
          </div>
        )}
      </div>

      <div style={{ flex: 1, padding: "10px 0", minHeight: 200 }}>
        {activeTab === "info" && !socialTargetTrack?.isGeneral && (
          <div
            style={{ display: "flex", gap: 10, flexWrap: "wrap", padding: 10 }}
          >
            <button
              onClick={() => handleSocialReaction(1)}
              style={{
                border: "none",
                borderRadius: 4,
                padding: "8px 16px",
                cursor: "pointer",
                background: socialReactionState === 1 ? "#ff4d6d" : "#e8e8e8",
                color: socialReactionState === 1 ? "#fff" : "#111",
                fontWeight: "bold",
              }}
            >
              ❤ Лайк
            </button>
            <button
              onClick={() => handleSocialReaction(-1)}
              style={{
                border: "none",
                borderRadius: 4,
                padding: "8px 16px",
                cursor: "pointer",
                background: socialReactionState === -1 ? "#4c78ff" : "#e8e8e8",
                color: socialReactionState === -1 ? "#fff" : "#111",
                fontWeight: "bold",
              }}
            >
              👎 Дизлайк
            </button>
          </div>
        )}

        {activeTab === "track" && !socialTargetTrack?.isGeneral && (
          <div style={{ display: "grid", gap: 10 }}>
            {filteredTrackComments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                isDarkMode={isDarkMode}
                getAvatarSrc={getAvatarSrc}
                expanded={expandedComments[comment.id]}
                toggleReadMore={() => toggleReadMore(comment.id)}
                onDelete={() => handleDeleteComment(comment)}
                currentUser={socialAuthUser || user}
              />
            ))}
            {!filteredTrackComments.length && (
              <div style={{ opacity: 0.7, fontSize: 13 }}>
                Ще немає коментарів до цієї пісні.
              </div>
            )}
          </div>
        )}

        {activeTab === "global" && (
          <div style={{ display: "grid", gap: 10 }}>
            {filteredGlobalComments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                isDarkMode={isDarkMode}
                getAvatarSrc={getAvatarSrc}
                expanded={expandedComments[comment.id]}
                toggleReadMore={() => toggleReadMore(comment.id)}
                onDelete={() => handleDeleteComment(comment)}
                currentUser={socialAuthUser || user}
              />
            ))}
            {!filteredGlobalComments.length && (
              <div style={{ opacity: 0.7, fontSize: 13 }}>
                Ще немає загальних коментарів.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Липкий блок введення коментаря */}
      {activeTab !== "info" && (
        <div
          style={{
            position: "sticky",
            bottom: -5,
            margin: "0 -5px -5px -5px",
            padding: "16px",
            background: isDarkMode ? "#1f2335" : "#fffaf4",
            borderTop: isDarkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.1)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 6,
            }}
          >
            {!(socialAuthUser || user) ? (
              <button
                onClick={handleGoogleSignIn}
                style={{
                  border: "none",
                  borderRadius: 999,
                  padding: "8px 12px",
                  cursor: "pointer",
                  background: "#4285f4",
                  color: "#fff",
                }}
              >
                🔑 Увійти з Google
              </button>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {(getAvatarSrc(socialAuthUser?.avatar) ||
                  getAvatarSrc(user?.avatar)) && (
                  <img
                    src={
                      getAvatarSrc(socialAuthUser?.avatar) ||
                      getAvatarSrc(user?.avatar)
                    }
                    alt="avatar"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ffb36c",
                    }}
                  />
                )}
                <span style={{ fontSize: 13, opacity: 0.8 }}>
                  Увійшли як{" "}
                  {socialAuthUser?.firstName ||
                    user?.firstName ||
                    user?.account ||
                    "користувач"}
                </span>
              </div>
            )}
          </div>

          {/* Рядок лімітів з кольоровими бейджами і повідомленням про скидання */}
          {(socialAuthUser || user) && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, opacity: 0.55, marginBottom: 5 }}>
                🔄 Ліміти оновлюються щодня о 00:00
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {!isGlobal &&
                  (() => {
                    const tracksUsed = commentedTracksToday.length;
                    const tracksMax = MAX_DAILY_TRACKS || 10;
                    const tracksOk = tracksUsed < tracksMax;
                    return (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: 999,
                          background: tracksOk
                            ? "rgba(80,200,120,0.18)"
                            : "rgba(255,80,80,0.18)",
                          color: tracksOk
                            ? isDarkMode
                              ? "#7effa0"
                              : "#1a7a3a"
                            : isDarkMode
                              ? "#ff8080"
                              : "#b00",
                          border: `1px solid ${tracksOk ? "rgba(80,200,120,0.35)" : "rgba(255,80,80,0.35)"}`,
                        }}
                      >
                        🎵 Пісень: {tracksUsed}/{tracksMax}
                      </span>
                    );
                  })()}
                {(() => {
                  const commentsLeft = getDailyCommentQuotaLeft(
                    MAX_DAILY_COMMENTS,
                    socialCommentQuotaUsed,
                  );
                  const commentsOk = commentsLeft > 0;
                  return (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: 999,
                        background: commentsOk
                          ? "rgba(80,150,255,0.15)"
                          : "rgba(255,80,80,0.18)",
                        color: commentsOk
                          ? isDarkMode
                            ? "#7abcff"
                            : "#1a4a9a"
                          : isDarkMode
                            ? "#ff8080"
                            : "#b00",
                        border: `1px solid ${commentsOk ? "rgba(80,150,255,0.3)" : "rgba(255,80,80,0.35)"}`,
                      }}
                    >
                      💬 Коментарів: {commentsLeft}
                    </span>
                  );
                })()}
                {(() => {
                  const charsWarn = charsLeft < 750;
                  return (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "3px 8px",
                        borderRadius: 999,
                        background: charsWarn
                          ? "rgba(255,160,0,0.18)"
                          : "rgba(80,200,120,0.13)",
                        color: charsWarn
                          ? isDarkMode
                            ? "#ffcc55"
                            : "#8a5200"
                          : isDarkMode
                            ? "#7effa0"
                            : "#1a7a3a",
                        border: `1px solid ${charsWarn ? "rgba(255,160,0,0.35)" : "rgba(80,200,120,0.3)"}`,
                      }}
                    >
                      ✏️ Символів: {charsLeft}
                    </span>
                  );
                })()}
              </div>
            </div>
          )}

          <div style={{ display: "flex", position: "relative", width: "100%" }}>
            {(() => {
              const currentUser = socialAuthUser || user;
              const canComment = canCommentUser(currentUser);

              let placeholderText = "Залиште коментар...";
              if (!currentUser)
                placeholderText = "Увійдіть щоб написати коментар...";
              else if (!canComment)
                placeholderText = "Вам заборонено залишати коментарі";
              else if (trackLimitReached)
                placeholderText = `Ліміт: не більше ${MAX_DAILY_TRACKS || 10} пісень на день`;

              return (
                <textarea
                  value={socialCommentText}
                  onChange={(e) => setSocialCommentText(e.target.value)}
                  maxLength={2000}
                  placeholder={placeholderText}
                  disabled={!canComment || trackLimitReached}
                  style={{
                    flex: 1,
                    minHeight: 80,
                    borderRadius: 12,
                    padding: "10px 100px 15px 10px", // Відступ справа і знизу для кнопки
                    border: "1px solid rgba(0,0,0,0.15)",
                    resize: "vertical",
                    opacity: !canComment || trackLimitReached ? 0.6 : 1,
                    background: isDarkMode ? "rgba(255,255,255,0.05)" : "#fff",
                    color: isDarkMode ? "#fff" : "#111",
                    boxSizing: "border-box",
                  }}
                />
              );
            })()}

            {/* Кнопка "Надіслати" всередині інпута */}
            <button
              onClick={handleSubmitWrapper}
              disabled={socialLoading || !canSend}
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                border: "none",
                borderRadius: 999,
                padding: "6px 14px",
                cursor: "pointer",
                background: "#ffb36c",
                color: "#111",
                opacity: socialLoading || !canSend ? 0.5 : 1,
                fontWeight: "bold",
                zIndex: 2,
              }}
            >
              {socialLoading ? "Надсилаю..." : "Надіслати"}
            </button>
          </div>

          {socialCommentError && (
            <div style={{ color: "#ff4d6d", fontSize: 12, marginTop: 6 }}>
              {socialCommentError}
            </div>
          )}
        </div>
      )}
    </PlaylistModalContent>
  );
};

const CommentItem = ({
  comment,
  isDarkMode,
  getAvatarSrc,
  expanded,
  toggleReadMore,
  onDelete,
  currentUser,
}) => {
  const uid = currentUser?.uid || currentUser?.id || currentUser?.account;
  const isOwn =
    comment.user?.uid === uid ||
    comment.user?.id === uid ||
    comment.user?.account === uid;

  return (
    <div
      style={{
        background: isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
        borderRadius: 14,
        padding: 12,
        border: "1px solid rgba(122,252,255,0.2)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: `2px solid ${comment.user?.color || "#ffb36c"}`,
              overflow: "hidden",
              background: "#fff",
              flexShrink: 0,
            }}
          >
            {getAvatarSrc(comment.user?.avatar) ? (
              <img
                src={getAvatarSrc(comment.user?.avatar)}
                alt={comment.user?.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                👤
              </div>
            )}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>
              {comment.user?.name || "Гість"}
            </div>
            {comment.trackId && (
              <div style={{ fontSize: 11, opacity: 0.7, color: "#ffb36c" }}>
                🎵 {comment.trackAuthor || comment.author || "Невідомий"} -{" "}
                {comment.trackText || comment.text || ""}
              </div>
            )}
            <div style={{ fontSize: 11, opacity: 0.6 }}>
              {new Date(comment.createdAt || Date.now()).toLocaleString(
                "uk-UA",
              )}
            </div>
          </div>
        </div>

        {currentUser && (
          <button
            onClick={onDelete}
            title={isOwn ? "Видалити мій коментар" : "Приховати коментар"}
            style={{
              background: "transparent",
              border: "none",
              color: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
              cursor: "pointer",
              padding: 4,
            }}
          >
            ✕
          </button>
        )}
      </div>

      <div
        style={{
          marginTop: 10,
          whiteSpace: "pre-wrap",
          textAlign: "left",
          fontSize: 13,
          lineHeight: 1.4,
          wordBreak: "break-word",
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {comment.text}
      </div>

      {comment.text && comment.text.split("\n").length > 4 && (
        <button
          onClick={toggleReadMore}
          style={{
            background: "transparent",
            border: "none",
            color: "#4c78ff",
            padding: 0,
            marginTop: 4,
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          {expanded ? "Згорнути" : "Читати далі..."}
        </button>
      )}
    </div>
  );
};
