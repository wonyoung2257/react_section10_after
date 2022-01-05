import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  // context로 데이터를 넘기지 않은 경우
  // 모달은 여러군데에서 사용할 수 있어 context로 함수를 넘긴다면 특정 기능의 역할만 하게된다.
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {/*potal을 사용하지 않는 다면 이렇게 작성가능
      <Backdrop />
      <ModalOberlay>{props.children} </ModalOberlay> */}
    </Fragment>
  );
};

export default Modal;
