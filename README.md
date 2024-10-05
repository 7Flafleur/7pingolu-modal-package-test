# This is a package for a training project of the OPENCLASSROOM JS REACT Developer curriculum

![npm version](https://img.shields.io/npm/v/@pingolu/7pingolu-modal-package-test.svg)
![License](https://img.shields.io/npm/l/@pingolu/7pingolu-modal-package-test.svg)

## Table of Contents

- [This is a package for a training project of the OPENCLASSROOM JS REACT Developer curriculum](#this-is-a-package-for-a-training-project-of-the-openclassroom-js-react-developer-curriculum)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Peer Dependencies](#peer-dependencies)
  - [Usage](#usage)
  - [API Reference](#api-reference)
    - [Modal Component](#modal-component)
      - [Props](#props)
      - [Styling](#styling)
  - [License](#license)

## Description

**@pingolu/7pingolu-modal-package-test** is a React component package that provides a customizable modal dialog. This component is lightweight, easy to integrate, and supports modern React features,making it ideal for small-to-medium-sized projects or for developers looking for a straightforward solution.

## Installation

You can install this package via NPM:

```bash
npm install @pingolu/7pingolu-modal-package-test --save
```

Or via Yarn:

```bash
yarn add @pingolu/7pingolu-modal-package-test
```

## Peer Dependencies

Make sure you have the following peer dependencies installed in your project:

- **React** `^18.3.1`
- **React DOM** `^18.3.1`

You can install them with:

```bash
npm install react react-dom --save
```

## Usage

Here’s a basic example of how to use the modal component in your React project:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '@pingolu/7pingolu-modal-package-test';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const textContent="Modal is open!"  //to be displayed inside the modal

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} textContent={textContent} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## API Reference

### Modal Component

#### Props

- **`children`** (part of ReactDom Portal Syntax):Pre-written modal window.No need to specify.
- **`isOpen`** (boolean, required): Controls whether the modal is open or closed.
- **`onClose`** (function, required): A callback function triggered when the modal is requested to close.
- **`textContent`** (string,required): Text to be displayed inside modal window.
- **`customStyles`** (object, optional): Nested object containing a `background` and `content` object.

#### Styling

The component comes with a basic inline styling defined by two constants imported from an external file called ModalStyles.js:

- **`modalBackgroundStyle`** for the outer div
- **`modalContentStyle`** for the inner div

```javascript
const modalBackgroundStyle = {
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

const modalContentStyle = {
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
```

Styling can be easily customized by passing a nested object as prop.

```javascript
const customStyles = {
  background: { backgroundColor: 'rgba(0, 128, 128, 0.8)' },
  content: { padding: '60px 80px', borderRadius: '15px' },
};

// Pass `customStyles` as a prop to the `Modal` component
<Modal isOpen={isOpen} onClose={closeHandler} textContent="Custom Modal" customStyles={customStyles} />
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
