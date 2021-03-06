import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  return (
    <section className='List' listid={props.id}>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards' >
        {props.cards.map((card) =>
          <Card
            onDeleteCard={props.onDeleteCard}
            listId={props.id}
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
          />
        )}
        <button
          type='button' onClick={() => props.onAddRandomCard(props.id)}
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
