import React from 'react'
import ReactDom from 'react-dom'

import "./style.css"

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(34,34,34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const Modal = ({ children , onClose }) => {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div className='modal_inner' style={MODAL_STYLES}>
        <button className='btn bg-danger fs-4' style={{ marginLeft: "85%", marginTop: "20px" }} onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('modal')
  )
}

export default Modal