import React, { useRef, useState } from "react";
import Noteitem from "./Noteitem";
export default function Notes(props) {
  const ref = useRef(null);
  const [updatedinput, setupdatedinput] = useState({
    id:"",
    title: "",
    description: "",
    tag: "General",
  });
  const handleinput = (e) => {
    setupdatedinput({ ...updatedinput, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    props.updatenote(updatedinput);
    setupdatedinput({
      title: "",
      description: "",
      tag: "General",
    });
  };
  const updatenote = (note) => {
    ref.current.click();
    setupdatedinput({id:note._id,title:note.title,description:note.description,tag:note.tag});
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
                    value={updatedinput.title}
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
                    value={updatedinput.description}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <select
                    value={updatedinput.tag}
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
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleclick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {props.notes.map((note) => (
          <Noteitem
            key={note._id}
            note={note}
            updatenote={updatenote}
            deletenote={props.deletenote}
          />
        ))}
      </div>
    </>
  );
}
