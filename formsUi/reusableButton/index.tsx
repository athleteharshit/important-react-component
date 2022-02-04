import React from "react";

function Button({ handleClick, children, styleClass }: any) {
  const myClass = `button ${styleClass}`;
  return (
    <button className={myClass} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
