import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [cookie] = useCookies(['token']);
    const [user, setUser] = useState({}) //!state local dispo dans le provider

//**** on va fetch les données utilisateur grace au token contenu dans le cookie****/
    useEffect(() =>{
        if (cookie.token){
            console.log("fetch");
            fetch("http://localhost:5000/auth/refresh_token",
            {
                method: 'post', 
                credentials:'include'     //?sert a envoyé le cookie en tant que credentials.
            })
            .then(response => {
                if( response.status === 200){
                    return response.json();
                }
                else{
                    return "error";
                }


            })
            .then((jsonData) => {
                console.log("réponse app update token ", jsonData);
                //let result;
                if (jsonData.id) {
                    let temp = 
                    {
                   
                            "id": jsonData.id,
                            "role": jsonData.role,
                            "email":jsonData.email
                            
                        
                    }
                    setUser(temp);
                }
            }).catch(console.log);
        }


    },[cookie])
    //**creation de composant englobant ***//

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>



    )

}

export { UserContext, UserProvider };