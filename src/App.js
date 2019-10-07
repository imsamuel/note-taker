// Library imports
import React, { Component } from 'react';
import Dexie from 'dexie';

// Component imports
import Heading from './components/Heading';
import NoteTakingForm from './components/NoteTakingForm';
import NotesList from './components/NotesList';

// Style imports
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db: null,
      value: '',
      notes: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const { 
      db, 
      notes, 
      value 
    } = this.state;

    // Create a new note from the user-submitted text.
    const newNote = {id: notes.length + 1, value};
    
    /**
     * Attempt to insert the new note into the notes store.
     * If successful, add the new note to the notes state
     * prop, and blank out the input field as well.
     */
    this.state.db
      .transaction('rw', db.notes, () => {
        db.notes.add(newNote);
        this.setState({notes: [...notes, newNote]});
        this.setState({value: ''});
      })
      .catch(err => console.log(err));  
  }

  componentDidMount() {
    /**
     * Create and open a new database of name 'notes'.
     * If already exists, dexie simply opens the 
     * existing database.
     */
    const notesDB = new Dexie('notes');
    
    /**
     * Store the reference to the database in
     * state.
     * 
     * Upon the setState on db resolving, 
     * 1. Define the schema for the notes database.
     * 2. Get the list of notes from the notes store
     *    and set it to the notes state prop.
     */
    this.setState({db: notesDB}, () => {
      this.state.db.version(1).stores({
        notes: 'id'
      });

      (async () => {
        const allNotes = await this.state.db.notes.toArray();
        this.setState({notes: allNotes});
      })();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="has-text-centered">
          <div className="columns">
            <div className="column"></div>
            <div className="column">
              <Heading />
              <NoteTakingForm 
                value={this.state.value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              {this.state.notes.length > 0 ?
                <NotesList notes={this.state.notes}/> :
                <div style={{marginTop: "2.5em"}}>Start adding notes!</div>
              }
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;