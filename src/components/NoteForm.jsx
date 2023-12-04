import {useState,useEffect} from 'react'
import {useFirestore} from '../hooks/useFirestore'




export default function NoteForm({uid}) {

    const [title,setTitle] = useState("")
    const [explanation, setExplanation] = useState("")

    const {addDocument,response} =useFirestore('nots')


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const note = {title,explanation}

        addDocument({
          uid,
          title,
          explanation
        })
    }

    useEffect(()=>{
      if(response.success){
        setTitle('')
        setExplanation('')
      }
    },[response.success])




  return (
    <form className='create' onSubmit={handleSubmit}>

    <label>Note Title</label>
    <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} />

    <label>Note Explanation</label>
    <input type="text" onChange={(e)=> setExplanation(e.target.value)} value={explanation} />

    <button>Add Note</button>



    </form>
  )
}
