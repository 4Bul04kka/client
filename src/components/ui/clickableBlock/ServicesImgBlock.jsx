import React from "react";
import { Link } from "react-router-dom";
import classes from "./servicesImgBlock.module.css";

const ServicesImgBlock = ({ link, title, imgSrc, text }) => {
  return (
    <li className={classes.block}>
      <Link to={link}>
        <h2>{title}</h2>
        <img src={imgSrc} alt={title} className={classes.img} />
        <p>{text}</p>
      </Link>
    </li>
  );
};

export default ServicesImgBlock;
