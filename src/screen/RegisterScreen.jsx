
import  Register  from "../components/Register";
function RegisterScreen(props){

    return(
        <>
             <h2 className="pageTitle lettre-space-5">Page d'inscription</h2>
            <Register />
        </>
    )
};
export default RegisterScreen;




// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

// export default function RegisterScreen(){
//     const [successReg,setSuccesReg] = useState({"registered":false});
//     //const [errors,setErrors] = useState({});
//     //const navigate = useNavigate();
//     useEffect (()=>{
//         loadCaptchaEnginge(2);
//     },[])

//     const handleSubmit =async (e)=>{
//         e.preventDefault();
//         console.log("envoyé",e.currentTarget);
//         const formData = new FormData(e.currentTarget);
//         console.log("form data",formData)
//         const jsonData = Object.fromEntries(formData.entries());
//         const body = JSON.stringify(jsonData);
//         console.log("body",jsonData.captcha);
//         if (validateCaptcha(jsonData.captcha)===true) {
//             console.log("captcha match");
//             //alert('Captcha Matched');
//             console.log("captcha ok envoie de la requete register");
//             await fetch('http://localhost:5000/auth/register', {
//                 method:'post',
//                 headers: {
//                   "content-type": "application/json",
//                 },
//                 body,
//               })
//               .then(response=>response.json())
//               .then((jsonData) => {
//                   console.log("reponse ",jsonData);
//                   //let data = await response.json();
//                   //console.log("response message",data.message);
//                     // if (response.status === 200){
//                     jsonData.status === 200 ? 
//                         setSuccesReg({
//                             "registered":true,
//                             "token":jsonData.token
//                         }):
//                         setSuccesReg({
//                             "registered":false,
//                             "status":jsonData.status,
//                             "message":jsonData.message
//                         })
                    
//                 })
//                 .catch(console.log);
//         }
   
//         else {
//             console.log("catptcha does not match")
//             //alert('Captcha Does Not Match');
//         }    
//     }

//     if (successReg.registered){
//         const url = '../account/validation?t=' + successReg.token;
//         return(<>
//             <div>coompte créé , en attente de validation !</div>
//             <p>ATTENTION ne pas garder en prod XD</p>
//             <p>cliquer sur le lien de validation (faux mail )</p>
//             <Link to={url}>confirmer l'inscription</Link>
//         </>)
//     }
//     return (
//         <>
//         <div>register page</div>
//         <form onSubmit={handleSubmit}>
//             <div>
//             <label htmlFor='mail'>adresse email</label>
//             <input type="mail" name="email"></input>
//             </div>
//             <div>
//             <label htmlFor='password1'>password1</label>
//             <input type="text" name="password1"></input>
//             </div>
//             <div>
//             <label htmlFor='password2'>password2</label>
//             <input type="text" name="password2"></input>
//             </div>
//             < LoadCanvasTemplate />
//             <input name="captcha"></input>
//             <button>creer compte</button>
//         </form>
//         </>
//     )
// }





// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

// function RegisterScreen(){
//     const navigate = useNavigate();
//     useEffect (()=>{
//         loadCaptchaEnginge(6);
//     },[])

//     const handleSubmit =async (e)=>{
//         e.preventDefault();
//         console.log("envoyé",e.currentTarget);
//         const formData = new FormData(e.currentTarget);
//         console.log("form data",formData)
//         const jsonData = Object.fromEntries(formData.entries());
//         const body = JSON.stringify(jsonData);
//         console.log("body",jsonData.captcha);
//         if (validateCaptcha(jsonData.captcha)==true) {
//             //alert('Captcha Matched');
//             console.log("captcha ok envoie de la requete register");
//             await fetch('http://localhost:5000/auth/register', {
//                 method:'post',
//                 headers: {
//                   "content-type": "application/json",
//                 },
//                 body,
//               }).then((response) => {
//                   console.log("reponse ",response.status);
//                     response.status === 200?
//                         navigate('/auth/validation'):
//                         navigate('auth/register')
//                     //return callback ? callback(response) : response;
//                 })
//                 .catch(console.log);
//         }
   
//         else {
//             //alert('Captcha Does Not Match');
//         }    
//     }

//     return (
//         <>
//         <div>register page</div>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='mail'>adresse email</label>
//             <input type="mail" name="mail"></input>
//             < LoadCanvasTemplate />
//             <input name="captcha"></input>
//             <button>creer compte</button>
//         </form>
//         </>
//     )
// }
// export default RegisterScreen;





// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { UserContext } from "../context/user_context";
// import { useContext } from "react";


// function RegisterScreen(props) {
//   const navigate = useNavigate();
//   const [cookie, setCookie] = useCookies(["token"]);
//   const { setUser } = useContext(UserContext);

//   function handleSubmit(event) {
//     event.preventDefault();
//     let formData = new FormData(event.currentTarget);
//     const value = JSON.stringify(Object.fromEntries(formData));
//     const json = JSON.parse(value);
//     fetch("http://localhost:5000/auth/register", {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "post",
//         body: JSON.stringify(json)
//     })
//         .then(resp => resp.text()).then(text => {
//             const json = JSON.tryParse(text);
//             console.log(json);
//         });
// }

//   return (
    
      
       
   
       
//         <div className='myBigForm'>
//             <div className='imageForm'><img className="imageRegister" src= {process.env.PUBLIC_URL + '/images/pictures/Web_Photo_Editor (1).jpg'} alt=""/></div> 
//             <div className='myForm registerForm'>
//                 <form id='RegisterForm' onSubmit={handleSubmit}>
//                     <h3 className='titleForms lettre-space-2'>Member register</h3>
//                     <div className="mb-3">
//                         {/* <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label> */}
//                         <input placeholder="Email Adress" type="email" className="myInputs form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required />

//                     </div>
//                     <div className="mb-3">
//                         {/* <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label> */}
//                         <input placeholder="Password" type="password" className="form-control myInputs" name="password1" id="exampleInputPassword1" />
//                         <input placeholder="Confirm password" type="password" className="form-control myInputs" name="password2" id="exampleInputPassword2" />
//                     </div>
//                     <div className='submitForm'>
//                         <input type="submit" className="btn btn-primary mySubmit" name="submit" value="Register"></input>
//                     </div>
//                 </form>
//             </div>
//         </div>
  
  

//     )};
 

// export default RegisterScreen;



