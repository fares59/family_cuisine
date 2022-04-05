import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

const LogoutScreen = () => {
const navigate = useNavigate();
const {user, setUser} = useContext(UserContext);
const cookieStr = 'token=vide ; max-age=0';
document.cookie = cookieStr;
useEffect(() =>{
    setTimeout(()=>{
        setUser ({});
        navigate("/");
    },1000);
}) 
    return (
        <h1>Deconnexion ... </h1>
    );
}

export default LogoutScreen;