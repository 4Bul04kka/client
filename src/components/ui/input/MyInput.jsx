import React from "react";
import classes from "./myInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
  return <input className={classes.myInput} {...props} />;
});

export default MyInput;
