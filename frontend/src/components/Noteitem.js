import React from "react";

export default function Noteitem(props) {
  
  const handleclick = () => {
    props.deletenote(props.note._id);
  };
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.description}</p>
          <i className="fa-solid fa-trash-can mx-2" onClick={handleclick}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{props.updatenote(props.note)}}></i>
        </div>
      </div>
    </div>
  );
}
