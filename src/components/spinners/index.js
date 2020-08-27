import React from "react";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const GreenSpinner = () => {
  return (
    <ScaleLoader
      css={override}
      height={95}
      width={10}
      color={"#25D366"}
      loading
    />
  );
};

export default GreenSpinner;
