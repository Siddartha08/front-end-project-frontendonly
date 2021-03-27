import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteNote} from '../actions';

const deleteFunction = (props) => {
    function handleButton(id) {
        console.log('handlebutton working')
        this.props.deleteNote(props.match.params.id)
        console.log(this.props.deleteNote())
        console.log('past delete not function')
    }
}


const Note = (props, deleteFunction) => {
    
    // console.log(props);
 //props.match.params.id

        let handleButton = deleteFunction.handleButton()
    

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
            
            <button onClick={() => {handleButton(props.match.params.id)}} className="delete"> Delete </button> 
            
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