import React, { useState } from "react";
import "./modal.css";

export default function Modal({ btn, title, content }) {
    const [Modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!Modal)
    };
    if (Modal) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            <button onClick={toggleModal} className="btn-modal" >
                {btn}
            </button>
            {Modal &&
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <div className="title-modal">{title}</div>
                        <div className="content-text-modal">{content}</div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>

                </div>
            }
        </>
    );
}