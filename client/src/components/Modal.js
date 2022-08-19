import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => props.onDismiss()}
    >
      <div
        className="ui standart modal vivible active"
        onClick={(e) => e.stopPropagation()}
      >
        <i className="close icon" onClick={props.onDismiss} />
        <h3 className="header">{props.title}</h3>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
