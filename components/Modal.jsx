"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  console.log(modalRef.current);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {}

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-gray-700 shadow-md border border-gray-600 flex flex-col p-2 rounded-md dark:bg-slate-400 dark:bg-opacity-95 dark:text-gray-100"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image
          alt="close"
          src="/assets/icons/xmark.svg"
          width={30}
          height={30}
        />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
