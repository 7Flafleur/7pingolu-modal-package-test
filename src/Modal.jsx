import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { modalBackgroundStyle,modalContentStyle } from './ModalStyles';


export default function Modal({ children, isOpen, onClose, textContent,customStyles={} }) {

      if (!isOpen) return null

      const combinedBackgroundStyle = { ...modalBackgroundStyle, ...customStyles.background };
      const combinedContentStyle = { ...modalContentStyle, ...customStyles.content };

      return ReactDOM.createPortal(
        <div style={combinedBackgroundStyle}>
          <div style={combinedContentStyle}>
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
      children: PropTypes.node,
      customStyles: PropTypes.shape({
    background: PropTypes.object,
    content: PropTypes.object,
  }),
    };