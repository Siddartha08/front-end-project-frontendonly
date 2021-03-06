import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {addNote, getNotes} from '../actions';
import {connect} from 'react-redux';

class CreateNote extends Component {
    state = {
        redirect: false,
        title: '',
        content: '',

    }
    // addNote = note => {
    //     console.log(note);
    //     axios.post("http://localhost:3333/noteslist", note)
    //     .then(response => {console.log(response)})
    //     //   .then(() => this.setState({ redirect: true }))
    //       .catch(error => console.log(error));
    // }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleButton = (e) => {
        e.preventDefault();
        console.log('testing');
        this.props.addNote(this.state)
        this.setState({title: '', content:'', id: ''});
        this.props.getNotes()
        this.props.history.push('/');
    }

    componentDidMount() {
        const {note} = this.state;
        if (note) {
            this.setState({title: note.title, content: note.content, id: note.id})
        }
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <form className="form" onSubmit={this.handleButton} >
            <input className="form-title" name="title" value={this.state.title} onChange={this.handleChange} />
            <textarea className="form-body" rows="25" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
            <button type="submit" className="submit"   >Create</button>
            
            </form>


        )
    }

}
// const mapStateToProps = (state) => {
//     return {
//         notes: state.notes,
//     }
// }

export default connect(null, { addNote , getNotes})(CreateNote);