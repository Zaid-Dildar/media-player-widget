"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var useMediaModel = function useMediaModel(initialTrack) {
  var _useState = (0, _react.useState)(initialTrack),
    _useState2 = _slicedToArray(_useState, 2),
    currentTrack = _useState2[0],
    setCurrentTrack = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPlaying = _useState4[0],
    setIsPlaying = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMuted = _useState6[0],
    setIsMuted = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFullscreen = _useState8[0],
    setIsFullscreen = _useState8[1];
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    volume = _useState10[0],
    setVolume = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    progress = _useState12[0],
    setProgress = _useState12[1];
  var play = function play() {
    return setIsPlaying(currentTrack !== null && true);
  };
  var pause = function pause() {
    return setIsPlaying(false);
  };
  var toggleMute = function toggleMute() {
    return setIsMuted(!isMuted);
  };
  var toggleFullscreen = function toggleFullscreen() {
    return setIsFullscreen(!isFullscreen);
  };
  var setVolumeLevel = function setVolumeLevel(level) {
    return setVolume(level);
  };
  var seek = function seek(time) {
    return setProgress(time);
  };
  var changeTrack = function changeTrack(track) {
    setCurrentTrack(track);
    setProgress(0); // Reset progress
    setIsPlaying(true); // Auto play the new track
  };
  return {
    currentTrack: currentTrack,
    isPlaying: isPlaying,
    isMuted: isMuted,
    isFullscreen: isFullscreen,
    volume: volume,
    progress: progress,
    play: play,
    pause: pause,
    toggleMute: toggleMute,
    toggleFullscreen: toggleFullscreen,
    setVolumeLevel: setVolumeLevel,
    seek: seek,
    changeTrack: changeTrack
  };
};
var _default = exports["default"] = useMediaModel;