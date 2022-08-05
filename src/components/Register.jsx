import React from 'react';
import { Extenders } from '../Extenders';
Extenders.init();

function Register(props) {

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        const value = JSON.stringify(Object.fromEntries(formData));
        const json = JSON.tryParse(value);
        fetch("http://localhost:5000/auth/register", {
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

    return (
        <div className='myBigForm'>
            <div className='imageForm'><img className="imageRegister" src= {process.env.PUBLIC_URL + '/images/pictures/Web_Photo_Editor (1).jpg'} alt=""/></div> 
            <div className='myForm registerForm'>
                <form id='RegisterForm' onSubmit={handleSubmit}>
                    <h3 className='titleForms lettre-space-2'>Member register</h3>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label> */}
                        <input placeholder="Email Adress" type="email" className="myInputs form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label> */}
                        <input placeholder="Password" type="password" className="form-control myInputs" name="password1" id="exampleInputPassword1" />
                        <input placeholder="Confirm password" type="password" className="form-control myInputs" name="password2" id="exampleInputPassword2" />
                    </div>
                    <div className='submitForm'>
                        <input type="submit" className="btn btn-primary mySubmit" name="submit" value="Register"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Register;