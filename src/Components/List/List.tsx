import React, { useState } from "react";
import Button from "../Shared/Button";
import AddCardInput from "./AddCardInput";
import Card from "./Card";
import styles from "./List.module.css";

type ListProps = {
  name: string;
  cards: string[];
};

const List = (props: ListProps) => {
  const { name, cards } = props;
  const [showAddCard, toggleAddCard] = useState(false);

  const onAddCard = () => {
    toggleAddCard(true);
  };

  const onAddCardHandler = (value: string) => {
    cards.push(value);
    toggleAddCard(false);
  };

  const onCancelHandler = () => {
    toggleAddCard(false);
  };

  const addCardArea = showAddCard ? (
    <AddCardInput onAddCard={onAddCardHandler} onAddCancel={onCancelHandler} />
  ) : (
    <Button
      className={styles["list__add-button"]}
      type="flat"
      onClick={onAddCard}
    >
      <i className="fas fa-plus"></i> Add a card
    </Button>
  );

  return (
    <div className={styles.list}>
      <div className={styles["list__title-area"]}>
        <h2>{name}</h2>
        <Button type="flat">
          <i className="fas fa-ellipsis-h"></i>
        </Button>
      </div>
      {cards.map((card) => (
        <Card key={Math.random()} text={card} />
      ))}
      {addCardArea}
    </div>
  );
};

export default List;
