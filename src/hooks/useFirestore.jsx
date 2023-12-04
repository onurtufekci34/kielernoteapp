import {collection} from 'firebase/firestore'
import {db} from '../firebase/config'
import {useReducer,useState} from 'react'


let initialState = {
    document:null,
    isPending:false,
    error:null,
    success:null
}


const firestoreReducer = (state,action) => {
    switch (action.type) {
        
    
        default:
            return state;
    }
}


export const useFirestore = (koleksiyon) => {
    const [response,dispatch] = useReducer(firestoreReducer, initialState)

    const ref = collection(db,koleksiyon)

    const addDocument = async (doc)=>{

    }

    const deleteDocument = async(id) =>{

    }

    return {addDocument,deleteDocument,response}
}