import React from "react";
import Noteitem from "./Noteitem";
export default function Notes(props) {
  return (
    <div className="row">
      {props.notes.map((note) => (
        <Noteitem key={note._id} note={note} deletenote={props.deletenote} />
      ))}
    </div>
  );
}
