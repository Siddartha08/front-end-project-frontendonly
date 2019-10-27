import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const Note = (props) => {

    console.log(props);
 //props.match.params.id




console.log(props)

        return (
            <div>
            <h1>{props.notes[props.match.params.id].title}</h1>
            <div>{props.notes[props.match.params.id].content}</div>
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