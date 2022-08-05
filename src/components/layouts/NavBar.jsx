import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user_context";
import Logo from "../Logo";
import Auth from "../../context/Auth";


function NavBar() {
  // const { isAuthenticated } = useContext(Auth);
  const { user } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
         <Logo/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Acccueil
              </Link>
            </li>

       
            {!user.id && (
              <>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/RenewPassword">
                    AccountRenewpassScreen
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/Account">
                    AccountScreen
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/ValidationAccount">
                    AccountValidationScreen
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Register">
                    RegisterScreen
                  </Link>
                </li>
              </>
            )}

            {user.id && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/User">
                    UserScreen
                  </Link>
                </li>
              </>
            )}

            {(user.id && user.role >0) && (
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/Admin">
                  AdminScreen
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {user.id ? (
              <li className="nav-item">
                <Link className="nav-link" to="/Logout">
                  Logout {user.email}
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
