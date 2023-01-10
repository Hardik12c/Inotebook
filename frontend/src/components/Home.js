import React, { useState } from "react";
import Notes from "./Notes";

export default function Home() {
  const [notetext, setnotetext] = useState({
    title: "",
    description: "",
    tag: "General",
  });

  const handleinput = (e) => {
    setnotetext({ ...notetext, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    console.log(notetext);
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
            value={notetext.title}
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
            value={notetext.description}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tag</label>
          <select
            value={notetext.tag}
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
      <Notes />
    </div>
  );
}
