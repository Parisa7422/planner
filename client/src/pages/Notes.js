import { useEffect } from "react";
import Wrapper from "../assets/wrappers/NotePage";
import InputText from "../components/InputText";
import { useAppContext } from "../context/appContext";

const Notes = () => {
  const { createNote, noteTitle, noteContent, getNotes, notes, clearValues } =
    useAppContext();

  useEffect(() => {
    getNotes();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    createNote();
    clearValues();
    getNotes();
  };

  return (
    <Wrapper>
      <InputText
        placeholder="Add a note ..."
        name="noteContent"
        value={noteContent}
        inputName="noteTitle"
        inputValue={noteTitle}
        class="note-textarea"
        formStyle="create-note"
        onAdd={onSubmit}
      />

      <div className="note-direction">
        {notes.map((note) => {
          return (
            <div key={note._id} className="note-box">
              <h3>{note.noteTitle}</h3>
              {note.noteContent}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Notes;
