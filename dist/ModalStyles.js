"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalContentStyle = exports.modalBackgroundStyle = void 0;
var modalBackgroundStyle = exports.modalBackgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(253, 225, 172, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
var modalContentStyle = exports.modalContentStyle = {
  position: 'relative',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '50px 70px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(253, 225, 172, 0.3)'
};