import { useState, useEffect } from "react";
import { useContext } from "react";
import { NoteContext } from "../../store/NoteContextProvider";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";

const NoteForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const NoteCtx = useContext(NoteContext);

  useEffect(() => {
    if (props.note) {
      setTitle(props.note.title);
      setContent(props.note.content);
    }
  }, [props.note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setError("Title cannot be empty");
      return;
    }
    if (content === "") {
      setError("Content cannot be empty");
      return;
    }

  
    

    const newNote = {
      title,
      content,
    };

    if(props.editMode){
      NoteCtx.editNote(props.id, newNote);
      props.onClose();
      return
    }
    NoteCtx.addNote(newNote);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form action="" onSubmit={handleSubmit} className="note-form">
        <label for="title">TITLE:</label>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setError('')
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="Content">CONTENT:</label>
        <textarea
          name=""
          id=""
          placeholder="Content"
          value={content}
          onChange={(e) =>{ setError('');
            setContent(e.target.value)}}
        ></textarea>
        {error !== "" && (
          <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
        )}
         <Button variant="primary" type="submit">
            Submit
          </Button>
      </form>
    </Modal>
  );
};

export default NoteForm;
