import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import useMediaModel from "./useMediaModel";
import MediaPlayerView from "./MediaPlayerView";

const MediaPlayerController = (props) => {
  const {
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
  } = useMediaModel(props.playlist[0].src);

  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      seek(audioRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTrackSelect = (track) => {
    changeTrack(track.src);
  };

  const handleSeek = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      seek(value);
    }
  };

  return (
    <Draggable disabled={isFullscreen}>
      <div className="media-player-controller bg-gray-800 p-6 rounded-lg max-w-lg">
        <audio
          ref={audioRef}
          src={currentTrack}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
        />
        <MediaPlayerView
          isPlaying={isPlaying}
          isMuted={isMuted}
          isFullscreen={isFullscreen}
          volume={volume}
          progress={progress}
          duration={duration}
          onPlayPause={isPlaying ? pause : play}
          onMute={toggleMute}
          onFullscreen={toggleFullscreen}
          onVolumeChange={setVolumeLevel}
          onSeek={handleSeek}
          playlist={props.playlist}
          onTrackSelect={handleTrackSelect}
          currentTrack={currentTrack}
        />
      </div>
    </Draggable>
  );
};

export default MediaPlayerController;
