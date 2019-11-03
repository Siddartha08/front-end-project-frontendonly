import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Leftnav extends Component {
    


    render() {
        return(
            <div className="leftNav">
            <h1>Lambda Notes</h1>

            <a href="https://notesapplambda.herokuapp.com/">
            if No notes
            <br />click to start 
            <br /> heroku first
            <br /> then return
            </a>
            <Link to={'/'} > <button className="button" text="View Notes"> View Notes </button> </Link>
            <Link to={'/createnote'} > <button className="button" text="+ Create New Note">+ Create New Note</button> </Link>
           
            
            </div>
        )
    }
}