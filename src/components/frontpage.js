import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { applyMiddleware } from 'redux';
import { getNotes } from '../actions';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import { SUCCESS } from '../actions';
import {connect} from 'react-redux';


 class Frontpage extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.props.getNotes();
        axios.get('https://notesapplambda.herokuapp.com/notes')
        // axios.get('http://localhost:3333/noteslist')
        .then((response) => {
            console.log(response.data)
            this.setState({
                notes:response.data
            })
        })

        // axios.get('https://notesapplambda.herokuapp.com/notes')
        // .then((response) => {
        //     console.log(response.data)
        //     return dispatch({type:SUCCESS, notes:response.data})
        // })
        // .catch(error => {console.log(error)})
    }
    // componentDidUpdate(){
    //     this.props.getNotes();
    // }

    render() {
        let { notes } = this.props;
        // notes = notes.filter(note => {
        //     re
        // })
        console.log(this.props)
        return (
            <div className="note-container">
            <ul className="noteslist">
            {notes.map = undefined ? notes.map((note, i) => {
                return (
                    <Link key={note.id} to={`note/${note.id}/${note._id}`} className="card">
                    <li className='Note' >
                    <h1 className='Note_Title'>{note.title}</h1>
                    <hr/>
                    <div className='Note_Body'>{note.content}</div>

                     </li>
                    </Link>
                )
            }): "loading..."}
            </ul>
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

export default connect(mapStateToProps, { getNotes })(Frontpage);