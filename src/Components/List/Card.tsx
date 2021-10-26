import React, { useState } from "react";
import styles from "./Card.module.css";
import Button from "../Shared/Button";

type CardProps = {
  text: string;
};

const Card = ({ text }: CardProps) => {
  const [showButton, toggleButton] = useState(false);

  const onHover = () => {
    toggleButton(true);
  };

  const onLeave = () => {
    toggleButton(false);
  };
  return (
    <div className={styles.card} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <span>{text}</span>
      {showButton ? (
        <Button type="flat" className={styles["card__button"]}>
         <i className="fas fa-pen"></i>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
