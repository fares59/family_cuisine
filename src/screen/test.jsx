



// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { UserContext } from "../context/user_context";
// import { useContext } from "react";
// import "../css/form.css";

// const RegisterScreen = () => {
//   const navigate = useNavigate();
//   const [cookie, setCookie] = useCookies(["token"]);
//   const { setUser } = useContext(UserContext);

//   return (
//     <section id="form">
//       <div id="toggle-forms">
//         <button className="waves-effect waves-light active" id="login">
//           Login
//         </button>
//         <button className="waves-effect waves-light" id="register">
//           Register
//         </button>
//       </div>
//       <form className="col s12">
//         <div className="row center-align">
//           <h4 className="white-text">login</h4>
//         </div>
//         <div className="row">
//           <div className="input-field">
//             <input id="email" type="email" class="validate" />
//             <label for="email">Email</label>
//           </div>
//         </div>
//         <div className="row">
//           <div className="input-field">
//             <input id="password" type="password" class="validate" />
//             <label for="password">Password</label>
//           </div>
//         </div>
//         return(
//         <div className="row center-align">
//           <button className="btn waves-effect waves-light">Login</button>
//         </div>
//         <p className="forgot">Forgot Password?</p>
//         <ul className="animate">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </form>
//       <form className="col s12">
//         <div className="row center-align">
//           <h4 className="white-text">register</h4>
//         </div>
//         <div className="row">
//           <div className="input-field">
//             <input id="email" type="email" class="validate" />
//             <label for="email">Email</label>
//           </div>
//         </div>
//         <div className="row">
//           <div className="input-field">
//             <input id="password" type="password" class="validate" />
//             <label for="password">Password</label>
//           </div>
//         </div>
//         <div className="row">
//           <div className="input-field">
//             <input id="password" type="password" class="validate" />
//             <label for="password">Re-Password</label>
//           </div>
//         </div>
//         <div className="row center-align">
//           <button className="btn waves-effect waves-light">Register</button>
//         </div>
//         <ul className="animate">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </form>
//     </section>
//   );
// };

// export default RegisterScreen;

// import React from 'react';
// import { Extenders } from '../Extenders';
// Extenders.init();

// function Register(props) {

//     function handleSubmit(event) {
//         event.preventDefault();
//         let formData = new FormData(event.currentTarget);
//         const value = JSON.stringify(Object.fromEntries(formData));
//         const json = JSON.tryParse(value);
//         fetch("http://localhost:5000/auth/register", {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             method: "post",
//             body: JSON.stringify(json)
//         })
//             .then(resp => resp.text()).then(text => {
//                 const json = JSON.tryParse(text);
//                 console.log(json);
//             });
//     }

//     return (
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
//     );
// };
// export default Register;
