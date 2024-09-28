import React from "react";
import { Link } from "react-router-dom";
import classes from "./googleForm.module.css";

function GoogleForm() {
  return (
    <Link
      to='https://docs.google.com/forms/d/e/1FAIpQLSd1VFnXGULfQhomjx5whis5zLyDRmTh3IgF-CAdM-hg_qi6Fg/viewform?usp=sf_link'
      target='_blank'
      className={classes.googleFormButton}
    >
      Оставить заявку
    </Link>
  );
}

export default GoogleForm;
