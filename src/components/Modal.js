import React from 'react';
import { TiDelete } from "react-icons/ti";

const Modal = (props) => {
  const goBack = () => {
    let x = document.querySelector('.cart');
        x.classList.add('appear-block');
        let y = document.querySelector('.modal');
        y.classList.remove('appear-flex');
  }

  const deleteThis = () => {
    let x = document.querySelector('.cart');
    x.style.display = 'block';
    let y = document.querySelector('.modal');
    y.style.display = 'none';
  }

  return (
    <div>
      {props.page}
      <div className="modal">
        <TiDelete className="exit" onClick={goBack}/>
        <h1>Are your sure?</h1>
        <div className="confirm">
          <button className="delete-btn" onClick={deleteThis}>DELETE</button>
          <button className="nevermind" onClick={goBack}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;