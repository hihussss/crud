import React from 'react'

import { INotesListProps } from '../NotesList/NotesList'


export const NotesListView: React.FC<INotesListProps> = (props) => {
  return (
    <div>
        {props.NotesList.map((note) => (<div key={note.id}>{note.content}</div>))}
    </div>
  )
}
