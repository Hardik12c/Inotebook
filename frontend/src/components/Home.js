import axios from "axios";
import React, { useEffect, useState } from "react";
import Notes from "./Notes";

export default function Home() {
  // states defined
  const [notes, setnotes] = useState([]);
  const [noteinput, setnoteinput] = useState({
    title: "",
    description: "",
    tag: "General",
  });

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

  // handling functions
  const handleinput = (e) => {
    setnoteinput({ ...noteinput, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    createnote(noteinput);
    setnoteinput({
      title: "",
      description: "",
      tag: "General",
    });
  };
  return (
    <div className="container ">
      <h1>Add a Note</h1>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Title
          </label>
          <input
            onChange={handleinput}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            aria-describedby="emailHelp"
            value={noteinput.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            onChange={handleinput}
            type="text"
            name="description"
            className="form-control"
            id="exampleInputPassword1"
            value={noteinput.description}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tag</label>
          <select
            value={noteinput.tag}
            className="form-select"
            onChange={handleinput}
            name="tag"
            aria-label="Default select example"
          >
            <option>General</option>
            <option>Exclusive</option>
            <option>Personal</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>
          Add Note
        </button>
      </form>
      <h2>Your Notes</h2>
      <Notes
        notes={notes}
        getnotes={getallnotes}
        updatenote={updatenote}
        deletenote={deletenote}
      />
    </div>
  );
}
