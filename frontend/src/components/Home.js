import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import AddNoteform from "./AddNoteform";
import Notes from "./Notes";

export default function Home() {
  // states defined
  const [notes, setnotes] = useState([]);

  //refresh key to refresh the data
  const [refreshkey, setrefreshkey] = useState(0);

  // passed by outlet
  const showalert = useOutletContext();

  //Navigate to othertab
  const navigate=useNavigate();
  // client to server communication

  // get all the notes
  const getallnotes = async () => {
    try {
      const { data } = await axios.get("https://inotebook-backend-d9ht.onrender.com/api/v1/notes/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
        "https://inotebook-backend-d9ht.onrender.com/api/v1/notes/",
        { title: data.title, description: data.description, tag: data.tag },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
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
      await axios.delete(`https://inotebook-backend-d9ht.onrender.com/api/v1/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
        `https://inotebook-backend-d9ht.onrender.com/api/v1/notes/${data.id}`,
        { title: data.title, description: data.description, tag: data.tag },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
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
    if(localStorage.getItem('token')){
      getallnotes();
    }else{
      navigate('/login')
    }
  }, [refreshkey]);
  
  return (
    <div className="container ">
      <AddNoteform createnote={createnote} />
      <h2>Your Notes</h2>
      <Notes notes={notes} updatenote={updatenote} deletenote={deletenote} />
    </div>
  );
}
