import React, { useState } from "react";

import { MdAdd, MdLink } from "react-icons/md";

import Card from "../Card/index";
import { Container } from "./styles";
export default function List({ data, index: listIndex }) {

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <Link to="/new-lead">
            <MdAdd size={24} color="#FFF" />
          </Link>
        )}   

      </header>
       <ul>
      { data.cards.map((card, index) => (
          <Card 
            key={card.id} 
            listIndex={listIndex}
            index={index} 
            data={card}
          />
        ))  }

      </ul>
    </Container>
  );
}
