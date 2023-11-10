 import Note from './Note';
 import Addnotes from './Addnotes';
 
 const Notes_List = ({ 
    notes , 
    handleAddnotes, 
    handleDeleteNotes,
 }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNotes={handleDeleteNotes}
                />
            ))}
            <Addnotes handleAddnotes = {handleAddnotes}/>
        </div>
    );
 } ;
 

 export default Notes_List;