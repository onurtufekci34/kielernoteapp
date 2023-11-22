import {useState} from 'react'





export default function NoteForm() {

    const [title,setTitle] = useState("")
    const [explanation, setExplanation] = useState("")


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const note = {title,explanation}

        console.log(note)

        setTitle("")
        setExplanation("")
    }




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
