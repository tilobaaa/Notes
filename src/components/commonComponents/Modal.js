import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props)=>{
  return <div className="backdrop" onClick={props.onClose}></div>;
}

const ModalOverlay  = (props)=>{
  return <div className="modal-overlay">
    {props.children}
  </div>;
}
 
const portalElement = document.getElementById('overlays')

const Modal = (props)=>{
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}
export default Modal