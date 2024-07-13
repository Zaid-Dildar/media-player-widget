import React from "react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${formattedSeconds}`;
};

const MediaPlayerView = ({
  isPlaying,
  isMuted,
  isFullscreen,
  volume,
  progress,
  duration,
  onPlayPause,
  onMute,
  onFullscreen,
  onVolumeChange,
  onSeek,
  playlist,
  onTrackSelect,
  currentTrack,
}) => {
  const currentTrackTitle =
    playlist.find((track) => track.src === currentTrack)?.title ||
    "No track selected";

  const currentTime = formatTime(progress);
  const totalTime = formatTime(duration);

  const playerClass = `media-player ${
    isFullscreen ? "fullscreen" : "cursor-pointer"
  } bg-gray-800 p-6 rounded-lg flex flex-col items-center ${
    isMuted ? "border-red-500 border-2" : ""
  }`;

  const handleVolumeChange = (e) => {
    e.stopPropagation(); // Prevent propagation to parent Draggable
    onVolumeChange(e.target.value);
  };

  const handleSeek = (e) => {
    e.stopPropagation(); // Prevent propagation to parent Draggable
    onSeek(e.target.value);
  };
  const handleTutorialClick = () => {
    window.open(
      "https://github.com/Zaid-Dildar/media-player-widget#installation",
      "_blank"
    );
  };

  return (
    <div className={playerClass}>
      <div className="track-info text-white mb-2">{currentTrackTitle}</div>
      <div className="time-info text-white mb-2">
        {currentTime} / {totalTime}
      </div>
      <div className="controls flex items-center w-full">
        <button
          className="control-button text-white text-2xl mx-2"
          onClick={onPlayPause}
        >
          {isPlaying ? "❚❚" : "⏯︎"}
        </button>
        <input
          className="progress-bar flex-grow mx-2"
          type="range"
          value={progress}
          max={duration || 0}
          onChange={handleSeek}
          onMouseDown={(e) => e.stopPropagation()} // Prevent drag propagation
        />
        <button
          className="control-button text-white text-2xl mx-2"
          onClick={onMute}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
        <input
          className="volume-slider mx-2"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? "0" : volume}
          onChange={handleVolumeChange}
          onMouseDown={(e) => e.stopPropagation()} // Prevent drag propagation
        />
        <button
          className="control-button text-white text-2xl mx-2"
          onClick={onFullscreen}
        >
          {isFullscreen ? "⛶" : "⛶"}
        </button>
      </div>
      {isFullscreen && (
        <div className="playlist w-full mt-4">
          {playlist.map((track, index) => (
            <div
              key={index}
              className="track text-white p-2 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => onTrackSelect(track)}
            >
              {track.title}
            </div>
          ))}
        </div>
      )}
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={handleTutorialClick}
      >
        How to Implement
      </button>
    </div>
  );
};

export default MediaPlayerView;
