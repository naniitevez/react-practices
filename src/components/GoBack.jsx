import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div onClick={() => navigate(-1)}>Ir atrás</div>
    </header>
  );
};

export default GoBack;
