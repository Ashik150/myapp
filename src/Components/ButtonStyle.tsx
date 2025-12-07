import React from "react";

type ButtonStyleProps = {
  btnstyle: React.CSSProperties;
};

const ButtonStyle = (props: ButtonStyleProps) => {
  return <div style={props.btnstyle}>ButtonStyle</div>;
};

export default ButtonStyle;
