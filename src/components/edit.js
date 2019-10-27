import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions';
import {getNotes} from '../actions';
class Edit extends Component {

    constructor(props) {
        super(props)
        OneNote = this.props.notes.filter(note => note._id == this.props.match.params.id)
    }
    //need to reference redux state here to change.


  state = {
        redirect: false,
        title: this.OneNote.title,
        content: this.OneNote.content,
        id: this.OneNote.id,
        mdbid: this.OneNote._id
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleButton = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.editNote(this.state)
        this.setState({title: '', content:'', id: '', mdbid: ''});
        this.props.getNotes()
        this.props.history.push('/');
    }
    
    //this.props.match.params.id

render() {
    return(
        <form className="form" onSubmit={this.handleButton} >
        <input className="form-title" name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea className="form-body" rows="25" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
        <button type="submit" className="submit"   >Edit</button>
        
        
        </form>


    )
}

}








const mapStateToProps = (state) => {
    console.log(state.notesReducer)
    return {
        notes: state.notesReducer.notes,
    }
}
export default connect(mapStateToProps, {editNote, getNotes})(Edit)