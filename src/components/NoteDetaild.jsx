import {useFirestore} from '../hooks/useFirestore'



export default function NoteDetaild({ not }) {

  const {deleteDocument} = useFirestore("nots")


  return (
    <div className="not-detay">
      <h4>{not.title}</h4>
      <p>{not.explanation}</p>
      <p className="zaman">{not.date.toString()}</p>
      <span onClick={()=>deleteDocument(not.id)}>X</span>
    </div>
  );
}
