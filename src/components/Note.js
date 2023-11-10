import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNotes }) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={() => handleDeleteNotes(id)} 
                    className='delete-icon' 
                    size='1.5em' 
                />
            </div>
        </div>
    );
};

export default Note;
    