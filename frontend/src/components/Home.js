import axios from "axios";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import AddNoteform from "./AddNoteform";
import Notes from "./Notes";

export default function Home() {
  // states defined
  const [notes, setnotes] = useState([]);

  //refresh key to refresh the data
  const [refreshkey, setrefreshkey] = useState(0);

  // passed by outlet
  const showalert = useOutletContext();

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
      showalert("Note created Successfully", "success");
      setrefreshkey(refreshkey === 0 ? 1 : 0);
      console.log(addednote);
    } catch (error) {
      console.log(error);
    }
  };

  // deleting the note
  const deletenote = async (id) => {
    try {
      showalert("Note Deleted", "danger");
      await axios.delete(`http://localhost:5000/api/v1/notes/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I4NmRkYTJhMjljMTFmYmM1ZjkxOTMiLCJpYXQiOjE2NzMwMzExMzF9.Z07U1ZAP6fIUUHahQmudYU11IwuSxa9o-kT-KXy7nAs `,
        },
      });
      setrefreshkey(refreshkey === 0 ? 1 : 0);
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
      showalert("Note Updated Successfully", "success");
      setrefreshkey(refreshkey === 0 ? 1 : 0);
      console.log(updatenote);
    } catch (error) {
      console.log(error);
    }
  };
  // to fetch all notes in starting
  useEffect(() => {
    getallnotes();
  }, [refreshkey]);

  return (
    <div className="container ">
      <AddNoteform createnote={createnote} />
      <h2>Your Notes</h2>
      <Notes notes={notes} updatenote={updatenote} deletenote={deletenote} />
    </div>
  );
}
