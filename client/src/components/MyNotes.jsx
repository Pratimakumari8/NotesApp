import React, { useState } from 'react';
import { assets } from "../assets/assets"; 

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), content: '' }]);
  };

  const updateNote = (id, newContent) => {
    setNotes(notes.map(note => note.id === id ? { ...note, content: newContent } : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-[#FFF5F5]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#644A07]">My Notes</h2>
        <button
          onClick={addNote}
          className="w-10 h-10 rounded-full bg-[#FFC6C6] hover:bg-[#ffb9b9] text-[#644A07] text-2xl shadow-md transition-all"
        >
          +
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="relative bg-[#FFDBDB] border border-[#FFC6C6] rounded-lg p-4 shadow-md"
          >
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-2 right-2 transition-all"
            >
              <img src={assets.fulltrash} alt="Delete" className="w-6 h-6  hover:scale-110 cursor-pointer" />
            </button>

            <textarea
              className="w-full bg-transparent text-[#644A07] resize-none focus:outline-none"
              rows={6}
              placeholder="Write your note..."
              value={note.content}
              onChange={(e) => updateNote(note.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
