import { XCircleIcon } from "@heroicons/react/24/outline";
import "./Modal.css"
import { useState } from "react";
const Modal = ({ title, open, onOpen, children }) => {
    if (!open) return null
    return (<div className="modal-wrapper">
        <div className="backdrop" onClick={() => onOpen(false)}></div>
        <div className="modal">
            <div className="modal__header">
                <h3>{title}</h3>
                <XCircleIcon className="icon close" onClick={() => onOpen(false)} />
            </div>
            <div className="modal__body">
                {children}
            </div>
        </div>
    </div>);
}

export default Modal;