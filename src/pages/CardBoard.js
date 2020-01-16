import React from "react";

import data from "../redux/board.json";
import Board from "react-trello";

const CardBoard = () => {
  return (
    <div className="App">
      <Board data={data} style={{ backgroundColor: "#f0ffff" }} draggable />
    </div>
  );
};

export default CardBoard;
