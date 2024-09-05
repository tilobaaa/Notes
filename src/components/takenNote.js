import { useState, useContext, useEffect } from "react";
import { NoteContext } from "../store/NoteContextProvider";
import Note from "./commonComponents/Note";
import NoteForm from "./commonComponents/NoteForm";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import SearchList from "./commonComponents/SearchList";

const TakenNote = () => {
  const [open, setOpen] = useState(false);
  const [editID, setEditId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchItem, setSearchItem] = useState();
  const [searchedArray, setSearchedArray] = useState([]);
  const noteCtx = useContext(NoteContext);

  

  useEffect(() => {
    if (!searchItem) {
      setSearchedArray([]);
      return;
    }
    let notes = noteCtx.noteState;
    let search = notes.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchedArray(search);
  }, [searchItem, noteCtx.noteState]);

  const handleClose = () => {
    setOpen((prev) => !prev);
    setEditMode(false);
    setCurrentNote(null);
  };

  const removeItemHandler = (id) => {
    noteCtx.removeNote(id);
  };

  const pinNoteHandler = (id) => {
    noteCtx.pinNote(id);
  };

  const editNoteHandler = (note) => {
    setSearchItem('');
    setSearchedArray([]);
    setEditId(note.id);
    setCurrentNote(note);
    setEditMode(true);
    setOpen(true);
    // noteCtx.editNote(note)
  };

  return (
    <div className="taken-note">
      <nav>
        <h2>Notes</h2>
        <div className="search-div">
          <input
            type="search"
            placeholder="search notes"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <ul>
            <div className="search-list">
            {searchedArray.map((note) => (
              <SearchList
                key={note.id}
                note={note}
                editNoteHandler={editNoteHandler}
              />
            ))}
            </div>
           
          </ul>
        </div>

        <div>
          <h6>Test User</h6>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      {open && (
        <NoteForm
          id={editID}
          onClose={handleClose}
          note={currentNote}
          editMode={editMode}
        />
      )}

      <div className="note-div">
        {noteCtx.noteState.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            onClose={handleClose}
            onRemove={removeItemHandler.bind(null, item.id)}
            onPin={pinNoteHandler.bind(null, item.id)}
            onEdit={editNoteHandler.bind(null, item)}
          />
        ))}
      </div>
      <Button onClick={handleClose}>+</Button>
    </div>
  );
};

export default TakenNote;
