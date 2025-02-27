
import  NotesList  from './components/NotesList/NotesList'
import  Notes  from './components/Notes/Notes'
import './App.css'

function App() {
  

  return (
    <div>
      <NotesList NotesList={[]}/>
      <Notes />
    </div>
  )
}

export default App
