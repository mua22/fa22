import React, { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const CheckLogin = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, []);
  return <>{props.children}</>;
};

export default CheckLogin;
