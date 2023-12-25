import React from "react";
import Input from "./input";

function NoteHeader({ search, setQuery }) {
  return (
    <div className="app-note__header">
      <h1>📒App Note</h1>
      <div className="note-search">
        <Input
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Find Notes..."
        />
      </div>
    </div>
  );
}

export default NoteHeader;
