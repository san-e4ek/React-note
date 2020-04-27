import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/FirebaseContext";
import {Loader} from "../components/Loader";

export const Home = props => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form/>

            <hr/>

            {loading ? <Loader/> : <Notes notes={notes} onRemove={removeNote}/>}


        </Fragment>
    )
}