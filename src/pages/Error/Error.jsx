import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="errorContainer">
      <div className="errorUpperPart">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="errorLowerPart">
        <span>Retourner sur la page d'accueil</span>
      </Link>
    </div>
  );
}

export default Error;
