import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteNote} from '../actions';



class Note extends Component {

    state = {
        redirect: false,
        title: this.props.notes[this.props.match.params.id].title,
        content: this.props.notes[this.props.match.params.id].content,
        id: this.props.match.params.id,
        mdbid: this.props.notes[this.props.match.params.id]._id
    }
    // console.log(props);
 //props.match.params.id
 handleButton(id) {
    console.log('handlebutton working')
    this.props.deleteNote(id)
    console.log('past delete not function')
}

    

        // console.log(props)
        // console.log(props.notes.match)
        // console.log(props.match.params.id)

        // const note = props.notes.filter(note => note._id == props.match.params.id)
        // console.log(note)

        render() {
        return (
            
            <div>
            <h1>{this.state.title}
            
            </h1>
            <div>{this.state.content}</div>
            <Link  to={`/edit/${this.state.id}`} >
            <button className="button"> Edit </button> 
            </Link>
            
            <button onClick={() => {this.handleButton(this.state.id)}} className="delete"> Delete </button> 
            
            </div>
        )
        
        }

    }




const mapStateToProps = (state) => {
    console.log(state.notesReducer)
    return {
        notes: state.notesReducer.notes,
    }
}
export default connect(mapStateToProps)(Note)