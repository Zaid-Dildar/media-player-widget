"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _useMediaModel2 = _interopRequireDefault(require("./useMediaModel"));
var _MediaPlayerView = _interopRequireDefault(require("./MediaPlayerView"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MediaPlayerController = function MediaPlayerController(props) {
  var _useMediaModel = (0, _useMediaModel2["default"])(props.playlist[0].src),
    currentTrack = _useMediaModel.currentTrack,
    isPlaying = _useMediaModel.isPlaying,
    isMuted = _useMediaModel.isMuted,
    isFullscreen = _useMediaModel.isFullscreen,
    volume = _useMediaModel.volume,
    progress = _useMediaModel.progress,
    play = _useMediaModel.play,
    pause = _useMediaModel.pause,
    toggleMute = _useMediaModel.toggleMute,
    toggleFullscreen = _useMediaModel.toggleFullscreen,
    setVolumeLevel = _useMediaModel.setVolumeLevel,
    seek = _useMediaModel.seek,
    changeTrack = _useMediaModel.changeTrack;
  var audioRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    duration = _useState2[0],
    setDuration = _useState2[1];
  (0, _react.useEffect)(function () {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);
  (0, _react.useEffect)(function () {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  (0, _react.useEffect)(function () {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);
  (0, _react.useEffect)(function () {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  var handleTimeUpdate = function handleTimeUpdate() {
    if (audioRef.current) {
      seek(audioRef.current.currentTime);
    }
  };
  var handleDurationChange = function handleDurationChange() {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  var handleTrackSelect = function handleTrackSelect(track) {
    changeTrack(track.src);
  };
  var handleSeek = function handleSeek(value) {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      seek(value);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
    disabled: isFullscreen
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "media-player-controller bg-gray-800 p-6 rounded-lg max-w-lg"
  }, /*#__PURE__*/_react["default"].createElement("audio", {
    ref: audioRef,
    src: currentTrack,
    onTimeUpdate: handleTimeUpdate,
    onDurationChange: handleDurationChange
  }), /*#__PURE__*/_react["default"].createElement(_MediaPlayerView["default"], {
    isPlaying: isPlaying,
    isMuted: isMuted,
    isFullscreen: isFullscreen,
    volume: volume,
    progress: progress,
    duration: duration,
    onPlayPause: isPlaying ? pause : play,
    onMute: toggleMute,
    onFullscreen: toggleFullscreen,
    onVolumeChange: setVolumeLevel,
    onSeek: handleSeek,
    playlist: props.playlist,
    onTrackSelect: handleTrackSelect,
    currentTrack: currentTrack
  })));
};
var _default = exports["default"] = MediaPlayerController;