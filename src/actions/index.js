import axios from 'axios';
export const SUCCESS = 'SUCCESS';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';
export const FETCHING = 'FETCHING';


var noteId = 0
export const getNotes = () => {
    return (dispatch) => {
        axios.get('https://notesapplambda.herokuapp.com/notes')
        .then((response) => {
            console.log(response.data)
            noteId = response.data.length
            dispatch({type:SUCCESS, notes:response.data})
        })
        .catch(error => {console.log(error)})
    }
}

//****need a function that forms the "note" to be passed to these functions

export const addNote = (note) => {
    
    console.log(note)
    // needs 
    note.id = noteId
    // in this implementation I need to make sure to remember
    // that I am passing the ID on the dom not storing it
    return (dispatch) => {
    
      //need to make sure the values are being passed
        // 10/24/2019

            dispatch({type:FETCHING})
            axios.post('https://notesapplambda.herokuapp.com/notes', note)
            .then((response) => {
                dispatch({type:ADD_NOTE, notes:response.data})
            
            })
            .catch(error => {console.log(error)});
}
}
export const editNote = (note) => {
    return (dispatch) => {
        dispatch({type: FETCHING})
        axios.put(`https://notesapplambda.herokuapp.com/notes//note/${note.mdbid}`, note)
        .then((response) => {
            dispatch({type:EDIT_NOTE})
        })
        .catch((err) => {console.log(err)})
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch({type: DELETE_NOTE})
        axios.delete(`https://notesapplambda.herokuapp.com/notes//note/${id}`)
        .then((response) =>{
            dispatch({type:DELETE_NOTE})
        })
        .catch((err) => {console.log(err)})
    }
}


//need to pass the whole object
// export const editNote = (note) => {
//     return (dispatch) => { 
//         dispatch({type: FETCHING});
//         //might need to modify
//         axios.put(`http://localhost:3333/note/${note.id}`, note)
//         .then((response) => {
//             console.log(response);
//             dispatch({type:SUCCESS, note: response.data})

//         }  
    
    




