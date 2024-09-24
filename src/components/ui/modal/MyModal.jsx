import React from "react";
import cl from "./myModal.module.css";

const MyModal = ({ children }) => {
  return (
    <div className={[cl.MyModal, cl.active].join("")}>
      <div className={cl.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
