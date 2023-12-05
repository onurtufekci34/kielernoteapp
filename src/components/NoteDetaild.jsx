import { useFirestore } from '../hooks/useFirestore';
import moment from 'moment';
import 'moment/locale/de';

export default function NoteDetaild({ not }) {
  const { deleteDocument } = useFirestore("nots");

  let formattedDate = "";
  if (not.date && not.date.toDate) {
    formattedDate = moment(not.date.toDate()).format('L');
  }

  return (
    <div className="not-detay">
      <h4>{not.title}</h4>
      <p>{not.explanation}</p>
      <p className="zaman">{formattedDate}</p>
      <span onClick={() => deleteDocument(not.id)} className='material-symbols-outlined'>delete_forever</span>
    </div>
  );
}
