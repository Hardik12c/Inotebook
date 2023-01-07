import React from "react";

export default function Noteitem(props) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.note.title}</h5>
        <p class="card-text">{props.note.description}</p>
      </div>
    </div>
  );
}
