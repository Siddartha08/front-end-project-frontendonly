import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteNote} from '../actions';

function handleButton(id) {
    console.log('handlebutton working')
    deleteNote(id)
    console.log('past delete not function')
}

const Note = (props) => {

    // console.log(props);
 //props.match.params.id


    

        // console.log(props)
        // console.log(props.notes.match)
        // console.log(props.match.params.id)

        // const note = props.notes.filter(note => note._id == props.match.params.id)
        // console.log(note)

       
        return (
            
            <div>
            <h1>{props.notes[props.match.params.id].title}
            
            </h1>
            <div>{props.notes[props.match.params.id].content}</div>
            <Link  to={`/edit/${props.match.params.id}`} >
            <button className="button"> Edit </button> 
            </Link>
            <Link to={`/`} onClick={() => {this.handleButton(props.match.params.id)}}>
            <button className="delete"> Delete </button> 
            </Link>
            </div>
        )
        


    }




const mapStateToProps = (state) => {
    console.log(state.notesReducer)
    return {
        notes: state.notesReducer.notes,
    }
}
export default connect(mapStateToProps)(Note)