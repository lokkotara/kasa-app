import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  return (
    <main className="errorContainer">
      <div className="errorUpperPart">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="errorLowerPart">
        <span>Retourner sur la page d'accueil</span>
      </Link>
    </main>
  );
}