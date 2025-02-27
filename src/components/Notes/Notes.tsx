import React, { Component } from 'react'

import { NotesView } from '../NotesView/NotesView'
import { INotes } from '../NotesList/NotesList'





export default class Notes extends Component<INotes,{Notes: INotes , count: number}> {
  constructor(props:INotes) {
      super(props);
      this.state = {
        Notes : {
          id: 0,
          content: ""
        },
        count: 0
      }

      this.handlerChange = this.handlerChange.bind(this)
      this.handlerSubmit = this.handlerSubmit.bind(this)
  }

  componentDidMount(): void {
    this.setState({count: this.state.count + 1})
    const id = `/${this.state.count}`
    fetch(`http://localhost:7070/notes${id}` , { 
        headers: {'Content-Type': 'application/json'}})
          .then(response => response.json())
          .then(data => this.setState({ Notes: data }))
  }
  handlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    this.setState((prevState) => ({ Notes: {...prevState.Notes, [name]: value}}))
    
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
