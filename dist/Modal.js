"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ModalStyles = require("./ModalStyles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Modal(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    textContent = _ref.textContent,
    _ref$customStyles = _ref.customStyles,
    customStyles = _ref$customStyles === void 0 ? {} : _ref$customStyles;
  if (!isOpen) return null;
  var combinedBackgroundStyle = _objectSpread(_objectSpread({}, _ModalStyles.modalBackgroundStyle), customStyles.background);
  var combinedContentStyle = _objectSpread(_objectSpread({}, _ModalStyles.modalContentStyle), customStyles.content);
  return /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement("div", {
    style: combinedBackgroundStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: combinedContentStyle
  }, /*#__PURE__*/_react["default"].createElement("p", null, textContent), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "Close"))), document.body);
}
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  textContent: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node,
  customStyles: _propTypes["default"].shape({
    background: _propTypes["default"].object,
    content: _propTypes["default"].object
  })
};