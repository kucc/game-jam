import React, { useState, useEffect } from "react";

import * as S from "./styles";
import { FONT_COLOR } from "../../constant";

interface SnackbarProps {
  message: string;
  isActive: boolean;
  setIsActive: (a: boolean) => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, isActive, setIsActive }) => {
  const openSnackBar = () => {
    setIsActive(true);
  };
  useEffect(() => {
    if (isActive === true)
      setTimeout(() => {
        setIsActive(false);
      }, 3500);
  });
  return <>{isActive ? <S.Snackbar show={true}>{message}</S.Snackbar> : <S.Snackbar show={false} />}</>;
};

export default Snackbar;
