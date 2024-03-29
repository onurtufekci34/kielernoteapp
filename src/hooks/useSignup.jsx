import {useState} from 'react'
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {useAuthContext} from './useAuthContext'



export const useSignup=()=>{


    const [error,setError] = useState(null)
    const [ispending,setIspending] = useState(false)
    const {dispatch} = useAuthContext();

    const signup = async (email,password,userName)=>{
        setError(null)
        setIspending(true)


        try {
            
            const response = await createUserWithEmailAndPassword(auth,email,password)
            //console.log(response.user)

            if(!response){
                throw new Error('Membership process was not completed')
            }

            updateProfile(response.user,{
                displayName:userName
            })

            dispatch({type:"LOGIN",payload:response.user})

            setIspending(false)
            setError(null)

        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setIspending(false)
        }



    }


    return {error,ispending,signup}

}