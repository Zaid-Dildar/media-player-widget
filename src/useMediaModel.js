import { useState } from "react";

const useMediaModel = (initialTrack) => {
  const [currentTrack, setCurrentTrack] = useState(initialTrack);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const play = () => setIsPlaying(currentTrack !== null && true);
  const pause = () => setIsPlaying(false);
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const setVolumeLevel = (level) => setVolume(level);
  const seek = (time) => setProgress(time);
  const changeTrack = (track) => {
    setCurrentTrack(track);
    setProgress(0); // Reset progress
    setIsPlaying(true); // Auto play the new track
  };

  return {
    currentTrack,
    isPlaying,
    isMuted,
    isFullscreen,
    volume,
    progress,
    play,
    pause,
    toggleMute,
    toggleFullscreen,
    setVolumeLevel,
    seek,
    changeTrack,
  };
};

export default useMediaModel;
