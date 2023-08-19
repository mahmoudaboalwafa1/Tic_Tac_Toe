import { WinGame } from "./WinGame";
import { boxes } from "./variables";

const MatchColsAndRows = () => {
  // Rows
  function Rows(RowOne, RowTwo, RowThree) {
    if (
      boxes[RowOne].innerHTML == boxes[RowTwo].innerHTML &&
      boxes[RowTwo].innerHTML == boxes[RowThree].innerHTML &&
      boxes[RowOne].innerHTMl != "" &&
      boxes[RowTwo].innerHTML != ""
    ) {
      WinGame(boxes[RowOne], boxes[RowOne], boxes[RowThree]);
    }
  }

  Rows(2, 6, 4);
  Rows(2, 4, 6);
  Rows(0, 4, 8);
  Rows(0, 8, 4);

  // columns
  const Columns = (ColOne, ColTwo, ColThree) => {
    if (
      boxes[ColOne].innerHTML == boxes[ColTwo].innerHTML &&
      boxes[ColTwo].innerHTML == boxes[ColThree].innerHTML &&
      boxes[ColThree].innerHTMl != "" &&
      boxes[ColTwo].innerHTML != ""
    ) {
      WinGame(boxes[ColOne], boxes[ColTwo], boxes[ColThree]);
    }
  };

  Columns(0, 3, 6);
  Columns(0, 1, 2);
  Columns(6, 7, 8);
  Columns(1, 4, 7);
  Columns(3, 4, 5);
  Columns(2, 5, 8);
};

export default MatchColsAndRows;
