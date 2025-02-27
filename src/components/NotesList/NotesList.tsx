import React, { Component } from 'react'

import { NotesListView }from '../NotesListView/NotesListView'
export interface INotes {
    id: number,
    content: string
}

export interface INotesListProps {
    NotesList: INotes[]
}
export default class NotesList  extends Component <INotesListProps,{NotesList: INotes[]}> {
  constructor(props: INotesListProps) {
    super(props);
    this.state = { NotesList:[] }
      
  }
  componentDidMount(): void {
      fetch('http://localhost:7070/notes')
            .then(response => response.json())
            .then(data => this.setState({ NotesList: data }))
  }
  render() {
    
    return (
      <NotesListView NotesList = {this.state.NotesList}/>
    )
  }
}
