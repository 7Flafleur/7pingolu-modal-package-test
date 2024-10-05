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
// const modalBackgroundStyle = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(253, 225, 172, 0.2)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center'
// };

// const modalContentStyle = {
//   position: 'relative',
//   backgroundColor: 'white',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '50px 70px',
//   borderRadius: '10px',
//   boxShadow: '0 4px 6px rgba(253, 225, 172, 0.3)'
// };

function Modal(_ref) {
  var children = _ref.children,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    textContent = _ref.textContent;
  if (!isOpen) return null;
  return /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement("div", {
    style: _ModalStyles.modalBackgroundStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _ModalStyles.modalContentStyle
  }, /*#__PURE__*/_react["default"].createElement("p", null, textContent), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "Close"))), document.body);
}
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  textContent: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node
};