"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var formatTime = function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  var formattedSeconds = seconds < 10 ? "0".concat(seconds) : "".concat(seconds);
  return "".concat(minutes, ":").concat(formattedSeconds);
};
var MediaPlayerView = function MediaPlayerView(_ref) {
  var _playlist$find;
  var isPlaying = _ref.isPlaying,
    isMuted = _ref.isMuted,
    isFullscreen = _ref.isFullscreen,
    volume = _ref.volume,
    progress = _ref.progress,
    duration = _ref.duration,
    onPlayPause = _ref.onPlayPause,
    onMute = _ref.onMute,
    onFullscreen = _ref.onFullscreen,
    onVolumeChange = _ref.onVolumeChange,
    onSeek = _ref.onSeek,
    playlist = _ref.playlist,
    onTrackSelect = _ref.onTrackSelect,
    currentTrack = _ref.currentTrack;
  var currentTrackTitle = ((_playlist$find = playlist.find(function (track) {
    return track.src === currentTrack;
  })) === null || _playlist$find === void 0 ? void 0 : _playlist$find.title) || "No track selected";
  var currentTime = formatTime(progress);
  var totalTime = formatTime(duration);
  var playerClass = "media-player ".concat(isFullscreen ? "fullscreen" : "cursor-pointer", " bg-gray-800 p-6 rounded-lg flex flex-col items-center ").concat(isMuted ? "border-red-500 border-2" : "");
  var handleVolumeChange = function handleVolumeChange(e) {
    e.stopPropagation(); // Prevent propagation to parent Draggable
    onVolumeChange(e.target.value);
  };
  var handleSeek = function handleSeek(e) {
    e.stopPropagation(); // Prevent propagation to parent Draggable
    onSeek(e.target.value);
  };
  var handleTutorialClick = function handleTutorialClick() {
    window.open("https://github.com/Zaid-Dildar/media-player-widget#installation", "_blank");
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: playerClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "track-info text-white mb-2"
  }, currentTrackTitle), /*#__PURE__*/_react["default"].createElement("div", {
    className: "time-info text-white mb-2"
  }, currentTime, " / ", totalTime), /*#__PURE__*/_react["default"].createElement("div", {
    className: "controls flex items-center w-full"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "control-button text-white text-2xl mx-2",
    onClick: onPlayPause
  }, isPlaying ? "❚❚" : "⏯︎"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "progress-bar flex-grow mx-2",
    type: "range",
    value: progress,
    max: duration || 0,
    onChange: handleSeek,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    } // Prevent drag propagation
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "control-button text-white text-2xl mx-2",
    onClick: onMute
  }, isMuted ? "🔇" : "🔊"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "volume-slider mx-2",
    type: "range",
    min: "0",
    max: "1",
    step: "0.01",
    value: isMuted ? "0" : volume,
    onChange: handleVolumeChange,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    } // Prevent drag propagation
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "control-button text-white text-2xl mx-2",
    onClick: onFullscreen
  }, isFullscreen ? "⛶" : "⛶")), isFullscreen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "playlist w-full mt-4"
  }, playlist.map(function (track, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "track text-white p-2 cursor-pointer hover:bg-gray-700 rounded",
      onClick: function onClick() {
        return onTrackSelect(track);
      }
    }, track.title);
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "mt-4 p-2 bg-blue-500 text-white rounded",
    onClick: handleTutorialClick
  }, "How to Implement"));
};
var _default = exports["default"] = MediaPlayerView;