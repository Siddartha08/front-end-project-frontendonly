import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteNote} from '../actions';
import axios from 'axios';



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
 handleButton = (e) => {
    console.log('handlebutton working')

    axios.delete(`https://notesapplambda.herokuapp.com/notes/note/${this.state.mdbid}`)
        .then((response) =>{
            console.log('successful deletion')
            // dispatch({type:DELETE_NOTE})
        })

    //this.props.deleteNote(this.state.mdbid).catch(err => console.log(err))
    console.log('past delete not function')
}

        render() {
        return (
            
            <div>
            <h1>{this.state.title}
            
            </h1>
            <div>{this.state.content}</div>
            <Link  to={`/edit/${this.state.id}`} >
            <button className="button"> Edit </button> 
            </Link>
            
            <button onClick={() => {this.handleButton, console.log('buttonclicked')}} className="delete"> Delete </button> 
            
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