import React, { Component } from 'react'

import { NotesView } from '../NotesView/NotesView'
import { INotes } from '../NotesList/NotesList'

export default class Notes extends Component<INotes, INotes> {
  constructor() {
      super(props);
      this.state = {
        Notes : {}
      }

      this.handlerChange = this.handlerChange.bind(this)
      this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  componentDidMount(): void {
    const { id } = this.props
    fetch('http://localhost:7070/notes Content-Type: application/json')
          .then(response => response.json())
          .then(data => this.setState({ Notes: data }))
  }
  handlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    this.setState({[name]: value})
    
  }

  handlerSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  render() {
    return (
      <NotesView info = {this.state.Notes} handlerChange={this.handlerChange} handlerSubmit={this.handlerSubmit}/>
    )
  }
}
