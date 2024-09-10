"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  const onHide = useCallback(() => {
    router.back();
  }, [router]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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
