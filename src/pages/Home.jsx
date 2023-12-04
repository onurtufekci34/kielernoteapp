import NoteForm from "../components/NoteForm";
import {useAuthContext} from '../hooks/useAuthContext'




export default function Home() {

  const {user} = useAuthContext()


  return (
    <div className="home">
      <NoteForm uid={user.uid}/>
    </div>
  )
}
