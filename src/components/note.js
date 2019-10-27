import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const Note = (props) => {

    console.log(props);
 //props.match.params.id




console.log(props)
        console.log(props.notes.match)
        console.log(props.match.params.id)

        const note = props.notes.filter(note => note._id == props.match.params.id)

        return (
            <div>
            <h1>{props.notes.title != undefined ? props.notes.title : "loading"}</h1>
            <div>{note.content != undefined ? note.content : "loading content"}</div>
            <Link  to={`/edit/${props.match.params._id}`} >
            <button className="button"> Edit </button> 
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