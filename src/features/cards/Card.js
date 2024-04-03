import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards, selectCardById } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector((state) => selectCardById(state, id));
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
