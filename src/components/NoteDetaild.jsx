export default function NoteDetaild({ not }) {
  return (
    <div className="not-detay">
      <h4>{not.title}</h4>
      <p>{not.explanation}</p>
      <p className="zaman">{not.date.toString()}</p>
      <span>X</span>
    </div>
  );
}
