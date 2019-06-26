import { Container } from "@material-ui/core";
import Board from "./Board";
import React from "react";

export default function Boards(props) {
  return (
    <Container className="Board">
      {props.boards.length == 0 ? (
        <Board new={true} />
      ) : (
        props.boards.map(board => {
          return <Board new={false} data={{}} />;
        })
      )}
    </Container>
  );
}
