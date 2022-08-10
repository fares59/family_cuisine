// function AccountScreen(props){

//     return(
//         <>
//             <h2 className="pageTitle lettre-space-5">Account Screen</h2>
//         </>
//     )
// }
// export default AccountScreen;



import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../helpers/string.helper";



const AccountScreen = (props) => {
    const [email, setemail] = useState("");
    const [isNewDelete, setNewDelete] = useState(false);
    const [mdp, setMdp] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        const value = JSON.stringify(Object.fromEntries(formData));
        const json = JSON.tryParse(value);
        fetch("http://localhost:5000/auth/Account", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "post",
            body: JSON.stringify(json)
        })
            .then(resp => resp.text()).then(text => {
                const json = JSON.tryParse(text);
                console.log(json);
            });
    }
   
    useEffect(() => {
        document.querySelectorAll(".email").forEach((number) => {
          number.onclick = (event) => {
            const newValue =
              (isNewDelete ? mdp : email) +
              event.currentTarget.innerText;
              isNewDelete ? setMdp(newValue) : setMdp(newValue);
          };
        });
    }, [email, isNewDelete, mdp]);


    const deleteUser = () => {
        const newDelete = isNewDelete
        ? mdp.slice(0, -1)
        : email.slice(0, -1);
        // isNewDelete ? setMdp(newValue) : setemail(newDelete);
    }

 
        return (
        <>
            <div className="d-flex justify-content-center h-100">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="login-form bg-light mt-4 p-4">
                            <form onSubmit={handleSubmit} className="row g-3">
                                <h4>Changer votre mot de passe</h4>

                                {/* <div className="col-12"> */}
                                <label>Confimation supression compte</label>

                                <input
                                    type="supression"
                                    id="password1"
                                    className="form-control"
                                    placeholder="Confimation supression compte"
                                />

                                <button type="submit" className="btn btn-dark float-end">
                                    supprimer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    };



export default AccountScreen;