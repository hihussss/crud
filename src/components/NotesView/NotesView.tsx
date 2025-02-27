import React from 'react'

import { INotes } from '../NotesList/NotesList'

interface INotesViewProps {
    info: INotes
    handlerChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    handlerSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}

export const NotesView: React.FC<INotesViewProps> = (props) => {
  return (
    <div>
        {<form onSubmit={() => props.handlerSubmit}>
            <input type="text" name='content' value={props.info.content} onChange={() => props.handlerChange}/>
            <button type='submit'>Сохранить</button>
        </form>}
    </div>
  )
}

