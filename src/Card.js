import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card" id={props.id} listid={props.listId}>
      <button type="button" onClick={() => props.onDeleteCard(props.id, props.listId)}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
