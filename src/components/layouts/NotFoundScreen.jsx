import { Link } from "react-router-dom";

const NotFoundSCreen = () => {
    return (

        <>
            <h1>Erreur 404 - Cette page n'existe pas gros nul !</h1>
            <Link to="/">Tu retourne à l'accueil maintenant !!!</Link>
        </>
    )
}

export default NotFoundSCreen;