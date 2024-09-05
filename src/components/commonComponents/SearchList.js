


export default function SearchList(props) {
    const handleClick = ()=>{
     props.editNoteHandler(props.note);

    }

  return <li className='search-list-individual' onClick={handleClick}>{props.note.title}</li>;
}

