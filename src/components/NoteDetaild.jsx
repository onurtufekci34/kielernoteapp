import {useFirestore} from '../hooks/useFirestore'
import moment from 'moment'
import 'moment/locale/de' 



export default function NoteDetaild({ not }) {

  const {deleteDocument} = useFirestore("nots")


  return (
    <div className="not-detay">
      <h4>{not.title}</h4>
      <p>{not.explanation}</p>
      <p className="zaman">{moment(new Date(not.date.toDate())).format('L')}</p>
      <span onClick={()=>deleteDocument(not.id)}>X</span>
    </div>
  );
}
