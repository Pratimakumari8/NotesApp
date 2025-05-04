import { createContext, useContext, useState } from "react";

export const NotesAppContext = createContext();

export const NotesAppContextProvider = ({ children }) => {

  // Authentication
  const [user, setUser] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  // Notes-related
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Add a new note
  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  // Edit a note by ID
  const editNote = (id, updatedContent) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...updatedContent } : note))
    );
  };

  // Delete a note by ID
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const value = {
    user,
    setUser,
    showUserLogin, 
    setShowUserLogin,
    notes,
    setNotes,
    addNote,
    editNote,
    deleteNote,
    searchQuery,
    setSearchQuery,
  };

  return <NotesAppContext.Provider value={value}>{children}</NotesAppContext.Provider>;
};

export const useNotesAppContext = () => {
  return useContext(NotesAppContext);
};
