import React from "react";
import { useNavigate } from "react-router-dom";

const GoHome = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div onClick={() => navigate("/")}>Ir al inicio</div>
    </header>
  );
};

export default GoHome;
