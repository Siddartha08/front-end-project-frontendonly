import {ERROR, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, FETCHING, SUCCESS} from '../actions'

//import actions I need
//might need to add an ID to the store

const initialState = {
    notes:[],
    fetching:false,   
    
}
//do not need to use
export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        //do these need to be more literal
        case FETCHING:
            return {...state, fetching:true};
            // do these need to require
        case SUCCESS:
            return {...state, notes:action.notes, fetching:false} 
        case ADD_NOTE:
            return [...state.slice(0, action.index), action.payload, ...state.slice(action.index)] 
            
            // {...state, notes:action.notes, fetching:false}

        case EDIT_NOTE:
            return {...state}

        case DELETE_NOTE:
            return {...state}

        case ERROR:
            return {...state, error:action.error}
            // will this be useful without axios?
        default:
            return state
    }
}