import { useEffect, useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import {LoadCanvasTemplate, loadCaptchaEnginge,validateCaptcha,} from "react-simple-captcha";
import { useCookies } from "react-cookie";
import { UserContext } from "../context/user_context";
import { Extenders } from '../Extenders';
Extenders.init();


const LoginScreen = () => {
  const navigate = useNavigate();
  const [cookie,setCookie] = useCookies(['token']);
  const {setUser} = useContext(UserContext);

  useEffect(()=>{
      loadCaptchaEnginge(2);
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const jsonData = Object.fromEntries(formData.entries());
    const body = JSON.stringify(jsonData);
    const user_captcha_value =
      document.getElementById("user_captcha_input").value;
    if (validateCaptcha(user_captcha_value) == true) {
      console.log("Captcha Matched");
      
      await fetch('http://localhost:5000/auth/login', {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                body,
            })
            .then(response => response.json())
            .then(jsonData=>{
              console.log(jsonData);
              if (!cookie.token){
                const age = 60*60*24
                setCookie("token",jsonData.token,{maxAge:`${age}`});
                setUser({role:jsonData.role, id:jsonData.id})
              }
              navigate('/Account')
            })

      
    } else {
      console.log("Captcha Does Not Match");

    }
  };

  return (
    <div className="d-flex justify-content-center h-100">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <h4>Bienvenue</h4>
              <div className="col-12">
                <label>email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Votre adresse mail"
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Votre mot de passe"
                />
                <Link to="/account/renewpass">Mot de passe oublié ?</Link>
              </div>
              <div className="col-12">
                <LoadCanvasTemplate />
                <div className="mt-3">
                  <div>
                    <input
                    className="form-control"
                      placeholder="Enter Captcha Value"
                      id="user_captcha_input"
                      name="user_captcha_input"
                      type="text"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark float-end">
                  login
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Pas encore de compte ? <Link to="/Register">Créez en un</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default LoginScreen;