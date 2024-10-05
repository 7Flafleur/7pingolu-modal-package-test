import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { modalBackgroundStyle,modalContentStyle } from './ModalStyles';





export default function Modal({ children, isOpen, onClose, textContent }) {

      if (!isOpen) return null

      return ReactDOM.createPortal(
        <div style={modalBackgroundStyle}>
          <div style={modalContentStyle}>
            <p>{textContent}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        document.body
      )
    }


    Modal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
      textContent: PropTypes.string.isRequired,
      children: PropTypes.node
    };