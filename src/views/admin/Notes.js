import React, { useEffect, useState } from "react";

import { Card, Container, Row } from "reactstrap";

import NoteContainer from "components/NoteContainer/NoteContainer";
import Sidebar from "components/Sidebar/Sidebar2";

import "./Notes.css";
import NotesHeader from "components/Headers/NotesHeader";


function Notes() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <NotesHeader />
      <Container className="mt--9" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <div className="Notes">
              <Sidebar addNote={addNote} />
              <NoteContainer
                notes={notes}
                deleteNote={deleteNote}
                updateText={updateText}
              />
              </div>
            </Card>
          </div>
        </Row>
        
      </Container>
      
    </>
    
  );
}

export default Notes;
