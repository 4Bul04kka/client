import React from "react";
import MyModal from "../modal/MyModal";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

const AdminLogin = ({ authModal, setAuthModal }) => {
  return (
    <div>
      <MyModal visible={authModal} setVisible={setAuthModal}>
        <MyInput type='text' placeholder='Логин' />
        <MyInput type='password' placeholder='Пароль' />
        <MyButton>Войти</MyButton>
      </MyModal>
    </div>
  );
};

export default AdminLogin;
