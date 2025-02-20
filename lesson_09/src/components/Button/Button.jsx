import React from "react";

import { Button as ButtonMui } from "@mui/material";

export default function Button({ title, handleClick }) {
  return (
    <ButtonMui variant="contained" onClick={handleClick}>
      {title}
    </ButtonMui>
  );
}
