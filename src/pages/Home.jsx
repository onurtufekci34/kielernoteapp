import NoteForm from "../components/NoteForm";
import {useAuthContext} from '../hooks/useAuthContext'
import NoteDetaild from "../components/NoteDetaild";
import {useCollection} from '../hooks/useCollection'





export default function Home() {

  
  const {user} = useAuthContext()
  const {documents,error} = useCollection('nots',["uid","==",user.uid],["date","desc"])

  //console.log("dokuman",documents)


  return (
    <div className="home">
      <NoteForm uid={user.uid}/>
      <hr />

      <div className="notlar">
        {error && <div className="error">{error}</div>}
        {documents && documents.map((doc)=>(
          <NoteDetaild not={doc} key={doc.id}/>
          ))}
      </div>
    </div>
  )
}
