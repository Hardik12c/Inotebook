import React, { useEffect, useState } from "react";
import Noteitem from "./Noteitem";
import axios from "axios";
export default function Notes() {
  const [notes, setnotes] = useState([]);
  const getallnotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/notes/", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I4NmRkYTJhMjljMTFmYmM1ZjkxOTMiLCJpYXQiOjE2NzMwMzExMzF9.Z07U1ZAP6fIUUHahQmudYU11IwuSxa9o-kT-KXy7nAs `,
        },
      });
      setnotes(data.Notes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallnotes();
  }, []);

  return (
    <div className="row">
      {notes.map((note) => (
        <Noteitem key={note._id} note={note} />
      ))}
    </div>
  );
}
