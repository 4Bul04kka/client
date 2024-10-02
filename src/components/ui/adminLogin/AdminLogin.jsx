import React, { useContext, useEffect } from "react";
import MyModal from "../modal/MyModal";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import { AuthContext } from "../../../context";

const AdminLogin = ({ authModal, setAuthModal }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
  }, []);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div>
      {isAuth ? (
        // Show logout modal when the admin is logged in
        <MyModal visible={authModal} setVisible={setAuthModal}>
          <h3>Welcome Admin!</h3>
          <MyButton onClick={logout}>Logout</MyButton>
        </MyModal>
      ) : (
        // Show login modal when the admin is not logged in
        <MyModal visible={authModal} setVisible={setAuthModal}>
          <form onSubmit={login}>
            <MyInput type='text' placeholder='Логин' />
            <MyInput type='password' placeholder='Пароль' />
            <MyButton type='submit'>Login</MyButton>
          </form>
        </MyModal>
      )}
    </div>
  );
};

export default AdminLogin;
