import React, { useState } from "react";

export default function AddNoteform(props) {
    const [noteinput, setnoteinput] = useState({
        title: "",
        description: "",
        tag: "General",
      });
    
  // handling functions
  const handleinput = (e) => {
    setnoteinput({ ...noteinput, [e.target.name]: e.target.value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    props.createnote(noteinput);
    setnoteinput({
      title: "",
      description: "",
      tag: "General",
    });
  };
  return (
    <div>
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
    </div>
  );
}
