import React, { useState } from "react";
import Noteitem from "./Noteitem";

export default function Notes() {
  const notesinitial = [
    {
      tag: "General",
      _id: "63b8725f9aab810414ad1a68",
      title: "React js",
      description: "Here we are presenting a React app",
      createdby: "63b86dda2a29c11fbc5f9193",
      date: "2023-01-06T19:11:27.497Z",
      __v: 0,
    },
    {
      tag: "General",
      _id: "63b8725f9aab810414ad1a68",
      title: "hi js",
      description: "Here we are presenting a React app",
      createdby: "63b86dda2a29c11fbc5f9193",
      date: "2023-01-06T19:11:27.497Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(notesinitial);
  return (
    <div>
      {notes.map((note) => (
        <Noteitem note={note} />
      ))}
    </div>
  );
}
