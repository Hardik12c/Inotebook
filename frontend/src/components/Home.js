import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNoteform from "./AddNoteform";
import Notes from "./Notes";

export default function Home() {
  // states defined
  const [notes, setnotes] = useState([]);

  // client to server communication

  // get all the notes
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

  // createnote
  const createnote = async (data) => {
    try {
      const addednote = await axios.post(
        "http://localhost:5000/api/v1/notes/",
        { title: data.title, description: data.description, tag: data.tag },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I4NmRkYTJhMjljMTFmYmM1ZjkxOTMiLCJpYXQiOjE2NzMwMzExMzF9.Z07U1ZAP6fIUUHahQmudYU11IwuSxa9o-kT-KXy7nAs `,
          },
        }
      );
      console.log(addednote);
    } catch (error) {
      console.log(error);
    }
  };

  // deleting the note
  const deletenote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/notes/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I4NmRkYTJhMjljMTFmYmM1ZjkxOTMiLCJpYXQiOjE2NzMwMzExMzF9.Z07U1ZAP6fIUUHahQmudYU11IwuSxa9o-kT-KXy7nAs `,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //updatenote
  const updatenote = async (data) => {
    try {
      const updatenote = await axios.patch(
        `http://localhost:5000/api/v1/notes/${data.id}`,
        { title: data.title, description: data.description, tag: data.tag },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I4NmRkYTJhMjljMTFmYmM1ZjkxOTMiLCJpYXQiOjE2NzMwMzExMzF9.Z07U1ZAP6fIUUHahQmudYU11IwuSxa9o-kT-KXy7nAs `,
          },
        }
      );
      console.log(updatenote);
    } catch (error) {
      console.log(error);
    }
  };
  // to fetch all notes in starting
  useEffect(() => {
    getallnotes();
  }, []);

  
  return (
    <div className="container ">
      <AddNoteform createnote={createnote}/>
      <h2>Your Notes</h2>
      <Notes
        notes={notes}
        updatenote={updatenote}
        deletenote={deletenote}
      />
    </div>
  );
}
