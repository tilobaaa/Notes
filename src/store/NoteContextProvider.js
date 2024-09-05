import { createContext, useReducer } from "react";

export const NoteContext = createContext();

const defaultItems = [
  { title: "Sunday Sermon", content: "I am going higher yes i am", id: "e1" },
  {
    title: "I have a dream",
    content:
      "I wish I knew martin Luther King. I need him to show me how to make dreams come true",
    id: "e2",
  },
];

const noteReducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.note];
  }
  if (action.type === "REMOVE") {
    return state.filter((item) => item.id !== action.id);
  }
  if (action.type === "EDIT") {
    return state.map((item) => (item.id === action.id ? {...action.note, id: action.id} : item));
  }
  if (action.type === "PIN") {
    const noteToPin = state.find((item) => item.id === action.id);
    const remainingNotes = state.filter((item) => item.id !== action.id);
    return [noteToPin, ...remainingNotes];
  }

  return state;
};

export default function NoteContextProvider({ children }) {
  const [noteState, dispatchAction] = useReducer(noteReducer, defaultItems);
  const addNote = (note) => {
    dispatchAction({ type: "ADD", note: { ...note, id: Date.now() } });
  };
  const removeNote = (id) => {
    dispatchAction({ type: "REMOVE", id });
  };
  const editNote = ( id,note ) => {
    dispatchAction({ type: "EDIT", id, note});
  };
  const pinNote = (id) => {
    dispatchAction({ type: "PIN", id });
  };

  const noteContextValue = {
    noteState,
    addNote,
    removeNote,
    editNote,
    pinNote,
  };

  return (
    <NoteContext.Provider value={noteContextValue}>
      {children}
    </NoteContext.Provider>
  );
}
