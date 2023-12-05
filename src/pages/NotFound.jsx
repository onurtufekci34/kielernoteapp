import Notfoundgif from '../assets/notfound.webp'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound_container">
        <div>
          <h1 className="title">404</h1>
          <p className="description">Oops! Page not found.</p>
          <p className="info">
            Sorry, the page you are looking for might have been removed or doesn't exist.
          </p>
          <img className="not-found-img" src={Notfoundgif} alt="not found gif" />
        </div>
      </div>
    </div>
  );
}
