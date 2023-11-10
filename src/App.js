import { useEffect, useState } from "react";
import {nanoid } from 'nanoid';
import Notes_List from "./components/Notes_List";
import Search from "./components/Search";
import Header from './components/Header';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the first note",
      date: "10/27/2023"
    },
    {
      id: nanoid(),
      text: "second note",
      date: "10/27/2023"
    },
    {
      id: nanoid(),
      text: "third note",
      date: "10/27/2023"
    },
    {
      id: nanoid(),
      text: "fourth note",
      date: "10/27/2023"
    },
 

    
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }

  },[]);

  useEffect(()=> {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    );

  },[notes]);



  const addNote = (text) => {
    const date =new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),

    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <Header />
      <Search handleSearchNote={setSearchText}/>
      <Notes_List 
        notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText)
        )} 
        handleAddnotes={addNote}
        handleDeleteNotes={deleteNote}
      />
    </div>
  );
};

export default App;

