import React, { useState } from "react";
import Button from "../Shared/Button";
import Styles from "./AddCardInput.module.css";

type Props = {
  onAddCard: (value: string) => void;
  onAddCancel: () => void;
};

const AddCardInput = ({ onAddCard, onAddCancel }: Props) => {
  const [cardState, updateCardState] = useState("");

  const onChangeHandler = (event: any) => {
    updateCardState(event.target.value);
  };

  const onClickHandler = () => {
    onAddCard(cardState);
  };

  const onCancelHandler = () => {
    onAddCancel();
  }

  return (
    <div>
      <textarea
        placeholder="Enter a title for this card...."
        onChange={onChangeHandler}
        value={cardState}
      ></textarea>
      <Button
        className={Styles["add-card__button"]}
        onClick={onClickHandler}
        type="rounded"
      >
        Add Card
      </Button>
      <Button
        className={Styles["add-card__cancel"]}
        onClick={onCancelHandler}
        type="rounded"
      >
        <i className="fas fa-times fa-2x"></i>
      </Button>
    </div>
  );
};

export default AddCardInput;
